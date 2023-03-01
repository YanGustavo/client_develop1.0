import React, {Suspense} from 'react';
//import Link from 'next/link';
//import useBase from "./useBase";
import { Skeleton} from 'components/Skeleton';
import * as SBase from './styles';
import Header from "ui/base/header";
import MenuBottom from "ui/base/menu-bottom";
import MenuRight from "ui/base/menu-right";
import Breadcrumbs from "components/Breadcrumbs";

const Base = ({children}: { children: React.ReactNode }) => { 
  // const {} = useBase(); 
  return (
    <SBase.BaseStyle>
    <div className="BaseTemplate">
        <Breadcrumbs/>
    <Suspense fallback={<Skeleton/>}>
      <Header/> 
    </Suspense>
    <MenuBottom/>    
    <main>    
    <Suspense fallback={<Skeleton/>}> 
      {children}  
    </Suspense>
    </main>  
    <MenuRight/>
    
  </div> 
  </SBase.BaseStyle>
  );
}  
export default Base;
