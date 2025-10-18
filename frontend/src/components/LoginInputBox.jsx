import EnroLinkImage from "../assets/enrolink-logo.png";

export const LoginBox = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4rem] shadow-lg h-[550px] w-[500px] bg-warm-white rounded-[10px]">
      <div className="flex flex-col dekstop: pl-[3.5rem] gap-5 w-full">
        {/* Logo */}
        <img src={EnroLinkImage} alt="logo" className="w-[210px]" />

        {/* Phrase */}
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[1.9rem] font-extrabold text-antique-ruby">
            Sign in
          </h2>
          <p className="text-raisin-black">
            Good day and hello. Welcome to EnroLink!
          </p>
        </div>
      </div>

      {/* Inputs and button */}
      <div className="flex flex-col items-center gap-10 w-full">
        <input
          type="text"
          className="w-[400px] border-[1px] border-t-0 border-x-0 border-y-cool-raisin-black-300 py-[7px]"
          placeholder="Google Email"
        />
        <input
          type="password"
          className="w-[400px] border-[1px] border-t-0 border-x-0 border-y-cool-raisin-black-300 py-[7px]"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-[400px] bg-antique-ruby text-white p-3 rounded-[10px] cursor-pointer"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
