import { GreetingsLogin } from "../department_head/Greetings";
import { LoginForm } from "../department_head/LoginForm";
import { HeadAvatar } from "../department_head/Avatar";

export const HeadLogin = () => {
  return (
    <div className="grid grid-cols-2 h-[100dvh] font-open-sans bg-warm-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <GreetingsLogin />
        <LoginForm />
      </div>
      <HeadAvatar />
    </div>
  );
};
