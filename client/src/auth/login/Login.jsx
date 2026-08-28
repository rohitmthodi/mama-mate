import LoginBranding from "./LoginBranding";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen box-border p-3 sm:p-4 lg:p-5">
      <div className="mx-auto flex min-h-[calc(100vh-24px)] max-w-360 overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] sm:min-h-[calc(100vh-32px)] lg:min-h-[calc(100vh-40px)]">
        <LoginBranding />

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;