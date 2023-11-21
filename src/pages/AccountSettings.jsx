import { useRef } from 'react'
import AdminLayout from "../layout/AdminLayout";
import { connect } from "react-redux";
import { MdOutlineEmail, MdCloudUpload } from "react-icons/md";

const AccountSettings = ({global: {darkMode}}) => {

  const uploadPhotoRef = useRef(null)

  const handleFileChange = () => {
    uploadPhotoRef.current.click(); 
  }
  
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
              <div>
                <h3 className="dark:text-gray-300">
                  Account
                </h3>
                <div className="text-gray-400 dark:text-gray-400 text-[11px] ml-[2px]">
                  /Form/Account
                </div>
              </div>
              <div className="mt-[14px]"> 
                <h5 className="dark:text-gray-300">Personal Info</h5>
                <div className="text-gray-500 dark:text-gray-400 text-[12px] ml-[2px]">
                  Update your photo personal details here
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-[24px] items-center text-[15px]">
              {/* <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-5 mt-[24px] items-center text-[15px]"> */}
                <div className="col-span-12 md:col-span-12 xl:col-span-3 dark:text-gray-300 font-bold">
                  Name
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-4 mt-0 md:mt-[3px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-2 dark:bg-gray-800 dark:text-gray-300 text-[15px] outline-none border border-gray-300 dark:border-gray-600 hover:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 rounded-[3px]"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-4 ml-0 md:ml-5 mt-5 md:mt-0">
                  <input
                    type="text"
                    placeholder="Last Name" 
                    className="w-full px-4 py-2 dark:bg-gray-800 dark:text-gray-300 text-[15px] outline-none border border-gray-300 dark:border-gray-600 hover:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 rounded-[3px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-[24px] items-center text-[15px]">
                <div className="col-span-12 md:col-span-12 xl:col-span-3 dark:text-gray-300 font-bold">
                  Email Address
                </div>
                <div className="relative col-span-12 md:col-span-12 xl:col-span-8 mt-0 md:mt-[3px]"> 
                  <MdOutlineEmail className="absolute left-2 top-[5px] text-gray-400 text-[30px]" />
                  <input
                    type="text"
                    placeholder="john.doe@sample.com"
                    className="w-full pl-11 pr-4 py-2 dark:bg-gray-800 dark:text-gray-300 text-[15px] outline-none border border-gray-300 dark:border-gray-600 hover:border-gray-400 focus:border-gray-500 dark:focus:border-gray-500 rounded-[3px]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-5 mt-[24px] items-center text-[15px]">
                <div className="flex flex-col col-span-12 md:col-span-4 xl:col-span-3 ">
                  <div className="dark:text-gray-300 font-bold">Your Photo</div>
                  <div className="text-gray-500 dark:text-gray-400 text-[12px] ml-[2p]">
                    This will be displayed on your profile
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 xl:col-span-8">
                  <div onClick={handleFileChange} className="relative group w-[120px] h-[120px] border border-slate-300 hover:border-slate-350 dark:hover:border-slate-200 rounded-full cursor-pointer transition duration-200">
                    <MdCloudUpload className="absolute top-6 right-0 left-0 mx-auto text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400 text-[30px] transition duration-200" />
                    <div className="absolute bottom-6 right-0 left-0 mx-auto text-gray-500 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300 text-[12px] text-center transition duration-200">Drop or choose a file</div> 
                  </div>
                  <input id="file" type="file" ref={uploadPhotoRef} className="hidden" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-[24px] items-center text-[15px]">
                <div className="col-span-12 md:col-span-12 xl:col-span-3 dark:text-gray-300 font-bold">
                  Role
                </div>
                <div className="col-span-12 md:col-span-8 xl:col-span-8 mt-0 md:mt-[3px]">
                  <select id="role" className="w-full p-2 dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 focus:border-gray-500 hover:border-gray-400 dark:focus:border-gray-500 rounded-[3px] outline-none cursor-pointer">
                    <option value="Product Designer">Product Designer</option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Software Engineer">Software Engineer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-[24px] items-center text-[15px]">
                <div className="col-span-12 md:col-span-12 xl:col-span-3 dark:text-gray-300 font-bold">
                  Country
                </div>
                <div className="col-span-12 md:col-span-8 xl:col-span-8 mt-0 md:mt-[3px]">
                  <select id="role" className="w-full p-2 dark:bg-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 focus:border-gray-500 hover:border-gray-400 dark:focus:border-gray-500 rounded-[3px] outline-none cursor-pointer">

                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                    <option value="China">China</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 mt-[24px] items-center text-[15px]">
                <div className="col-span-12 md:col-span-12 xl:col-span-3 dark:text-gray-300 font-bold">
                  Bio
                </div>
                <div className="col-span-12 md:col-span-8 xl:col-span-8 mt-0 md:mt-[3px]">
                  <textarea name="" rows="5" className="w-full p-2 dark:bg-gray-800 dark:text-gray-300 border border-gray-300  dark:border-gray-600 hover:border-gray-400 dark:focus:border-gray-500 outline-none rounded-[3px]"></textarea> 
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
  
  export default connect(mapStateToProps)(AccountSettings);