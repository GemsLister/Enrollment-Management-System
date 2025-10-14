import { GreetingsLogin } from "../department_head/HeadGreetings";
import { HeadLoginForm } from "../department_head/HeadLoginForm";
import { HeadAvatar } from "../department_head/HeadAvatar";

export const HeadLogin = () => {
  return (
    <div className="grid grid-cols-2 h-[100dvh] font-open-sans bg-warm-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <GreetingsLogin />
        <HeadLoginForm />
      </div>
      <HeadAvatar />
    </div>
  );
};
