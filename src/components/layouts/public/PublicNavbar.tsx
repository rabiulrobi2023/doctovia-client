import { Button } from "@/components/ui/button";
import { publicNavItems } from "@/constants/navigation.const";
import Link from "next/link";

const PublicNavbar = () => {
  return (
    <header className="h-16 border-b">
      <div className="flex justify-between items-center h-full container mx-auto">
        <div className="text-2xl text-primary font-bold">Doctovia</div>
        <nav className=" flex gap-5 items-center">
          {publicNavItems.map((navItem) => (
            <Link key={navItem.href} href={navItem.href}>
              {navItem.label}
            </Link>
          ))}
        </nav>
        <div>
          <Button
            variant="outline"
            render={<Link href={"/login"}>Login</Link>}
            nativeButton={false}
          />
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
