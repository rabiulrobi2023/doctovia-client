import Link from "next/link";
import Image from "next/image";
import LoginForm from "@/features/auth/components/LoginForm";
import medicalBgImg from "../../../../public/assets/medical_bg.jpg";
import logo from "../../../../public/assets/logo_doctovia1.png";
import Logo from "@/components/shared/Logo";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-green-700 text-2xl"
          >
            <Logo />
            Doctovia
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={medicalBgImg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
