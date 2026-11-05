import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import User from "../models/userSchema.js";

dotenv.config();

const getArgument = (name) => {
  const prefix = `--${name}=`;
  const argument = process.argv.find((item) => item.startsWith(prefix));

  return argument ? argument.slice(prefix.length) : "";
};

const createAdmin = async () => {
  const firstName = getArgument("firstName");
  const lastName = getArgument("lastName");
  const email = getArgument("email");
  const mobile = getArgument("mobile");
  const panchayat = getArgument("panchayat");
  const password = getArgument("password");
  const role = getArgument("role") || "admin";

  if (!firstName || !email || !mobile || !panchayat || !password) {
    console.error(
      "Usage: npm run create-admin -- --firstName=... --lastName=... --email=... --mobile=... --panchayat=... --password=... [--role=admin]",
    );
    process.exit(1);
  }

  await connectDB();

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedMobile = mobile.trim();

  const existingEmail = await User.findOne({ email: normalizedEmail });

  if (existingEmail) {
    console.error("A user with this email already exists");
    process.exit(1);
  }

  const existingMobile = await User.findOne({ mobile: normalizedMobile });

  if (existingMobile) {
    console.error("A user with this mobile number already exists");
    process.exit(1);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email: normalizedEmail,
    mobile: normalizedMobile,
    panchayat,
    password: hashedPassword,
    role,
  });

  console.log(`Created ${user.role} account for ${user.email}`);
};

createAdmin()
  .catch((error) => {
    console.error("Create Admin Error:", error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });
