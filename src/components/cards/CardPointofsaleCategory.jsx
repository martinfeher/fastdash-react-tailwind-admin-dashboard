import React from 'react'

const CardPointofsaleCategory = ({ title, count, selected, handleSelectedCategoryPos}) => {
    return (
    <div className={` ${selected ? 'bg-sky-600 text-white border border-sky-700' : 'bg-white dark:bg-brandDarkSecondary text-gray-700' } h-[70px] flex flex-col justify-center px-4 rounded-md cursor-pointer`}
        onClick={()=> handleSelectedCategoryPos(title)}
        >
        <div className={`${selected ? 'dark:text-gray-100' : 'dark:text-gray-300'} font-bold`}>{title}</div>
        <div className="dark:text-gray-350 font-gray-500 text-[12px]">{count} items</div>
    </div>
    )
}

export default CardPointofsaleCategory
