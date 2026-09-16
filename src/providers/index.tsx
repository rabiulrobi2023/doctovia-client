"use client";

import QueryProvider from "./query.provider";
import GoogleAuthProvider from "./google.provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleAuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </GoogleAuthProvider>
  );
}
