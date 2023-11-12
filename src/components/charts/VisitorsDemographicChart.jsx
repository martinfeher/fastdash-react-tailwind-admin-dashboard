import ReactApexChart from 'react-apexcharts';
import { connect } from "react-redux";

const VisitorsDemographicChart = ({title, range, data, global: {darkMode}}) => {

  const optionsDemographic  = {
    labels: [data[0].label, data[1].label],
    legend: {
      show: false,
    },
    fill: {
      colors: [data[0].color, data[1].color],
    },
    tooltip: {
      y: {
        formatter: function (value, opts) {
          return value.toString() + "%";
        },
      },
    },
  };

  const optionsDemographicDark = {
    theme: {
      mode: 'dark', 
      palette: 'palette1', 
      monochrome: {
          enabled: false,
          color: '#255a55',
          shadeTo: 'dark',
          shadeIntensity: 0.65
      },
    },
    chart: {
      background: '#00000000',
    },
    labels: [data[0].label, data[1].label],
    legend: {
      show: false,
    },
    fill: {
      colors: [data[0].color, data[1].color],
    },
    tooltip: {
      y: {
        formatter: function (value, opts) {
          return value.toString() + "%";
        },
      },
    },
  };

  const series = [data[0].percentage, data[1].percentage]

  return (
    <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm max-w-[500px]">
      <div className="flex justify-between">
        <div className="h-[30px] dark:text-gray-300">{title}</div>
        <div className="w-[51px] h-[20px] mt-[3px] flex justify-center items-center bg-gray-200 dark:bg-gray-500 dark:text-gray-200 text-[9px] rounded-full">
          {range}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <ReactApexChart
          options={darkMode ? optionsDemographicDark : optionsDemographic}
          series={series}
          type={"donut"}
          height={200}
        />
      </div>
      <div>
        <div className="flex justify-between h-[40px] items-center">
          <div className="flex min-w-[82px]">
            <div className="w-1.5 h-1.5 mt-[9px] mr-[8px] bg-blue-500 rounded-full"></div>
            <div className="text-gray-800 dark:text-gray-350">{data[0].label}</div>
          </div>
          <div className="dark:text-gray-400">{data[0].value.toLocaleString()}</div>
          <div className="text-gray-500 dark:text-gray-350">{data[0].percentage}%</div>
        </div>
        <hr />
        <div className="flex justify-between h-[40px] items-center">
          <div className="flex min-w-[82px]">
            <div className="w-1.5 h-1.5 mt-[9px] mr-[8px] bg-green-500 rounded-full"></div>
            <div className="text-gray-800 dark:text-gray-400">{data[1].label}</div>
          </div>
          <div className="dark:text-gray-400">{data[1].value.toLocaleString()}</div>
          <div className="text-gray-500 dark:text-gray-350">{data[1].percentage}%</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  global: state.global,
});

export default connect(mapStateToProps, {

})(VisitorsDemographicChart);
