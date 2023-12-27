import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="relative bg-white h-[100vh] w-full">
        <div>
          <img className="w-[61.33px] h-[54.47px] absolute top-0 right-0 m-3" src="/Logo.svg" />
        </div>
        <div className=" text-sky-500 text-[22px] font-bold font-['Poppins'] pt-24 px-3">
          Welcome to CPPA Platform
        </div>
        <div className="flex justify-center mt-16">
          <img className="w-[174.84px] h-[210.91px]" src="/signup-logo.png" />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 mt-10">
          <button className="w-[80%] h-[47px] rounded-3xl text-white shadow-2xl text-2xl font-bold font-['Poppins'] bg-sky-500">
            <Link href="/signup">
              <span className="">Signup</span>
            </Link>
          </button>
          <button className="w-[80%] h-[47px] mt-10 rounded-3xl text-white text-2xl font-bold font-['Poppins'] bg-sky-500">
            <span className="">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
