import React from 'react'

const CardPointofsaleItem = ({ title, imgUrl, price, priceSecondary}) => {
    return (
        <div className="group flex flex-col justify-between items-center p-[14px] bg-white dark:bg-brandDarkSecondary rounded-[6px] cursor-pointer hover:shadow-xl">
            <div>
                <img
                src={imgUrl}
                alt={title} 
                className="rounded-[6px]"
                />
            </div>
            <div className="w-full flex justify-between items-center mt-[6px] text-[14px]">
                <div></div>
                <div className="dark:text-gray-300 dark:group-hover:text-gray-150 text-gray-700 font-bold">
                {title}
                </div>
                <div className="dark:text-gray-300 dark:group-hover:text-gray-150 text-gray-450">${price} {priceSecondary}</div>
            </div>
        </div>
    )
}

export default CardPointofsaleItem
