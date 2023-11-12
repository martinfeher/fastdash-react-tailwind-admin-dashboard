import AdminLayout from "../layout/AdminLayout";
import { AiOutlineTag, AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";
import { FaRegComment } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { connect } from "react-redux";


const Kanban = ({global: {darkMode}}) => {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary max-w-screen relative">
          <AdminLayout>
            <main className="p-4 w-full bg-brandLight dark:bg-brandDarkPrimary">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="dark:text-gray-300">Project Tasks</h3>
                </div>
                <div>
                  <button className="flex px-3 py-1.5 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-white text-[14px] rounded-[6px] cursor-pointer transition duration-300 ease-out">
                    <IoAdd className="text-[21px] mt-[2px] mr-[4px]" /> 
                    <div className="mt-[1px]">New board</div>
                  </button>
                </div>
              </div>
              <div className="flex mt-3 items-center">
                <div className="text-blue-600 dark:text-blue-400 text-[15px] mr-4 cursor-pointer">
                  View all
                </div>
                <div className="text-gray-600 dark:text-gray-350 hover:text-blue-400 dark:hover:text-blue-400 text-[15px] mr-4 cursor-pointer">
                  Web Sprint
                </div>
                <div className="text-gray-600 dark:text-gray-350 hover:text-blue-400 dark:hover:text-blue-400  text-[15px] mr-4 cursor-pointer">
                  Development
                </div>
              </div>
              
              <div className="flex mt-3 overflow-x-auto">
                <div className="min-w-[290px] w-[290px] px-2">
                  <div className="flex justify-between">
                    <div className="mb-[2px] dark:text-gray-300">To Do</div> 
                    <div>
                      <AiOutlinePlus className="mr-[2px] text-[19px] text-blue-500 dark:text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-full flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">Manage feedback</div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Actions based on the customer feedback on 25th of
                        November
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-6.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-[13px] border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">5</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">
                        User should receive a daily digest email
                      </div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Dedicated form for a category of users that will perform
                        actions.
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-5.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-[13px] top-0 border border-gray-400 dark:border-gray-500"
                          />
                          <img
                            src="/img/profile/user-11.jpg"
                            alt=""
                            className="h-[30px] rounded-full absolute left-0 top-0 border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex mt-[1px] text-blue-600 dark:text-blue-500 hover:text-gray-700 dark:hover:text-blue-400 cursor-pointer">
                            <AiOutlineCalendar className=" text-[20px]" />
                            <div className="w-[48px] mt-[2px] ml-[2px] text-[13px]">
                              25 Nov
                            </div>
                          </div>
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">7</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[290px] w-[290px] px-2">
                  <div className="flex justify-between">
                    <div className="mb-[2px] dark:text-gray-300">In Progress</div>
                    <div>
                      <AiOutlinePlus className="mr-[2px] text-[19px] text-blue-500 dark:text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">Design new page banner</div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Create a design for new banner
                      </div>
                      <div className="mt-2.5">
                        <img src="/img/kanban/92311.png" alt="" className="" />
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-4.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-[13px] border border-gray-400 dark:border-gray-500"
                          />
                          <img
                            src="/img/profile/user-1.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-0 top-0 border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <ImAttachment />
                            <div className="ml-[2px] text-[13px]">2</div>
                          </div>
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">5</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">
                        Forms tables analytics section
                      </div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Design and development of the forms and tables sent over
                        for analytics section
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-5.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-[13px] top-0 border border-gray-400 dark:border-gray-500"
                          />
                          <img
                            src="/img/profile/user-4.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-0 border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <ImAttachment />
                            <div className="ml-[2px] text-[13px]">4</div>
                          </div>
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">9</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[290px] w-[290px] px-2">
                  <div className="flex justify-between">
                    <div className="mb-[2px] dark:text-gray-300">Comlpeted</div>
                    <div>
                      <AiOutlinePlus className="mr-[2px] text-[19px] text-blue-500 dark:text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">Managing teams (book)</div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        #9689 created by Tim Jones
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-6.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-0 top-0 border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">12</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">Development charts maps</div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Design and development, deployment of the charts, and
                        maps required by the customer
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-12.jpg"
                            alt=""
                            className="h-[30px] rounded-full absolute left-0 top-0 border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <ImAttachment />
                            <div className="ml-[2px] text-[13px]">2</div>
                          </div>
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">4</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">Review Figma design</div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Check designed Figma files
                      </div>
                      <div className="mt-2.5">
                        <img src="/img/kanban/70879.jpg" alt="" className="" />
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-14.jpg"
                            alt=""
                            className="h-[30px] rounded-full absolute left-0 top-0 border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <ImAttachment />
                            <div className="ml-[2px] text-[13px]">9</div>
                          </div>
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">1</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-w-[290px] w-[290px] px-2">
                  <div className="flex justify-between">
                    <div className="mb-[2px] dark:text-gray-300">Waiting</div>
                    <div>
                      <AiOutlinePlus className="mr-[2px] text-[19px] text-blue-500 dark:text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">Review completed apps</div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Final review of finished applications for the customer
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full ">
                          <img
                            src="/img/profile/user-4.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-[13px] border border-gray-400 dark:border-gray-500"
                          />
                          <img
                            src="/img/profile/user-1.png"
                            alt=""
                            className="h-[30px] rounded-full absolute left-0 top-0 border border-gray-400 dark:border-gray-500"
                          />
                        </div>
                        <div className="flex">
                          <div className="flex mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <ImAttachment />
                            <div className="ml-[2px] text-[13px]">2</div>
                          </div>
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">5</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-3 pt-3 pb-2.5 bg-white dark:bg-brandDarkSecondary border border-gray-200 dark:border-gray-450 rounded-[3px] shadow-sm">
                      <div className="font-bold dark:text-gray-300">Check addon information</div>
                      <div className="mt-2.5 text-[14px] text-gray-600 dark:text-gray-350">
                        Review addon information sent in the email
                      </div>
                      <div className="h-[35px] flex justify-between mt-3 text-gray-500 text-[15px]">
                        <div className="relative flex w-full "></div>
                        <div className="flex">
                          <div className="flex mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <ImAttachment />
                            <div className="ml-[2px] text-[13px]">1</div>
                          </div>
                          <div className="flex ml-2.5 mt-[3px] text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[15px] cursor-pointer">
                            <FaRegComment />
                            <div className="ml-[3px] text-[13px]">3</div>
                          </div>
                          <div className="flex mt-[1px] ml-[9px]">
                            <AiOutlineTag className=" text-gray-400 dark:text-gray-350 hover:text-gray-500 dark:hover:text-gray-250 text-[19px] cursor-pointer" />
                          </div>
                        </div>
                      </div>
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
  
  export default connect(mapStateToProps)(Kanban);