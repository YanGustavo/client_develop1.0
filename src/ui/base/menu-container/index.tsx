'use client';
import React from "react";
import Link from 'next/link';
import {useRightMenuContext} from "context/RightMenuContext";
import * as actionTypes from 'context/RightMenuContext/action-types';

type MenuContainerProps = {
  link: Object,
  icon: any,
  isHome?:Boolean,
  click?: string,
}

const MenuContainer = ({ link, icon, isHome=false, click}: MenuContainerProps ) => {

  const [{state}, actions] = useRightMenuContext();

  React.useEffect(() => {
    actions.reset();
  },[actions]);

  function handleClick(type) {
  switch (type) {
    case actionTypes.HOME: {
      return actions.home(); 
    }
    case actionTypes.ORDER: {
      return actions.order(); 
    }
    case actionTypes.ORDER: {
      return actions.order(); 
    }
  }
  }

  return (
    <li onClick={() => handleClick(click)} className={isHome ? `active` : ``}>
      <Link href={link}>
        <span className="icon">{icon}</span>
      </Link>
    </li>
  );
}

export default MenuContainer;
