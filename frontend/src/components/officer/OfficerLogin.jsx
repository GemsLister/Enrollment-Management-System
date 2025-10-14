import { GreetingsLogin } from "../officer/OfficerGreetings";
import { OfficerLoginForm } from "../officer/OfficerLoginForm";
import { OfficerAvatar } from "../officer/OfficerAvatar";

export const OfficerLogin = () => {
  return (
    <div className="grid grid-cols-2 h-[100dvh] font-open-sans bg-warm-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <GreetingsLogin />
        <OfficerLoginForm />
      </div>
      <OfficerAvatar />
    </div>
  );
};
