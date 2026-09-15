import { Role } from "@/features/auth/auth.interface";
import { IPublicNavItem } from "@/interface/navigation.interface";

export const publicNavItems: IPublicNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const DashboardRoutes = {
  [Role.ADMIN]: "/dashboard/admin",
  [Role.DOCTOR]: "/dashboard/doctor",
  [Role.PATIENT]: "/dashboard/patient",
  [Role.SUPER_ADMIN]: "/dashboard/admin",
};
