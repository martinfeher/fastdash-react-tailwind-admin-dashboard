import { Link } from "react-router-dom";


const QuicklinkItem = ({ icon, title, link }) => {

  return (
    <Link to={link}>
      <div className="hover:bg-blue-100 dark:hover:bg-gray-600 flex items-center mt-[1px] px-[6px] py-[4px] dark:border-b dark:border-gray-500 rounded-[3px] cursor-pointer">
        <div>{icon}</div>
        <div className="ml-[10px]">
          <div className="text-gray-800 dark:text-gray-300">{title}</div>
          <div className="text-gray-400 dark:text-gray-400 text-[12px]">{link}</div>
        </div>
      </div>
    </Link>
  );
};
  
  export default QuicklinkItem;