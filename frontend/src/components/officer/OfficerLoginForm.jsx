import { Link, Outlet, useNavigate } from "react-router";
import { useState } from "react";
import EmailIcon from "../../assets/email.png";
import PasswordIcon from "../../assets/password.png";
import googleLogo from "../../assets/googleLogo.png";
import facebookLogo from "../../assets/facebookLogo.png";
import { useLoginResult } from "../../hooks/useLoginResult";

export const OfficerLoginForm = () => {
  const navigate = useNavigate();
  const loginResult = useLoginResult();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    const { success, error } = await loginResult(form);
    if (success) navigate("/officer_dashboard");
    else if (error) {
      navigate("/login/officer");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <h1 className="text-deep-navy-blue font-bold laptop:text-[30px] desktop:text-[45px] laptop:w-[25rem] desktop:w-[35rem]">
          LOGIN
        </h1>
      </div>
      <div>
        <Outlet />
      </div>
      <form
        action=""
        className="flex flex-col laptop:w-[25rem] desktop:w-[34.5rem] gap-7 laptop:text-[14px] desktop:text-[20px]"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 p-2 w-full border-0 border-b-1 border-slate-gray">
            <img
              src={EmailIcon}
              alt="email-icon"
              className="laptop:w-[20px] laptop:h-[20px] desktop:w-[24px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border-0 focus:outline-none"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="flex gap-3 p-2 w-full border-0 border-b-1 border-slate-gray">
            <img
              src={PasswordIcon}
              alt="password-icon"
              className="laptop:w-[20px] laptop:h-[20px] desktop:w-[24px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-0 focus:outline-none"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <Link to="/officer_dashboard">
            <button className="p-3 rounded-[10px] bg-muted-gold w-full text-warm-white cursor-pointer">
              Login
            </button>
          </Link>
        </div>

        {/* Alternative logins */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-deep-navy-blue">Or login with</p>
          <div className="flex justify-center gap-5">
            <button className="rounded-[50%] laptop:p-3 desktop:p-5 bg-pale-gray cursor-pointer">
              <img
                src={googleLogo}
                alt="google-logo"
                className="laptop:w-[30px] desktop:w-[40px]"
              />
            </button>
            <button className="rounded-[50%] laptop:p-3 desktop:p-5 bg-pale-gray cursor-pointer">
              <img
                src={facebookLogo}
                alt="facebook-logo"
                className="laptop:w-[30px] desktop:w-[40px]"
              />
            </button>
          </div>

          <div className="flex justify-center mt-12">
            <p className="laptop:text-[14px] desktop:text-[20px]">
              Don't have an account yet?{" "}
              <Link
                to="/signup/officer"
                state={{ role: "officer" }}
                className="text-muted-gold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
