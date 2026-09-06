import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View your account information.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">
              First Name
            </p>

            <p className="mt-1 font-medium text-gray-800">
              {user?.firstName || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Last Name
            </p>

            <p className="mt-1 font-medium text-gray-800">
              {user?.lastName || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="mt-1 font-medium text-gray-800">
              {user?.email || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Mobile
            </p>

            <p className="mt-1 font-medium text-gray-800">
              {user?.mobile || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Panchayat
            </p>

            <p className="mt-1 font-medium text-gray-800">
              {user?.panchayat || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Role
            </p>

            <p className="mt-1 font-medium capitalize text-[#00656B]">
              {user?.role || "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;