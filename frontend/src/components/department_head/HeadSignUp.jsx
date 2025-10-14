import { GreetingsSignUp } from "../department_head/HeadGreetings";
import { HeadSignUpForm } from "./HeadSignUpForm";
import { HeadAvatar } from "./HeadAvatar";

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
