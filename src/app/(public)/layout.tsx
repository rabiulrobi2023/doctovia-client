import PublicFooter from "@/components/layouts/public/PublicFooter";
import PublicNavbar from "@/components/layouts/public/PublicNavbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />
      <main className="flex-1"> {children}</main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
