import { GreetingsLogin } from "./Greetings";
import { LoginForm } from "./LoginForm";
import { OfficerAvatar } from "./Avatar";

export const OfficerLogin = () => {
  return (
    <div className="grid grid-cols-2 h-[100dvh] font-open-sans bg-warm-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <GreetingsLogin />
        <LoginForm />
      </div>
      <OfficerAvatar />
    </div>
  );
};
