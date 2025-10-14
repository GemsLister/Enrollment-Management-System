import { Link, useLocation } from "react-router";
import UsernameIcon from "../../assets/username.png";
import EmailIcon from "../../assets/email.png";
import PasswordIcon from "../../assets/password.png";
import Successful from "../../assets/successful.svg";
import Failed from "../../assets/failed.svg";
import { useSignUp } from "../../hooks/useSignUp";
import { useState } from "react";

export const SignUpForm = () => {
  const location = useLocation();
  const role = location.state?.role || "officer";

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { signup, success, error } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup({ ...form, role });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        {success && (
          <div className="flex justify-center p-3 gap-[7px] w-100">
            <img src={Successful} alt="success-sign-up" />
            <p className="text-ocean-green">Successful Registration!</p>
          </div>
        )}
        {error && (
          <div className="flex justify-center p-3 gap-[7px] w-100">
            <img src={Failed} alt="unsuccess-sign-up" />
            <p className="text-brick-red">Registration failed!</p>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-deep-navy-blue font-bold laptop:text-[30px] desktop:text-[45px] laptop:w-[25rem] desktop:w-[35rem]">
          SIGN UP
        </h1>
      </div>

      <form
        action=""
        className="flex flex-col laptop:w-[25rem] desktop:w-[34.5rem] gap-10 laptop:text-[14px] desktop:text-[20px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center p-2 gap-3 w-full border-0 border-b-1 border-slate-gray">
            <img
              src={UsernameIcon}
              alt="username-icon"
              className="laptop:w-[18px] laptop:h-[18px] desktop:w-[24px]"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border-0 focus:outline-none"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="flex gap-3 full p-2 border-0 border-b-1 border-slate-gray">
            <img
              src={EmailIcon}
              alt="email-icon"
              className="laptop:w-[20px] laptop:h-[20px] desktop:w-[24px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-0 focus:outline-none"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex gap-3 full p-2 border-0 border-b-1 border-slate-gray">
            <img
              src={PasswordIcon}
              alt="password-icon"
              className="laptop:w-[20px] laptop:h-[20px] desktop:w-[24px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-0 focus:outline-none"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <button className="p-3 rounded-[10px] bg-muted-gold text-warm-white cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="flex justify-center">
          <p className="laptop:text-[14px]">
            Already have an account?{" "}
            <Link to="/login/officer" className="text-muted-gold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
