import { GreetingsSignUp } from "../department_head/Greetings";
import { HeadSignUpForm } from "./HeadSignUpForm";
import { HeadAvatar } from "../department_head/Avatar";

export const HeadSignUp = () => {
  return (
    <div className="grid grid-cols-2 h-[100dvh] font-open-sans bg-warm-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <GreetingsSignUp />
        <HeadSignUpForm />
      </div>
      <HeadAvatar />
    </div>
  );
};
