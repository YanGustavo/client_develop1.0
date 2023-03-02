'use client';

import React from 'react';
import * as SHeader from './styles';
import Link from 'next/link';
import useHeader from "./useHeader";
import useHeaderAnimate from "./useHeaderAnimate";
import { Menu } from '@headlessui/react';
import DropdownLink from 'ui/base/drop-down-link';
import BarChart from "@mui/icons-material/BarChart";
import SearchRounded from "@mui/icons-material/SearchRounded";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";

export default function Header() {
 //const {cart} = useHeader();
 useHeader();
 useHeaderAnimate();
  return (
    <SHeader.HeaderStyle>
      <header>
      <Link href="/">
      <img
        src="img/logo_name.png"
        alt="Eai Chefinho!"
        className="logo"
      />
      </Link>
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="noCartItem"> 
        <p>1</p> 
        {/* <div className={`${!cart ? "noCartItem" : "cart_content"}`}> 
        <p>{cart ? cart.length : ""}</p> */}        
        </div>
      </div>
      
      
      <div className="profileContainer"> 
      {/* {userInfo && (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {userInfo.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Perfil
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Pedidos
                      </DropdownLink>
                    </Menu.Item>
                    {userInfo.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                         Painel de Controle
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <Link
                        className="dropdown-link"
                        href="#"
                        onClick={logoutHandler}
                      >
                       Sair
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) }
              {!userInfo && (<Link href="/login">Área de Pedidos</Link>)} */}
 </div>
     <div className="toggleMenu">
        <BarChart className="toggleIcon" css={{
        "&:hover": {
          "path:first-of-type": {
            transformOrigin: "center",
            animation: "toggleMenuAnimate  1.5s forwards 1",
          },
        },
      }} />
      </div> 
      <div className="lineGradientTop"></div> 
      </header>    
    </SHeader.HeaderStyle>
   

  );
}
