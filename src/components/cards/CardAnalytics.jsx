
const CardAnalytics = ({ icon, amount, title, percentage }) => {
  
  return (
    <div className="p-3 bg-white dark:bg-brandDarkSecondary rounded-lg flex flex-col items-center border border-gray-100 dark:border-gray-500 shadow-sm">
      <div className="flex items-center">
        {icon}
        <div className="ml-[10px]">
          <div className="flex items-center">
            <div className="ml-[2px] dark:text-gray-300 text-[23px] font-bold">
              {amount}
            </div>
            <div className="ml-2 text-gray-500 dark:text-gray-400 text-[14px]">
              {title}
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-[25px] h-[25px] flex flex-none justify-center items-center pb-[1px] bg-green-200 dark:bg-green-300 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 stroke-green-500 dark:stroke-green-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </div>
              <div className="ml-1 text-[13px] text-green-600 dark:text-green-400">
                +{percentage}% this month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnalytics;
