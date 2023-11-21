import AdminLayout from "../layout/AdminLayout";
import { connect } from "react-redux";

const Newsletter = ({global: {darkMode}}) => {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
              <div>
                <h3 className="dark:text-gray-300">Newsletter</h3>
                <div className="text-gray-400 dark:text-gray-400 text-[11px] ml-[2px]">
                  /Form/Newsletter
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-[10px]">
                <div className="col-span-12 lg:col-span-6 xl:col-span-5 max-w-[500px] flex flex-col gap-3 p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <div className="flex justify-center items-center">
                    <div className="py-2 px-3 bg-blue-400 bg-opacity-70 rounded-[6px]">
                      <img
                        src="/img/form/newsletter1.png"
                        alt="newsletter"
                        className="h-[50px]"
                      />
                    </div>
                  </div>
                  <label htmlFor="newsletter1">
                    <h4 className="dark:text-gray-300 text-center font-bold">
                      Subscribe to our newsletter
                    </h4>
                  </label>
                  <div className="dark:text-gray-400 text-center text-gray-450 text-[13px]">
                    Receive new articles and resources directly on your inbox.{" "}
                    <br />
                    Fill your email below to join our email newsletter today.
                  </div>
                  <div>
                    <input
                      type="text"
                      id="newsletter1"
                      placeholder="Enter your email"
                      className="w-full px-6 py-3 dark:bg-gray-750 dark:text-gray-300 text-[16px]  border border-gray-300 dark:border-gray-600 hover:border-gray-400 focus:border-gray-700 dark:focus:border-gray-500 outline-none rounded-full"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full px-6 py-3 bg-slate-800 hover:bg-slate-900 text-[16px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-5 max-w-[500px] flex flex-col gap-3 p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <div className="flex justify-center items-center">
                    <div className="py-2 px-3 bg-blue-300 bg-opacity-50 rounded-[6px]">
                      <img
                        src="/img/form/newsletter2.png"
                        alt="newsletter"
                        className="h-[50px]"
                      />
                    </div>
                  </div>
                  <label htmlFor="newsletter2">
                    <h4 className="dark:text-gray-300 text-center font-bold">
                      Subscribe to our newsletter
                    </h4>
                  </label>
                  <div className="dark:text-gray-400 text-center text-gray-450 text-[13px]">
                    Be the first to get exclusive offers ands the latest news.
                  </div>
                  <div>
                    <input
                      type="text"
                      id="newsletter2"
                      placeholder="Enter your email"
                      className="w-full px-6 py-3 dark:bg-gray-750 dark:text-gray-300 text-[16px] border border-gray-300 dark:border-gray-600 hover:border-gray-400 focus:border-gray-700 dark:focus:border-gray-500 outline-none rounded-[6px]"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-full px-6 py-3 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[16px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 xl:col-span-5 max-w-[500px] flex flex-col gap-3 p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <div className="flex justify-center items-center">
                    <div className="py-2 px-3 dark:bg-gray-500 dark:bg-opacity-70 rounded-[6px]">
                      <img
                        src="/img/form/newsletter3.png"
                        alt="newsletter"
                        className="h-[50px]"
                      />
                    </div>
                  </div>
                  <label htmlFor="newsletter3">
                    <h4 className="dark:text-gray-300 text-center font-bold">
                      Subscribe to our newsletter
                    </h4>
                  </label>
                  <div className="dark:text-gray-400 text-center text-gray-450 text-[13px]">
                    Receive new articles and resources directly on your inbox.{" "}
                    <br />
                    Fill your email below to join our email newsletter today.
                  </div>
                  <div className="flex px-2">
                    <div className=" w-full flex justify-between p-[3px] dark:bg-gray-750 dark:text-gray-300 border  border-gray-300 dark:border-gray-600 hover:border-gray-700 dark:hover:border-gray-500 rounded-full">
                      <input
                        type="text"
                        id="newsletter3"
                        placeholder="Enter your email"
                        className="w-full px-6 py-3 dark:bg-gray-750 dark:text-gray-300 text-[14px] sm:text-[16px] rounded-full outline-none"
                      />
                      <button
                        type="button"
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-[16px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                      >
                        Subscribe
                      </button>
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
  
  export default connect(mapStateToProps)(Newsletter);