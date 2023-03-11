import React from 'react';
import * as SMenuRight from './styles';
import useMenuRight from "./useMenuRight";
import useMenuRightAnimate from "./useMenuRightAnimate";
import MenuBottom from "ui/base/menu-bottom";
import CloseIcon from '@mui/icons-material/Close';
import {Container} from 'templates/base/styles';



import LayoutTransition from 'components/layoutTransition';

 const MenuRight = () => {  
  const {data, isPending, content} = useMenuRight(); 
  useMenuRightAnimate(); 
  
return (
      <SMenuRight.MenuRight className ="menuRight">
        <SMenuRight.CloseMenu className = "closeMenu">
            <CloseIcon className="toggleIcon"/>
          </SMenuRight.CloseMenu>
        <SMenuRight.MenuRightTop>
         <Container>
          {data}
          </Container>                  
            </SMenuRight.MenuRightTop>
<SMenuRight.MenuRightCenter>
            <LayoutTransition isPending={isPending}>
                {content}
            </LayoutTransition>                      
             </SMenuRight.MenuRightCenter>
              <SMenuRight.MenuRightBottom>
              <MenuBottom/>
              </SMenuRight.MenuRightBottom>
  </SMenuRight.MenuRight>
);
}
export default MenuRight;