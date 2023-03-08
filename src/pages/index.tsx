import React, {Suspense} from 'react';
import Layout from 'components/layout';
import * as SHome from './styles';
import { Base } from 'templates/base';
import SubMenuContainer from "ui/base/sub-menu-container";
import BannerName from "ui/base/banner-name";
 import MenuCard from "ui/base/menu-card";
 import Card from "ui/base/card";
import useHome from "hooks/useHome";
import SkeletonComponent from 'components/SkeletonComponent';
import { toast } from 'react-toastify';

export default function Home() { 
  const { data, isLoading, products, MenuItems, setData } = useHome(); // isMainData,
  toast.error("Seja bem vindo!");
  return (
    <Layout title="Home">
     <Base>
     <SHome.HomeStyle>  
      <Suspense fallback={<SkeletonComponent/>}>
      <BannerName name="Chefinho" discount={"20"} more={"#"} />
      </Suspense>            
             <section className="container">
                  <Suspense fallback={<SkeletonComponent/>}>
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
            <section>
            <Suspense fallback={<SkeletonComponent/>}>
               <SubMenuContainer title="iPhones" subtitle="Saiba Mais" linkHref="/login" />
            </Suspense>
            </section>           
            <section className="container container--flush">
               <Suspense fallback={<SkeletonComponent/>}>                
               {products &&
                products.map((product:any) => (                
               <Card key={product.id} product={product}/>      
           ))}
            </Suspense>            
            </section>
            <section className="container container--flush">
               <Suspense fallback={<SkeletonComponent/>}>                
               {isLoading ? (
                <p> Loading...</p>
               ) : (
                <>
                {data?.map((todo) => (
                    <div key={todo.id}>
                      <p>{todo.title}</p>
                    </div>
                ))}
                </>
               )
}
            </Suspense>            
            </section>
        </SHome.HomeStyle>         
     </Base>
    </Layout>
  );
}
