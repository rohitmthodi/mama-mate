import navigation from "./navigation";

export const ROLE_LABELS = {
  admin: "Administrator",
  panchayat: "Panchayat",
  hospital: "Hospital",
  asha: "ASHA Worker",
  mother: "Mother",
};

export const OFFICIAL_ROLES = Object.keys(navigation).filter(
  (role) => role !== "mother",
);

export const getRoleLabel = (role) => ROLE_LABELS[role] || "User";

export const getRoleHome = (role) => {
  return navigation[role]?.[0]?.path || "/unauthorized";
};
