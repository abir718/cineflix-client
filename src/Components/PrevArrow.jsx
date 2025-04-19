import React from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer -ml-6 text-[#DD003F] border-[1px] border-[#DD003F] py-4 rounded-sm px-0.5 text-2xl">
            <MdOutlineArrowBackIosNew />
        </div>
    );
};

export default PrevArrow