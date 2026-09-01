import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";
import generateToken from "../utils/generateToken.js";

export const registerMother = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      panchayat,
      password,
      confirmPassword,
    } = req.body;

    // 1. Check required fields
    if (
      !firstName ||
      !email ||
      !mobile ||
      !panchayat ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 2. Check password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    // 3. Check existing email
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    // 4. Check existing mobile
    const existingMobile = await User.findOne({ mobile });

    if (existingMobile) {
      return res.status(409).json({
        message: "Mobile number already registered",
      });
    }

    // 5. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 6. Create mother
    const user = await User.create({
      firstName,
      lastName,
      email,
      mobile,
      panchayat,
      password: hashedPassword,
      role: "mother",
    });

    // 7. Send response
    return res.status(201).json({
      message: "Mother registered successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        panchayat: user.panchayat,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register Mother Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // 2. Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 3. Check whether account is active
    if (!user.isActive) {
      return res.status(403).json({
        message: "Your account is inactive",
      });
    }

    // 4. Compare password with hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // 5. Login successful
    // 5. Generate JWT
    const token = generateToken(user);

    // 6. Login successful
    return res.status(200).json({
      message: "Login successful",

      token,

      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        panchayat: user.panchayat,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};
