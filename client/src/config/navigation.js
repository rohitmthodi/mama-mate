import {
  LayoutDashboard,
  Hospital,
  MapPinned,
  HandHeart,
  MessageSquareWarning,
  UsersRound,
  CalendarCheck,
  Dumbbell,
  Baby,
  HeartPulse,
  Syringe,
  FileHeart,
  Landmark,
} from "lucide-react";

const navigation = {
  admin: [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Manage Hospitals",
      path: "/admin/manage-hospitals",
      icon: Hospital,
    },
    {
      label: "Manage Panchayats",
      path: "/admin/manage-panchayats",
      icon: MapPinned,
    },
    {
      label: "Schemes",
      path: "/admin/schemes",
      icon: Landmark,
    },
    {
      label: "Panchayat Requests",
      path: "/admin/panchayat-requests",
      icon: HandHeart,
    },
    {
      label: "Complaints",
      path: "/admin/complaints",
      icon: MessageSquareWarning,
    },
  ],

  hospital: [
    {
      label: "Dashboard",
      path: "/hospital/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Maternal & Newborns",
      path: "/hospital/meternal",
      icon: Baby,
    },
    {
      label: "Clinical Records",
      path: "/hospital/clinical-records",
      icon: FileHeart,
    },
    {
      label: "Appointments",
      path: "/hospital/appointments",
      icon: CalendarCheck,
    },
    {
      label: "Exercises",
      path: "/hospital/exercises",
      icon: Dumbbell,
    },
  ],

  panchayat: [
    {
      label: "Dashboard",
      path: "/panchayat/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Manage ASHA Workers",
      path: "/panchayat/manage-asha",
      icon: UsersRound,
    },
    {
      label: "Maternal & Newborns",
      path: "/panchayat/meternal",
      icon: Baby,
    },
    {
      label: "Request a Service",
      path: "/panchayat/request-service",
      icon: HandHeart,
    },
    {
      label: "Government Schemes",
      path: "/panchayat/government-schemes",
      icon: Landmark,
    },
    {
      label: "Complaints",
      path: "/panchayat/complaints",
      icon: MessageSquareWarning,
    },
  ],

  asha: [
    {
      label: "Dashboard",
      path: "/asha/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Prenatal Tracking",
      path: "/asha/prenatal-tracking",
      icon: HeartPulse,
    },
    {
      label: "Maternal & Newborns",
      path: "/asha/meternal",
      icon: Baby,
    },
    {
      label: "Immunizations",
      path: "/asha/immunizations",
      icon: Syringe,
    },
    {
      label: "Government Schemes",
      path: "/asha/government-schemes",
      icon: Landmark,
    },
    {
      label: "Complaints",
      path: "/asha/complaints",
      icon: MessageSquareWarning,
    },
  ],

  mother: [
    {
      label: "Dashboard",
      path: "/mother/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "My Health",
      path: "/mother/my-health",
      icon: HeartPulse,
    },
    {
      label: "Prenatal Tracking",
      path: "/mother/prenatal-tracking",
      icon: Baby,
    },
    {
      label: "Immunizations",
      path: "/mother/immunizations",
      icon: Syringe,
    },
    {
      label: "Exercises",
      path: "/mother/exercises",
      icon: Dumbbell,
    },
    {
      label: "Complaints",
      path: "/mother/complaints",
      icon: MessageSquareWarning,
    },
  ],
};

export default navigation;