import React, {Suspense} from 'react';
import { Skeleton} from 'components/Skeleton';
import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletOutlined";
import Chat from "@mui/icons-material/Chat";
import Favorite from "@mui/icons-material/Favorite";
import HomeRounded from "@mui/icons-material/HomeRounded";
import Settings from "@mui/icons-material/Settings";
import SummarizeRounded from "@mui/icons-material/SummarizeRounded";
import * as SMenuBottom from './styles';
import MenuContainer from "@/ui/base/menu-container";
import useMenuBottom from "./useMenuBottom";
const MenuBottom =() => {
  useMenuBottom();
  return (
    <SMenuBottom.MenuBottomStyle>
      {/* Left menu */}
    <div className="menuBottom">
      <ul id="menu">
        <Suspense fallback={<Skeleton/>}>
        {/* prettier-ignore */}
        <MenuContainer link={'/'} icon={<HomeRounded/>} isHome={true}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Chat/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Favorite/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<SummarizeRounded/>}/>
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings/>}/>
          </Suspense>
          <div className="indicator"></div>
      </ul>
    </div> 
    </SMenuBottom.MenuBottomStyle>
  );

}
export default MenuBottom;