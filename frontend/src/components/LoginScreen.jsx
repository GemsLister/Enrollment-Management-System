import { Link } from "react-router";
import AvatarHead from "../assets/Avatar_Head.png";
import AvatarOfficer from "../assets/Avatar_Officer.png";

export const LoginScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5rem] bg-deep-navy-blue h-[100dvh] text-warm-white">
      <h1 className="font-open-sans laptop:text-[30px] desktop:text-[40px]">
        CHOOSE ACCOUNT TYPE
      </h1>

      <div className="flex gap-[10rem]">
        {/* For Department Head Type  */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={AvatarHead}
            alt="department-head-img"
            className="laptop:w-[180px] desktop:w-[260px]"
          />
          <Link to="/login/department_head" state={{ role: "department_head" }}>
            <button className="p-3 bg-muted-gold laptop:text-[16px] desktop:text-[28px] laptop:w-[185px] desktop:w-[310px] rounded-[10px] cursor-pointer">
              Department Head
            </button>
          </Link>
        </div>
        {/* For Enrollment Officer Type  */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={AvatarOfficer}
            alt="enrollment-officer-img"
            className="laptop:w-[180px] desktop:w-[260px]"
          />
          <Link to="/login/officer" state={{ role: "officer" }}>
            <button className="p-3 bg-muted-gold laptop:text-[16px] desktop:text-[28px] laptop:w-[185px] desktop:w-[310px] rounded-[10px] cursor-pointer">
              Enrollment Officer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
