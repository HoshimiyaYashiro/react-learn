import { SignIn } from "@/app/components/auth/sign-in";

const AuthPage = async () => {
  return (
    <div className="auth-page min-h-screen flex justify-center items-center">
      <SignIn />
    </div>
    
  );
};

export default AuthPage;