import React, {Suspense} from 'react';
//import Link from 'next/link';
//import useBase from "./useBase";
import SkeletonComponent from 'components/SkeletonComponent';
import * as SBase from './styles';
import Header from "ui/base/header";
import Footer from "ui/base/footer";
import MenuRight from "ui/base/menu-right";
import Announcement from "ui/base/announcement";

const Base = ({children}: { children: React.ReactNode }) => { 
  // const {} = useBase(); 
  return (
    <SBase.BaseTemplate>
    <Suspense fallback={<SkeletonComponent/>}>
      <Header>
        <Announcement/>
      </Header>
    </Suspense>       
    <SBase.BaseMain>  
    <Suspense fallback={<SkeletonComponent/>}> 
      {children}  
    </Suspense> 
    <Footer/>    
    </SBase.BaseMain>      
    <MenuRight/> 
    {/*
    Suporte

 Qualquer dúvida ou problema pode nos contatar. Botão de Chat no canto inferior direito.

Satisfação ou Reembolso

Se não estiver satisfeito, entre em contato conosco.

Pagamento Seguro

Pagamento Seguro processado pela MERCADO PAGO

Frete Grátis

Válido para todo o Brasil! aproveite!  */}
    
  </SBase.BaseTemplate>
  );
}  
export default Base;
