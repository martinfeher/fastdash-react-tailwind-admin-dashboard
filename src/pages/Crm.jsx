import AdminLayout from "../layout/AdminLayout";
import ReactApexChart from 'react-apexcharts';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { BsPersonFill, BsFillCalendarFill, BsFillFileTextFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { optionsEmailSent, seriesEmailSent } from "../data/charts";
import CardAnalytics from "../components/cards/CardAnalytics";
import { connect } from "react-redux";

 const Crm =  ({global: {darkMode}}) => {
    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <CardAnalytics
                  icon={
                    <div className="mr-[7px] md:mr-0 p-2 bg-green-300 rounded-[3px]">
                      <BsPersonFill className="text-[30px] text-green-600" />
                    </div>
                  }
                  amount={32}
                  title={"New Leads"}
                  percentage={3.9}
                />
                <CardAnalytics
                  icon={
                    <div className="mr-[7px] md:mr-0 p-2 bg-blue-200 dark:bg-blue-300 rounded-[3px]">
                      <MdEmail className="text-[30px] text-blue-500 dark:text-blue-600" />
                    </div>
                  }
                  amount={87}
                  title={"Email"}
                  percentage={1.5}
                />
                <CardAnalytics
                  icon={
                    <div className="mr-[7px] md:mr-0 p-2 bg-orange-200 rounded-[3px]">
                      <BsFillCalendarFill className="text-[30px] text-orange-500" />
                    </div>
                  }
                  amount={17}
                  title={"Appointment"}
                  percentage={23}
                />
                <CardAnalytics
                  icon={
                    <div className="mr-[7px] md:mr-0 p-2 bg-slate-200 dark:bg-slate-300 rounded-[3px]">
                      <BsFillFileTextFill className="text-[30px] text-slate-500" />
                    </div>
                  }
                  amount={22}
                  title={"Proposals"}
                  percentage={4.5}
                />
              </div>
              <div className="grid lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <h4 className="dark:text-gray-300">Lead by country</h4>
                  <div className="grid md:grid-cols-3">
                    <div className="col-span-2">
                      <ComposableMap>
                        <Geographies geography="/map/countries.json">
                          {({ geographies }) =>
                            geographies.map((geo) => (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={
                                  geo.id == "USA"
                                    ? {
                                        default: {
                                          fill: "#77F",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                    : geo.id == "CHN"
                                    ? {
                                        default: {
                                          fill: "#F77",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                    : geo.id == "IND"
                                    ? {
                                        default: {
                                          fill: "#EE9",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                    : geo.id == "BRA"
                                    ? {
                                        default: {
                                          fill: "#9E9",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                    : geo.id == "AUS"
                                    ? {
                                        default: {
                                          fill: "#7F7",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                    : geo.id == "DEU"
                                    ? {
                                        default: {
                                          fill: "#FE9",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                    : geo.id == "FRA"
                                    ? {
                                        default: {
                                          fill: "#55E",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                    : {
                                        default: {
                                          fill: "#CCC",
                                        },
                                        hover: {
                                          fill: "#999",
                                        },
                                      }
                                }
                              />
                            ))
                          }
                        </Geographies>
                      </ComposableMap>
                    </div>
                    <div className="min-w-[190px] mt-[30px] text-[14px]">
                      <div className="flex justify-between items-center">
                        <div className="flex text-gray-800 dark:text-gray-350">
                          <div
                            className="w-1.5 h-1.5 mt-[7px] mr-[8px] rounded-full"
                            style={{
                              backgroundColor: "#77F",
                            }}
                          ></div>
                          USA
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          23.2%
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex text-gray-800 dark:text-gray-350">
                          <div
                            className="w-1.5 h-1.5 mt-[7px] mr-[8px] rounded-full"
                            style={{
                              backgroundColor: "#F77",
                            }}
                          ></div>
                          China
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          16.3%
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex text-gray-800 dark:text-gray-350">
                          <div
                            className="w-1.5 h-1.5 mt-[7px] mr-[8px] rounded-full"
                            style={{
                              backgroundColor: "#EE9",
                            }}
                          ></div>
                          India
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          11.8%
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex text-gray-800 dark:text-gray-350">
                          <div
                            className="w-1.5 h-1.5 mt-[7px] mr-[8px] rounded-full"
                            style={{
                              backgroundColor: "#FE9",
                            }}
                          ></div>
                          Germany
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          7.8%
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex text-gray-800 dark:text-gray-350">
                          <div
                            className="w-1.5 h-1.5 mt-[7px] mr-[8px] rounded-full"
                            style={{
                              backgroundColor: "#9E9",
                            }}
                          ></div>
                          Brazil
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          5.8%
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex text-gray-800 dark:text-gray-350">
                          <div
                            className="w-1.5 h-1.5 mt-[7px] mr-[8px] rounded-full"
                            style={{
                              backgroundColor: "#55E",
                            }}
                          ></div>
                          France
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          4.8%
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex text-gray-800 dark:text-gray-350">
                          <div
                            className="w-1.5 h-1.5 mt-[7px] mr-[8px] rounded-full"
                            style={{
                              backgroundColor: "#7F7",
                            }}
                          ></div>
                          Australia
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">
                          1.7%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm flex flex-col">
                  <div className="dark:text-gray-300">Email sent</div>
                  <div>
                    <ReactApexChart
                      options={optionsEmailSent}
                      series={seriesEmailSent}
                      type={"donut"}
                      height={270}
                    />
                  </div>
                  <div className="mt-[25px] text-gray-700 dark:text-gray-350">Performance</div>
                  <div className="flex justify-between items-center max-w-[180px] text-[14px] mt-[3px]">
                    <div className="text-blue-700 dark:text-blue-500">Opened</div>
                    <div className="text-gray-500 dark:text-gray-400">71%</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm overflow-x-auto">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="dark:text-gray-300">Leads</h4>
                    </div>
                    <div className="mt-[4px] mr-[4px]">
                      <button
                        type="button"
                        className="px-3 py-1.5 hover:bg-blue-700 dark:hover:bg-blue-600 border border-blue-700 dark:border-blue-600 text-[14px] text-blue-700 dark:text-blue-500 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                      >
                        View all Leads
                      </button>
                    </div>
                  </div>
                  <div>
                    <table className="table-auto w-full min-w-[800px] max-w-[1400px]">
                      <thead className="text-gray-700 text-[15px] font-bold">
                        <tr className="">
                          <th className="px-[11px] py-[20px] dark:text-gray-350 text-left ">
                            Name
                          </th>
                          <th className="px-[11px] py-[20px] dark:text-gray-350 text-left">
                            Status
                          </th>
                          <th className="px-[11px] py-[20px] dark:text-gray-350 text-left">
                            Email
                          </th>
                          <th className="px-[11px] py-[20px] dark:text-gray-350 text-left">
                            Created Time
                          </th>
                          <th className="px-[11px] py-[20px] dark:text-gray-350 text-left">
                            Assignee
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-350 text-[15px]">
                        <tr className="h-[34px]">
                          <td className="">
                            <div className="flex items-center gap-2">
                              <span className="">
                                <img
                                  className="h-[26px] rounded-full border border-gray-300"
                                  src="/img/profile/user-20.jpg"
                                  alt=""
                                />
                              </span>
                              <span className="font-semibold">
                                Valentina Aegler
                              </span>
                            </div>
                          </td>
                          <td className="">
                            <button className="px-[7px] py-[2px] text-[11px] border border-slate-250 rounded-full cursor-pointer">
                              New
                            </button>
                          </td>
                          <td className="">valentina.aeglar@hotmail.com</td>
                          <td className="">
                            <span className="text-[14px]">
                              19/09/2023 08:47
                            </span>
                          </td>
                          <td className="">
                            <button className="px-[5px] py-[2px] text-gray-800 dark:text-gray-350 text-[12px] border border-slate-300 rounded-md cursor-pointer">
                              Andrea Cobbett
                            </button>
                          </td>
                        </tr>
                        <tr className="h-[34px]">
                          <td className="">
                            <div className="flex items-center gap-2">
                              <span className="">
                                <img
                                  className="h-[26px] rounded-full border border-gray-300"
                                  src="/img/profile/user-21.jpg"
                                  alt=""
                                />
                              </span>
                              <span className="font-semibold">Liam Aerne</span>
                            </div>
                          </td>
                          <td className="">
                            <button className="px-[10px] pb-[2px] pt-[3px] text-[11px] bg-green-400 dark:bg-green-500 text-white rounded-full cursor-pointer">
                              Sold
                            </button>
                          </td>
                          <td className="">liam_aerne@infotech.io</td>
                          <td className="">
                            <span className="text-[14px]">
                              21/09/2023 11:20
                            </span>
                          </td>
                          <td className="">
                            <button className="px-[5px] py-[2px] text-gray-800 dark:text-gray-350 text-[12px] border border-slate-300 rounded-md cursor-pointer">
                              Toni Lane
                            </button>
                          </td>
                        </tr>
                        <tr className="h-[34px]">
                          <td className="">
                            <div className="flex items-center gap-2">
                              <span className="">
                                <img
                                  className="h-[26px] rounded-full border border-gray-300"
                                  src="/img/profile/user-22.jpg"
                                  alt=""
                                />
                              </span>
                              <span className="font-semibold">Ron Vargas</span>
                            </div>
                          </td>
                          <td className="">
                            <button className="px-[10px] pb-[2px] pt-[3px] text-[11px] bg-green-400 dark:bg-green-500 text-white rounded-full cursor-pointer">
                              Sold
                            </button>
                          </td>
                          <td className="">ronnie_vergas@infotech.io</td>
                          <td className="">
                            <span className="text-[14px]">
                              24/09/2023 10:40
                            </span>
                          </td>
                          <td className="">
                            <button className="px-[5px] py-[2px] text-gray-800 dark:text-gray-350 text-[12px] border border-slate-300 rounded-md cursor-pointer">
                              Julie Walter
                            </button>
                          </td>
                        </tr>
                        <tr className="h-[34px]">
                          <td className="">
                            <div className="flex items-center gap-2">
                              <span className="">
                                <img
                                  className="h-[26px] rounded-full border border-gray-300"
                                  src="/img/profile/user-23.jpg"
                                  alt=""
                                />
                              </span>
                              <span className="font-semibold">
                                Willard Austin
                              </span>
                            </div>
                          </td>
                          <td className="">
                            <button className="px-[10px] pb-[2px] pt-[3px] text-[11px] bg-orange-400 dark:bg-orange-500 text-white rounded-full cursor-pointer">
                              Not interested
                            </button>
                          </td>
                          <td className="">williard_a@hotmail.com</td>
                          <td className="">
                            <span className="text-[14px]">
                              25/09/2023 09:51
                            </span>
                          </td>
                          <td className="">
                            <button className="px-[5px] py-[2px] text-gray-800 dark:text-gray-350 text-[12px] border border-slate-300 rounded-md cursor-pointer">
                              Lorraine Carr
                            </button>
                          </td>
                        </tr>
                        <tr className="h-[34px]">
                          <td className="">
                            <div className="flex items-center gap-2">
                              <span className="">
                                <img
                                  className="h-[26px] rounded-full border border-gray-300"
                                  src="/img/profile/user-24.jpg"
                                  alt=""
                                />
                              </span>
                              <span className="font-semibold">
                                Joyce Freeman
                              </span>
                            </div>
                          </td>
                          <td className="">
                            <button className="px-[10px] pb-[2px] pt-[3px] text-[11px] bg-blue-400 dark:bg-blue-500 text-white rounded-full cursor-pointer">
                              In progress
                            </button>
                          </td>
                          <td className="">joyce991@infotech.io</td>
                          <td className="">
                            <span className="text-[14px]">
                              30/09/2023 06:51
                            </span>
                          </td>
                          <td className="">
                            <button className="px-[5px] py-[2px] text-gray-800 dark:text-gray-350 text-[12px] border border-slate-300 rounded-md cursor-pointer">
                              Severin Ris
                            </button>
                          </td>
                        </tr>
                        <tr className="h-[34px]">
                          <td className="">
                            <div className="flex items-center gap-2">
                              <span className="">
                                <img
                                  className="h-[26px] rounded-full border border-gray-300"
                                  src="/img/profile/user-25.jpg"
                                  alt=""
                                />
                              </span>
                              <span className="font-semibold">
                                Samantha Phillips
                              </span>
                            </div>
                          </td>
                          <td className="">
                            <button className="px-[7px] pb-[2px] pt-[3px] text-[11px] border border-slate-250 rounded-full cursor-pointer">
                              New
                            </button>
                          </td>
                          <td className="">samanthaphil@infotech.io</td>
                          <td className="">
                            <span className="text-[14px]">
                              03/10/2023 08:33
                            </span>
                          </td>
                          <td className="">
                            <button className="px-[5px] py-[2px] text-gray-800 dark:text-gray-350 text-[12px] border border-slate-300 rounded-md cursor-pointer">
                              Max Reusser
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
  
  export default connect(mapStateToProps)(Crm);