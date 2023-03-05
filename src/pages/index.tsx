import React, {Suspense} from 'react';
import Layout from 'components/layout';
import * as SHome from './styles';
import { Base } from 'templates/base';
import SubMenuContainer from "ui/base/sub-menu-container";
import BannerName from "ui/base/banner-name";
 import MenuCard from "ui/base/menu-card";
 import Card from "ui/base/card";
import useHome from "hooks/useHome";
import { Skeleton} from 'components/Skeleton';


export default function Home() { 
  const { response, MenuItems, setData } = useHome(); // isMainData,
  return (
    <Layout title="Home">
    <Suspense fallback={<Skeleton/>}>
     <Base>
     <SHome.HomeStyle>  
     <div className="container">
      <Suspense fallback={<Skeleton/>}>
      <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense>
       <div className="wrapper">
            
             <section className="row">
                  <Suspense fallback={<Skeleton/>}>
                  {MenuItems &&
                  MenuItems.map((data:any) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />                    
                  </div>
                ))}
                </Suspense>
            </section> 
            <section className="menuCard">
            <Suspense fallback={<Skeleton/>}>
               <SubMenuContainer title="iPhones" subtitle="Saiba Mais" linkHref="/login" />
            </Suspense>
            </section>           
            <section className="item-card-wrapper">
               <Suspense fallback={<Skeleton/>}>                
               {response &&
                response.map((product:any) => (                
               <Card key={product.id} product={product}/>      
           ))}
            </Suspense>            
            </section>
          </div>
        </div> 
        </SHome.HomeStyle>         
     </Base>
     </Suspense>
    </Layout>
  );
}
