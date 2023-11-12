import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const SignIn = () => {
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
            Welcome Back! Stay signed in and get benefits.
          </h2>
          <div className="grid lg:grid-cols-2 gap-4 mt-[35px]">
            <button className="h-11 w-full flex items-center justify-center px-4 py-2 text-sm rounded-[5px] border border-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="27"
                height="27"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
              <div className="ml-[6px] mt-[1px] text-gray-800">
                Signin With Facebook
              </div>
            </button>
            <button className="h-11 w-full flex items-center justify-center px-4 py-2 text-sm rounded-[5px] border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>{" "}
              <div className="ml-[6px] mt-[1px] text-gray-800">
                Signin With Google
              </div>
            </button>
          </div>
          <div className="text-center mt-[25px] text-gray-600 text-[15px]">
            Or, Sign in with your email
          </div>
          <div className="flex flex-col gap-6 mt-[10px]">
            <div>
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your Email"
                defaultValue={"admin@demo.com"}
                className="w-full h-[44px] px-[12px] text-gray-700 border border-gray-300 hover:border-gray-500 rounded-[3px] outline-none
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
                className="w-full h-[44px] px-[12px] text-gray-700 border border-gray-300 hover:border-gray-500 rounded-[3px] outline-none
              focus:border-2 focus:border-gray-700"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    class="toggle-switch absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    for="toggle"
                    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  ></label>
                </div>
                <label for="toggle" className="text-[14px] text-gray-800 mt-[1px]">Remember me</label>
              </div>
              <div className="text-gray-600 hover:text-blue-700 text-[14px] font-[600] underline hover:no-underline cursor-pointer transition duration-300">Forget password?</div>
            </div>
            <div className="mt-[10px]">
              <button className="w-full h-[52px] bg-black text-white rounded-[5px]">Sign in</button>
            </div>
            <div className="text-center">
              <span className="text-gray-600 text-[15px]">Do you want to add an account?</span> <Link to="/sign-up" className="hover:text-blue-700 text-gray-800 font-[600]">Sign up</Link>
            </div>
          </div> 
        </div>
      </div>
    );
  }
  
  export default SignIn