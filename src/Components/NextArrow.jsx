import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-[#DD003F] border-[1px] border-[#DD003F] py-4 rounded-sm px-0.5 text-2xl">
            <MdOutlineArrowForwardIos />
        </div>
    );
};

export default NextArrow