import React, {Suspense} from 'react';
//import Link from 'next/link';
//import useBase from "./useBase";
import { Skeleton} from 'components/Skeleton';
import * as SBase from './styles';
import Header from "ui/base/header";
import Footer from "ui/base/footer";
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
       
    <main>    
    <Suspense fallback={<Skeleton/>}> 
      {children}  
    </Suspense>
    </main>  
    <Footer/> 
    <MenuRight/>
    
  </div> 
  </SBase.BaseStyle>
  );
}  
export default Base;
