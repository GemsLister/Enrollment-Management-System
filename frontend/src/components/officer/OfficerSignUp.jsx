import { GreetingsSignUp } from "./OfficerGreetings";
import { SignUpForm } from "../officer/OfficerSignUpForm";
import { OfficerAvatar } from "./OfficerAvatar";

export const OfficerSignUp = () => {
  return (
    <div className="grid grid-cols-2 h-[100dvh] font-open-sans bg-warm-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <GreetingsSignUp />
        <SignUpForm />
      </div>
      <OfficerAvatar />
    </div>
  );
};
