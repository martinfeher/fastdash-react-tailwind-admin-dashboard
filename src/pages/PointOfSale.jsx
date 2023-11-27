import React, { useState, useEffect } from 'react';
import AdminLayout from "../layout/AdminLayout";
import CardPointofsaleItem from "../components/cards/CardPointofsaleItem";
import CardPointofsaleCategory from "../components/cards/CardPointofsaleCategory";
import { connect } from "react-redux";
import { FiEdit } from "react-icons/fi";

const PointOfSale = ({global: {darkMode}}) => {

  const [selectedCategoryPos, setSelectedCategoryPos] = useState(null);
  const handleSelectedCategoryPos = (val) => {
    setSelectedCategoryPos(val)
  }

  const categoryPointofsale = [
    {
      title: 'Beverage',
      count: 12,
    },
    {
      title: 'Soup',
      count: 7,
    },
    {
      title: 'Toast',
      count: 4,
    },
    {
      title: 'Pasta',
      count: 7,
    },
    {
      title: 'Deserts',
      count: 11,
    },
    {
      title: 'Snacks',
      count: 6,
    },
  ]

  const dataInitPointOfSale = [
    {
      title: 'Diet coke',
      imgUrl: '/img/point_of_sale/diet_coke.jpg',
      price: 1.75
    },
    {
      title: 'Hamburger',
      imgUrl: '/img/point_of_sale/hamburger.jpg',
      price: 12
    },
    {
      title: 'Lemonade',
      imgUrl: '/img/point_of_sale/lemonade.jpg',
      price: 2.50
    },
    {
      title: 'Milkshake',
      imgUrl: '/img/point_of_sale/milkshake.jpg',
      price: 4.50
    },
    {
      title: 'White wine',
      imgUrl: '/img/point_of_sale/white_wine_1.jpg',
      price: 6
    },
  ]


  const [dataPointofsale, setDataPointofsale] = useState(dataInitPointOfSale);

  const [searchTermPos, setSearchTermPos] = useState('');
  const [sortTypePos, setSortTypePos] = useState("alphabet_asc");

  const handleSortPosItems = (e) => {
      setSortTypePos(e.target.value)
      let data = sortItems(e.target.value, dataInitPointOfSale);
      setDataPointofsale([...searchItems(searchTermPos, data)])
    }

    const searchPosItems = (e) => {
      setSearchTermPos(e.target.value)
      let data = sortItems(sortTypePos, dataInitPointOfSale);
      setDataPointofsale([...searchItems(e.target.value, data)])
    }

    function sortItems(sortType, data) {

      let dataNew = [...data]
      dataNew.sort(function (a, b) {
        if (sortType === "price_asc") {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
        }
        if (sortType === "price_desc") {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
        }
        if (sortType === "alphabet_asc") {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
        }
        if (sortType === "alphabet_desc") {
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
        }
        return 0;
      });
        return dataNew
    }

    function searchItems(term, data) {
      let dataSearched = []
      if (term === '') {
        return data
      } else {
        data.map((item, index) => {
          if ((item.title.toLowerCase()).includes(term.toLowerCase())) {
            dataSearched.push(item)
          }
        })
        return dataSearched
      }
    }

    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
              <div>
                <h3 className="dark:text-gray-300 mb-[12px]">Point Of Sale</h3>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 ">
                  <div className="col-span-12 md:col-span-12 lg:col-span-8 py-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                      <input
                        type="text"
                        placeholder="Search item"
                        className="w-full sm:w-auto mb-[6px] sm:mb-0 px-4 py-2 dark:bg-gray-800 dark:text-gray-300 text-[15px] outline-none border border-gray-200 dark:border-gray-600 rounded-[6px]"
                        onChange={(e) => searchPosItems(e)}
                      />
                      <div className="flex items-center text-[14px]">
                        <label htmlFor="pos_sort" className="hidden sm:block">Sort by</label>
                        <select
                          id="pos_sort"
                          className="ml-0 sm:ml-[10px] p-2 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-600 focus:border-gray-500 hover:border-gray-400 dark:focus:border-gray-500 rounded-[6px] outline-none cursor-pointer"
                          onChange={(e) => handleSortPosItems(e)}
                        >
                          <option value="alphabet_asc">A to Z</option>
                          <option value="alphabet_desc">Z to A</option>
                          <option value="price_asc">Price Lowest</option>
                          <option value="price_desc">Price Highest</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[16px]">
                      {categoryPointofsale.map((item, index) => (
                        <CardPointofsaleCategory 
                          title={item.title}  
                          count={item.count} 
                          selected={item.title == selectedCategoryPos} 
                          handleSelectedCategoryPos={handleSelectedCategoryPos} 
                          key={index} />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[16px]">
                      {dataPointofsale.map((item, index) => (
                        <CardPointofsaleItem
                          title={item.title}
                          imgUrl={item.imgUrl}
                          price={item.price}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-4 flex flex-col gap-4 mt-0 md:mt-[4px] px-3 py-2">
                    <div className="flex">
                      <div>Ticket</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-brandDarkSecondary text-[14px] rounded-[6px]">
                      <div className="flex justify-between items-center mb-[10px]">
                        <div className="flex dark:text-gray-300">Chicken Wings x 2 <FiEdit className="mt-[2px] ml-[7px] dark:text-gray-300 text-[16px] cursor-pointer"/></div>
                        <div className="dark:text-gray-350 font-bold">$26</div>
                      </div>
                      <div className="flex justify-between items-center mb-[10px]">
                        <div className="flex dark:text-gray-300">French Fries x 2 <FiEdit className="mt-[2px] ml-[7px] dark:text-gray-300 text-[16px] cursor-pointer"/></div>
                        <div className="dark:text-gray-350 font-bold">$14</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex dark:text-gray-300">Fried Calamari x 1 <FiEdit className="mt-[2px] ml-[7px] dark:text-gray-300 text-[16px] cursor-pointer"/></div>
                        <div className="dark:text-gray-350 font-bold">$11</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex p-3 bg-white dark:bg-brandDarkSecondary rounded-[6px]">
                        <input
                          type="text"
                          placeholder="Enter coupon code"
                          className="w-full mr-2 px-4 py-2 bg-gray-150 dark:bg-gray-750 dark:text-gray-300 placeholder:text-gray-350 text-[14px] sm:text-[15px] outline-none rounded-[6px]"
                        />
                        <button
                          type="button"
                          className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                        >
                          Apply
                        </button>
                      </div>
                    </div>

                    <div className="p-3 bg-white dark:bg-brandDarkSecondary text-[14px] rounded-[6px]">
                      <div className="flex justify-between mb-[10px]">
                        <div className="dark:text-gray-300 text-[14px]">Subtotal</div>
                        <div className="dark:text-gray-350 font-bold">$51</div>
                      </div>
                      <div className="flex justify-between mb-[10px]">
                        <div className="dark:text-gray-300 text-[14px]">Discount</div>
                        <div className="dark:text-gray-350 font-bold">-$15</div>
                      </div>
                      <div className="flex justify-between pb-[10px] mb-[10px] border-b border-gray-300">
                        <div className="dark:text-gray-300 text-[14px]">Tax</div>
                        <div className="dark:text-gray-350 font-bold">$10</div>
                      </div>
                      <div className="flex justify-between mb-[10px]">
                        <div className="dark:text-gray-300 text-[14px]">Total</div>
                        <div className="dark:text-gray-350 font-bold">$46</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-[12px]">
                      <div>
                        <button
                          type="button"
                          className="px-3 py-1.5 border hover:bg-red-500 border-red-500 text-[14px] text-red-500 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
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