import AvatarOfficer from "../../assets/Avatar_Officer.png";
export const OfficerAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-deep-navy-blue laptop:gap-3 desktop:gap-7">
      <img src={AvatarOfficer} alt="avatar-image" className="laptop:w-[180.5px] desktop:w-[260px]" />
      <div className="flex justify-center bg-muted-gold text-warm-white p-3 desktop:w-[260px] rounded-[10px]">
        <p className="laptop:text-[14px] desktop:text-[20px]">Enrollment Officer</p>
      </div>
    </div>
  );
};
