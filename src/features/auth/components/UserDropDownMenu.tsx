"use client";

import { getInitial } from "@/utils/getInitials";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DashboardRoutes } from "@/constants/navigation.const";
import { IUser, Role } from "../auth.interface";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const UserDropdownMenu = ({
  user,
  userLogout,
}: {
  user: IUser;
  userLogout: () => void;
}) => {
  const router = useRouter();
  const initial = getInitial(user?.name as string);

  const dashboardHref = DashboardRoutes[user?.role as Role];

  const pathName = usePathname();
  const isDashboardRoute = pathName.startsWith("/dashboard");

  const userMenuItems = [
    {
      label: isDashboardRoute ? "Exit From Dashboard" : "Dashboard",
      icon: LayoutDashboard,
      href: isDashboardRoute ? "/" : dashboardHref,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button className="rounded-full w-10 h-10 p-0">
            {user.imageUrl ? (
              <Image
                unoptimized
                src={user.imageUrl}
                height={96}
                width={96}
                alt="profile"
                className="rounded-full"
              />
            ) : (
              <span className="text-xl">{initial}</span>
            )}
          </Button>
        }
      />

      <DropdownMenuContent align="end" className="mt-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem render={<Link href={dashboardHref} />}>
            {userMenuItems.map((userMenu) => (
              <DropdownMenuItem key={userMenu.href}>
                <userMenu.icon />
                <Link key={userMenu.href} href={userMenu.href}>
                  {userMenu.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" onClick={userLogout}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
