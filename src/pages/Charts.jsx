import { useState, useEffect } from 'react'
import AdminLayout from "../layout/AdminLayout";
import ReactApexChart from 'react-apexcharts';
import { optionsLine, optionsLineDark, seriesLine, seriesBarStacked, optionsBarStacked, optionsBarStackedDark, seriesAreaSpline, optionsAreaSpline, optionsAreaSplineDark, seriesRadar, optionsRadar, optionsRadarDark } from "../data/charts";
import { connect } from "react-redux";

const Charts = ({global: {darkMode}}) => {
  
const [seriesChartLine, setSeriesChartLine] = useState([])
const [seriesChartAreaSpline, setSeriesChartAreaSpline] = useState([])
const [seriesChartBarStacked, setSeriesChartBarStacked] = useState([])
const [seriesChartRadar, setSeriesChartradar] = useState([])

useEffect(() => {
  
  const delay = setTimeout(() => {
    setSeriesChartLine(seriesLine)
    setSeriesChartAreaSpline(seriesAreaSpline)
    setSeriesChartradar(seriesRadar)
    setSeriesChartBarStacked(seriesBarStacked)
  }, 10) 
 
}, []);

    return (
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="bg-brandLight dark:bg-brandDarkPrimary">
          <AdminLayout>
            <main className="p-4 w-full">
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <h5 className="dark:text-gray-300">Line chart</h5>
                  <ReactApexChart
                    options={darkMode ? optionsLineDark : optionsLine}
                    series={seriesChartLine}
                    type={"line"}
                    height={400}
                  />
                </div>

                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <h5 className="dark:text-gray-300">Area chart</h5>
                  <ReactApexChart
                    options={darkMode ? optionsAreaSplineDark : optionsAreaSpline}
                    series={seriesChartAreaSpline}
                    type={"area"}
                    height={400}
                  />
                </div>

                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <h5 className="dark:text-gray-300">Radar chart</h5>
                  <ReactApexChart
                    options={darkMode ? optionsRadarDark : optionsRadar}
                    series={seriesChartRadar}
                    type={"radar"}
                    height={400}
                  />
                </div>
                <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                  <h5 className="dark:text-gray-300">Bar chart</h5>
                  <ReactApexChart
                    options={darkMode ? optionsBarStackedDark : optionsBarStacked}
                    series={seriesBarStacked}
                    type={"bar"}
                    height={400}
                  />
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
  
  export default connect(mapStateToProps)(Charts);