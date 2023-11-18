import { useState, useEffect } from "react";
import AdminLayout from "../layout/AdminLayout";
import WidgetAnalytics from "../components/widget/WidgetAnalytics";
import VisitorsDemographicChart from "../components/charts/VisitorsDemographicChart";
import ReactApexChart from 'react-apexcharts';
import { IoLogoGithub } from "react-icons/io";
import { optionsUniqueVisitors, optionsUniqueVisitorsDark, seriesUniqueVisitors, optionsTrafficSource, optionsTrafficSourceDark, seriesTrafficSource,
  data30dCardWebsiteTraffic, data30dCardConversion, data30dCardSessiondurationMinutes, data30dCardBounce, dataNewReturning, dataGender, dataLanguage, dataAge
 } from "../data/charts";
 import { connect } from "react-redux";

const Analytics = ({global: {darkMode}}) => {

  const [seriesUniqueVisitorsChart, setSeriesUniqueVisitorsChart] = useState([])

  const [rangeTime, setRangeTime] = useState("Month")

  useEffect(() => {
    const delay = setTimeout(() => {
      setSeriesUniqueVisitorsChart(seriesUniqueVisitors)
    }, 10) 
  }, []);

    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="sticky top-0 z-[999] flex items-center py-[3px] px-2">
          <a
            href="https://github.com/martinfeher/fastdash-react-tailwind-admin-dashboard"
            target="_blank"
          >
            <div className="flex text-gray-600 text-[12px] cursor-pointer">
              <IoLogoGithub className="mr-[2px] text-[17px]" /> github link
            </div>
          </a>
        </div>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full">
                  <h2 className="dark:text-gray-300 text-[21px] text-center sm:text-start">
                    Analytics dashboard
                  </h2>
                  <div className="text-gray-500 dark:text-gray-400 text-[12px] ml-[2px] text-center sm:text-start">
                    Monitor metrics, view reports and performance
                  </div>
                </div>
                <div className="w-full sm:w-auto flex justify-end mt-[12px] sm:mt-0">
                  <div className="flex items-center gap-[1px] px-[3px] py-[3px] text-gray-550 dark:text-gray-200  text-[12px] border-2 border-gray-350 dark:border-gray-500 rounded-full"> 
                    <div className={`${ rangeTime === "Day" ? 'bg-blue-500 text-white shadow-lg rounded-full' : ''} px-[11px] py-[3px] cursor-pointer`}
                      onClick={()=> setRangeTime("Day")} 
                      >Day
                    </div>
                    <div className={`${ rangeTime === "Week" ? ' bg-blue-500 text-white shadow-lg rounded-full' : ''} px-[11px] py-[3px] cursor-pointer`}
                      onClick={()=> setRangeTime("Week")}
                      >Week
                    </div>
                    <div className={`${ rangeTime === "Month" ? ' bg-blue-500 text-white shadow-lg rounded-full' : ''} px-[11px] py-[3px] cursor-pointer`}
                      onClick={()=> setRangeTime("Month")}
                      >Month
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 mt-[16px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <WidgetAnalytics
                    title={"Website Traffic"}
                    data={data30dCardWebsiteTraffic}
                    description={"Number of visitors on website."}
                    amount={"24.3K"}
                    differenceRatio={"+33.8%"}
                    color={"#8884d8"}
                    rangeTime={rangeTime}
                  />
                  <WidgetAnalytics
                    title={"Conversion"}
                    data={data30dCardConversion}
                    description={"Number of the visitors turned into user."}
                    amount={"8.25K"}
                    differenceRatio={"+27.5%"}
                    color={"#8884d8"}
                    rangeTime={rangeTime}
                  />
                  <WidgetAnalytics
                    title={"Session Duration"}
                    data={data30dCardSessiondurationMinutes}
                    description={"Amount of time users used the website."}
                    amount={"16min"}
                    differenceRatio={"+5.8%"}
                    color={"#8884d8"}
                    rangeTime={rangeTime}
                  />
                  <WidgetAnalytics
                    title={"Bounce"}
                    data={data30dCardBounce}
                    description={
                      "Visitor opens a single page, then exits without triggering requests."
                    }
                    amount={"6.7K"}
                    differenceRatio={"+5.2%"}
                    color={"#8884d8"}
                    rangeTime={rangeTime}
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="md:col-span-2 p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                    <h4 className="text-[18px] dark:text-gray-300">
                      Visitors overview
                    </h4>
                    <div className="text-[12px] text-brandDarkSecondary dark:text-gray-400">
                      Number of unique visitors
                    </div>
                    <ReactApexChart
                      options={
                        darkMode
                          ? optionsUniqueVisitorsDark
                          : optionsUniqueVisitors
                      }
                      series={seriesUniqueVisitorsChart}
                      // series={seriesUniqueVisitors}
                      type={"bar"}
                      height={270}
                    />
                  </div>
                  <div className="md:col-span-1 p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm flex flex-col justify-between items-center max-w-[500px]">
                    <div className="dark:text-gray-300">Top traffic source</div>
                    <div className="flex justify-center">
                      <ReactApexChart
                        options={
                          darkMode
                            ? optionsTrafficSourceDark
                            : optionsTrafficSource
                        }
                        series={seriesTrafficSource}
                        type={"donut"}
                        height={270}
                      />
                    </div>
                    <div></div>
                  </div>
                </div>
                <div>
                  <h4 className="dark:text-gray-300 text-[18px]">
                    Your Audience
                  </h4>
                  <div className="dark:text-gray-400 text-brandDarkSecondary text-[12px]">
                    Demographic properties of your users
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-[10px]">
                    <VisitorsDemographicChart
                      title={"New / Returning"}
                      range={rangeTime}
                      data={dataNewReturning}
                    />
                    <VisitorsDemographicChart
                      title={"Language"}
                      range={rangeTime}
                      data={dataLanguage}
                    />
                    <VisitorsDemographicChart
                      title={"Gender"}
                      range={rangeTime}
                      data={dataGender}
                    />
                    <VisitorsDemographicChart
                      title={"Age"}
                      range={rangeTime}
                      data={dataAge}
                    />
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

export default connect(mapStateToProps)(Analytics);