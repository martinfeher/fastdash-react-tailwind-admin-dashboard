import AdminLayout from "../layout/AdminLayout";
import { connect } from "react-redux";

const PointOfSale = ({global: {darkMode}}) => {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
              <div>
                <h3 className="dark:text-gray-300">Point Of Sale</h3>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                  <div className="col-span-12 md:col-span-12 lg:col-span-8 mt-[12px] py-2">
                    <div className="flex justify-between items-center">
                      <input
                        type="text"
                        placeholder="Search item"
                        className="px-4 py-2 dark:bg-gray-800 dark:text-gray-300 text-[15px] outline-none border border-gray-200 dark:border-gray-600 rounded-[6px]"
                      />
                      <div className="text-[14px]">
                        <label htmlFor="pos_sort">Sort by</label>
                        <select
                          id="pos_sort"
                          className="ml-[10px] p-2 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-600 focus:border-gray-500 hover:border-gray-400 dark:focus:border-gray-500 rounded-[6px] outline-none cursor-pointer"
                        >
                          <option value="alphabet_asc">A to Z</option>
                          <option value="alphabet_desc">Z to A</option>
                          <option value="price_asc">Price Lowest</option>
                          <option value="price_desc">Price Highest</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[16px]">
                      <div className="h-[70px] flex flex-col justify-center px-4 bg-white rounded-md">
                        <div className="font-bold">Beverage</div>
                        <div className="font-gray-500 text-[12px]">
                          12 items
                        </div>
                      </div>
                      <div className="h-[70px] flex flex-col justify-center px-4 bg-white rounded-md cursor-pointer">
                        <div className="font-bold">Soup</div>
                        <div className="font-gray-500 text-[12px]">7 items</div>
                      </div>
                      <div className="h-[70px] flex flex-col justify-center px-4 bg-white rounded-md cursor-pointer">
                        <div className="font-bold">Toast</div>
                        <div className="font-gray-500 text-[12px]">4 items</div>
                      </div>
                      <div className="h-[70px] flex flex-col justify-center px-4 bg-white rounded-md cursor-pointer">
                        <div className="font-bold">Pasta</div>
                        <div className="font-gray-500 text-[12px]">7 items</div>
                      </div>
                      <div className="h-[70px] flex flex-col justify-center px-4 bg-white rounded-md cursor-pointer">
                        <div className="font-bold">Deserts</div>
                        <div className="font-gray-500 text-[12px]">11 items</div>
                      </div>
                      <div className="h-[70px] flex flex-col justify-center px-4 bg-white rounded-md cursor-pointer">
                        <div className="font-bold">Snacks</div>
                        <div className="font-gray-500 text-[12px]">6 items</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[16px]">
                      <div className="flex flex-col justify-between items-center p-[10px] bg-white rounded-[6px] cursor-pointer">
                        <div>
                          <img
                            src="/img/point_of_sale/hamburger.jpg"
                            alt="hamburger"
                            className="rounded-[6px]"
                          />
                        </div>
                        <div className="mt-[6px] text-gray-700 text-[14px] font-bold">Hamburger</div>
                      </div>
                      <div className="flex flex-col justify-between items-center p-[10px] bg-white rounded-[6px] cursor-pointer">
                        <div>
                          <img
                            src="/img/point_of_sale/white_wine_1.jpg"
                            alt="white wine"
                            className="rounded-[6px]"
                          />
                        </div>
                        <div className="mt-[6px] text-gray-700 text-[14px] font-bold">White wine</div>
                      </div>
                      <div className="flex flex-col justify-between items-center p-[10px] bg-white rounded-[6px] cursor-pointer">
                        <div>
                          <img
                            src="/img/point_of_sale/milkshake.jpg"
                            alt="milkshake"
                            className="rounded-[6px]"
                          />
                        </div>
                        <div className="mt-[6px] text-gray-700 text-[14px] font-bold">Milkshake</div>
                      </div>
                      <div className="flex flex-col justify-between items-center p-[10px] bg-white rounded-[6px] cursor-pointer">
                        <div>
                          <img
                            src="/img/point_of_sale/lemonade.jpg"
                            alt="lemonade"
                            className="rounded-[6px]"
                          />
                        </div>
                        <div className="mt-[6px] text-gray-700 text-[14px] font-bold">Lemonade</div>
                      </div>
                      <div className="flex flex-col justify-between items-center p-[10px] bg-white rounded-[6px] cursor-pointer">
                        <div>
                          <img
                            src="/img/point_of_sale/diet_coke.jpg"
                            alt="Diet coke"
                            className="rounded-[6px]"
                          />
                        </div>
                        <div className="mt-[6px] text-gray-700 text-[14px] font-bold">Diet coke</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-4 px-3 py-2">
                    <div className="flex">
                      <div>Ticket</div>
                      <div>Details</div>
                    </div>
                    <div className="p-3 bg-white text-[14px] rounded-[6px]">
                      <div className="flex justify-between items-center mb-[10px]">
                        <div>Chicken Wings x 2</div>
                        <div>26 USD</div>
                      </div>
                      <div className="flex justify-between items-center mb-[10px]">
                        <div>French Fries x 2</div>
                        <div>14 USD</div>
                      </div>
                      <div className="flex justify-between items-center mb-[10px]">
                        <div>Fried Calamari x 1</div>
                        <div>11 USD</div>
                      </div> 
                    </div>
                    <div>
                      <div className="flex p-3 bg-white rounded-[6px]">
                        <input type="text" placeholder="coupon code"
                        className="px-4 py-2 bg-gray-150 placeholder:text-gray-350 outline-none" />
                        <button type="button" className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Apply</button>
                      </div>
                    </div>
                    <div>total</div>
                    <div className="flex mt-[12px]">
                      <div>
                        <button
                          type="button"
                          className="px-4 py-2 border hover:bg-red-500 border-red-500 text-[15px] text-red-500 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                        >
                          Clear items
                        </button>
                      </div>
                      <div className="ml-[10px]">
                        <button
                          type="button"
                          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                        >
                          Charge
                        </button>
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
  
  export default connect(mapStateToProps)(PointOfSale);