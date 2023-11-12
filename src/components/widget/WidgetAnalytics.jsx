import { BarChart, Bar } from 'recharts';

const WidgetAnalytics = ({ title, description, amount, differenceRatio, color, data }) => {
  
  return (
    <div className="flex justify-between px-4 py-[9px] bg-white dark:bg-brandDarkSecondary border border-gray-100 dark:border-gray-500 text-[14px] text-gray-700 rounded-lg shadow-sm">
      <div className="flex flex-col justify-between">
        <div className="dark:text-slate-300">{title}</div>
        <div className="text-[21px] font-[800] text-gray-900 dark:text-gray-200">{amount}</div>
        <div className="text-[12px] text-gray-500 dark:text-gray-400">{description}</div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="text-green-600 dark:text-green-400 text-[13px]">{differenceRatio}</div>
          <div>
            <div className="w-[51px] h-[20px] flex justify-center items-center bg-gray-200 dark:bg-gray-500 dark:text-gray-200 text-[9px] rounded-full">
              30 days
            </div>
          </div>
        </div>
        <div>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="value" fill={color} />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default WidgetAnalytics;
