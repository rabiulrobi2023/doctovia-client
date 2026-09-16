"use client";

import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { publicNavItems } from "@/constants/navigation.const";
import UserDropdownMenu from "@/features/auth/components/UserDropDownMenu";
import { useGetMe, useLogout } from "@/features/auth/hooks/auth.hook";
import { showErrorToast, showSuccessTost } from "@/utils/showToast";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const PublicNavbar = () => {
  const { data: user, isLoading } = useGetMe();

  const { mutate: logout, isPending } = useLogout();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: (res) => {
        showSuccessTost(res.message || "Logout successfully", null);
        queryClient.removeQueries({ queryKey: ["user"] });
      },
      onError: (error) => {
        showErrorToast(error, null);
      },
    });
  };

  return (
    <header className="h-16 border-b">
      <div className="flex justify-between items-center h-full container mx-auto">
        <div className="flex items-center gap-2">
          <Logo />
          <div className="text-2xl text-primary font-bold">Doctovia</div>
        </div>
        <nav className=" flex gap-5 items-center">
          {publicNavItems.map((navItem) => (
            <Link key={navItem.href} href={navItem.href}>
              {navItem.label}
            </Link>
          ))}
        </nav>
        <div>
          {user?.data ? (
            <UserDropdownMenu user={user.data} userLogout={handleLogout} />
          ) : (
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
