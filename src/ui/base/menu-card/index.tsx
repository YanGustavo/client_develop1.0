'use client';
import React from "react";
//import Image from 'next/image';
import { ChevronRightRounded } from "@mui/icons-material";
import useMenuCardAnimate from "./useMenuCardAnimate"

type MenuCardProps = {
imgSrc: any,
name: String,
isActive?: Boolean,
}

function MenuCard( {imgSrc, name, isActive}: MenuCardProps ) {
  useMenuCardAnimate();
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className="imgBox">  
      <img src={imgSrc} alt="" />     
        {/* <Image src={imgSrc} width={30} height={30} alt="" /> */}
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  );
}

export default MenuCard;
