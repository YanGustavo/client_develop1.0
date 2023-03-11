import React from 'react';
import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletOutlined";
import Chat from "@mui/icons-material/Chat";
import Favorite from "@mui/icons-material/Favorite";
import HomeRounded from "@mui/icons-material/HomeRounded";
import Settings from "@mui/icons-material/Settings";
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";
import * as SMenuBottom from './styles';
import MenuContainer from "@/ui/base/menu-container";
//import useMenuBottom from "./useMenuBottom";
import useAnimate from "./useAnimate";

import * as actionTypes from 'context/RightMenuContext/action-types';
const MenuBottom =() => {
 
  //useMenuBottom();
  useAnimate();
  
     
  return (
    <SMenuBottom.MenuBottomStyle>
      {/* Left menu */}
    <div className="menuBottom">
      <ul id="menu">
        {/* prettier-ignore */}
        <MenuContainer click={actionTypes.HOME} link={'/'} icon={<HomeRounded/>} isHome={true}/>
          {/* prettier-ignore */}
          <MenuContainer click={actionTypes.ORDER} link={'#'} icon={<Chat/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Favorite/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<SummarizeRounded/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings/>}/>
          <div className="indicator"></div>
      </ul>
    </div> 
    </SMenuBottom.MenuBottomStyle>
  );

}
export default MenuBottom;