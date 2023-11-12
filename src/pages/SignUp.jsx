import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const SignUp = () => {
    return (
      <div className="relative flex min-h-screen w-full flex-col justify-center p-3.5 md:p-10 lg:p-22 bg-gradient-to-tr from-[#848794] to-[#3faca3]">
        <div className="fixed left-6 hidden lg:flex">
          <Link to={"/"} className="text-white">
            <div className="flex">
            <IoMdArrowBack className="mt-[4px] mr-[5px]" />
            Back to home
            </div>
          </Link>
        </div>

        <div className="fixed left-2 bottom-3 flex lg:hidden">
          <button className="bg-blue-600 px-[10px] py-[8px] rounded-full">
          <Link to={"/"} className="text-white">
            <div className="flex">
            <IoMdArrowBack className="mt-[4px] mr-[5px]" />
            Back to home
            </div>
          </Link>
          </button>
        </div>
        <div className="mx-auto w-full max-w-md rounded-xl bg-white px-4 py-9 dark:bg-gray-50 sm:px-6 md:max-w-xl md:px-10 md:py-12 lg:max-w-[700px] lg:px-16 xl:rounded-2xl 3xl:rounded-3xl">
          <h2 className="text-center">
            Sign Up
          </h2>
          <div className="mt-[5px] text-gray-500 text-[14px] text-center">Lets get access to the administration area</div>
          <div className="flex flex-col gap-6 mt-[5px]">
          <div>
              <label htmlFor="username" className="text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your Username"
                className="w-full h-[52px] px-[12px] text-gray-700 border border-gray-300 hover:border-gray-500 rounded-[3px] outline-none
              focus:border-2 focus:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your Email"
                defaultValue={"admin@demo.com"}
                className="w-full h-[52px] px-[12px] text-gray-700 border border-gray-300 hover:border-gray-500 rounded-[3px] outline-none
              focus:border-2 focus:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full h-[52px] px-[12px] text-gray-700 border border-gray-300 hover:border-gray-500 rounded-[3px] outline-none
              focus:border-2 focus:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="text-gray-700">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full h-[52px] px-[12px] text-gray-700 border border-gray-300 hover:border-gray-500 rounded-[3px] outline-none
              focus:border-2 focus:border-gray-700"
              />
            </div>
            
            <div className="mt-[10px]">
              <button className="w-full h-[52px] bg-black text-white rounded-[5px]">Sign in</button>
            </div>
            <div className="text-center">
              <span className="text-gray-600 text-[15px]">Already have an account?</span> <Link to="/sign-in" className="hover:text-blue-700 text-gray-800 font-[600]">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUp