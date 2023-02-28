'use client';
import React from "react";
import Link from 'next/link';
type MenuContainerProps = {
  link: Object,
  icon: any,
  isHome?:Boolean,
}

const MenuContainer = ({ link, icon, isHome=false}: MenuContainerProps ) => {
  return (
    <li className={isHome ? `active` : ``}>
      <Link href={link}>
        <span className="icon">{icon}</span>
      </Link>
    </li>
  );
}

export default MenuContainer;
