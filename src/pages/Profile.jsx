import AdminLayout from "../layout/AdminLayout";
import { IoCloudDoneOutline } from "react-icons/io5";
import { MdFileUpload, MdAutorenew } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { connect } from "react-redux";


const Profile = ({global: {darkMode}}) => {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full flex flex-col gap-5">
              <div className="grid lg:grid-cols-12 gap-5">
                <div className="col-span-4 p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm flex flex-col items-center">
                  <div className="relative h-[70px] w-full bg-gradient-to-r from-cyan-500 to-sky-500">
                    <div className="w-full">
                      <img
                        src="/img/profile/user-4.png"
                        alt=""
                        className="rounded-full h-[67px] absolute -bottom-[32px] left-0 right-0 mx-auto"
                      />
                    </div>
                  </div>
                  <h4 className="h-[30px] mt-[40px] flex items-center dark:text-gray-300">Richard Peterson</h4>
                  <div className="flex items-center justify-between w-full mt-2">
                    <div className="flex flex-col items-center">
                      <div className="text-[19px] dark:text-gray-350">15</div>
                      <div className="text-gray-500 dark:text-gray-350 text-[11px]">Posts</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[19px] dark:text-gray-350">3.7K</div>
                      <div className="text-gray-500 dark:text-gray-350 text-[11px]">Followers</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-[19px] dark:text-gray-350">284</div>
                      <div className="text-gray-500 dark:text-gray-350 text-[11px]">Following</div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center p-2">
                    <div className="flex items-center justify-center rounded-full bg-blue-100 p-[22px]">
                      <IoCloudDoneOutline className="text-blue-500 text-[54px]" />
                    </div>
                    <h4 className="mt-[6px] dark:text-gray-300">Your storage</h4>
                    <div className="px-4 text-center text-[13px] text-gray-500 dark:text-gray-350">
                      Supervise your drive space in the easiest way
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">12GB out of 25GB used</div>
                    <div className="mt-[8px] w-full">
                      <div className="mb-2 h-2.5 overflow-hidden rounded-full bg-gray-200 p-0.5">
                        <div className="w-[41%] relative h-full rounded-full bg-gradient-to-r from-[#626ef6] dark:from-[#4c56c1] to-[#52aafc] dark:to-[#418ed6]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm flex flex-col items-center">
                  <div className="flex flex-col xl:flex-row">
                    <div className="min-w-[110px] xl:min-w-[150px] flex flex-col items-center p-[10px]">
                      <div className="flex items-center justify-center rounded-full bg-blue-100 p-[22px]">
                        <MdFileUpload className="text-blue-500 text-[54px]" />
                      </div>
                      <h4 className="mt-[6px] dark:text-gray-300">Upload files</h4>
                      <div className="px-4 text-center text-[13px] text-gray-500 dark:text-gray-350">
                        JPG, PNG, GIF files are allowed
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 p-3 dark:text-gray-300">
                      <h4>Complete profile</h4>
                      <div className="text-gray-500 text-[13px] dark:text-gray-350">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis eget pharetra felis. Duis eget pharetra felis.
                      </div>
                      <div>
                        <button
                          type="button"
                          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className=" dark:text-gray-300">Projects</h3>
                <div className="text-gray-500 text-[13px] dark:text-gray-350">
                  Design houses, architecture
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2 mt-[8px]">
                  <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-md shadow-sm">
                    <div>
                      <img
                        src="/img/projects/home-decor-1.jpeg"
                        alt=""
                        className="rounded-[6px]"
                      />
                    </div>
                    <div className="mt-[12px] text-gray-500 dark:text-gray-350">Project 1</div>
                    <div className="mt-[4px] dark:text-gray-300 text-[18px] font-[600]">
                      Modern
                    </div>
                    <div className="mt-[6px] text-[14px] text-gray-500 dark:text-gray-350">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div>
                    <div className="flex justify-between mt-[14px]">
                      <button
                        type="button"
                        className="px-[13px] py-1.5 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[14px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                      >
                        View project
                      </button>
                      <div></div>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-md shadow-sm">
                    <div>
                      <img
                        src="/img/projects/home-decor-2.jpeg"
                        alt=""
                        className="rounded-[6px]"
                      />
                    </div>
                    <div className="mt-[12px] text-gray-500 dark:text-gray-350">Project 2</div>
                    <div className="mt-[4px] dark:text-gray-300 text-[18px] font-[600]">
                      Scandinavian
                    </div>
                    <div className="mt-[6px] text-[14px] text-gray-500 dark:text-gray-350">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div>
                    <div className="flex justify-between mt-[14px]">
                      <button
                        type="button"
                        className="px-[13px] py-1.5 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[14px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                      >
                        View project
                      </button>
                      <div></div>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-md shadow-sm">
                    <div>
                      <img
                        src="/img/projects/home-decor-3.jpeg"
                        alt=""
                        className="rounded-[6px]"
                      />
                    </div>
                    <div className="mt-[12px] text-gray-500 dark:text-gray-350">Project 3</div>
                    <div className="mt-[4px] dark:text-gray-300 text-[18px] font-[600]">
                      Minimalist
                    </div>
                    <div className="mt-[6px] text-[14px] text-gray-500 dark:text-gray-350">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div>
                    <div className="flex justify-between mt-[14px]">
                      <button
                        type="button"
                        className="px-[13px] py-1.5 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[14px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                      >
                        View project
                      </button>
                      <div></div>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-md shadow-sm">
                    <div>
                      <img
                        src="/img/projects/home-decor-4.jpeg"
                        alt=""
                        className="rounded-[6px]"
                      />
                    </div>
                    <div className="mt-[12px] text-gray-500 dark:text-gray-350">Project 4</div>
                    <div className="mt-[4px] dark:text-gray-300 text-[18px] font-[600]">
                      Coastal
                    </div>
                    <div className="mt-[6px] text-[14px] text-gray-500 dark:text-gray-350">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div>
                    <div className="flex justify-between mt-[14px]">
                      <button
                        type="button"
                        className="px-[13px] py-1.5 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[14px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                      >
                        View project
                      </button>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="dark:text-gray-300">Pro plan</h4>
                    </div>
                    <div>
                      <button className="flex px-[17px] py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-gray-200 text-[15px] rounded-full cursor-pointer transition duration-300 ease-out">
                        <MdAutorenew className="text-[21px] mt-[2px] mr-[4px]" />
                        <div className="mt-[1px]">Renew now</div>
                      </button>
                    </div>
                  </div>
                  <div className="mt-[12px]">
                    <ul className="text-gray-500 dark:text-gray-350 text-[13px]"> 
                      <li>- Unlimited Reports</li>
                      <li>- 3 Years Data Storage</li>
                      <li>- Search in uploaded images</li>
                    </ul>
                  </div>
                  <div className="flex justify-between mt-[12px]">
                    <button className="flex px-[11px] py-[5px] bg-slate-800 text-gray-200 text-[11px] rounded-full">
                      <BiTimeFive className="text-[15px] mr-[3px]" />
                      <div className="mt-[1px]">10 days left</div>
                    </button>
                    <div className="text-gray-400 dark:text-gray-350 text-[14px]">$12 / month</div>
                  </div>
                  <div className="mt-[8px]">
                    <div className="mb-2 h-2.5 overflow-hidden rounded-full bg-gray-200 p-0.5">
                      <div className="w-[67%] relative h-full rounded-full bg-gradient-to-r from-[#f67062] dark:from-[#e36658] to-[#fc5296] dark:to-[#f14343]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </AdminLayout>
        </div>
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    global: state.global,
  });
  
  export default connect(mapStateToProps)(Profile);