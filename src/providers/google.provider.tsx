import { envVar } from "@/config/envVar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const clientId = envVar.GOOGLE_CLIENT_ID;
  if (!clientId) {
    return <>{children}</>;
  }
  return (
    <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;
