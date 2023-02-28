import React, {Suspense} from 'react';
import Layout from 'components/layout';
import { Base } from 'templates/base';
//import Link from 'next/link';
// import { usePathname, useSearchParams } from 'next/navigation';
//import ShopSection from "ui/test/shop-section";
import SubMenuContainer from "ui/base/sub-menu-container";
import BannerName from "ui/base/banner-name";
 import MenuCard from "ui/base/menu-card";
 //import CategoriesCarousel from "ui/test/categories-carousel";
//import ItemCard from "ui/test/card2";
 import CardModern from "ui/base/card-modern";
import useHome from "hooks/useHome";

import { Skeleton} from 'components/Skeleton';
//{ category }: { category: Category }
export default function Home() {
  // const pathname = usePathname();//const keyword = "";//match.params.keyword;
  // const searchParams = useSearchParams();//const pagenumber = 1;//match.params.pagenumber;
  // console.log("pathname:"+pathname);
  // console.log("searchParams:"+searchParams);  
  const { MenuItems, isMainData, setData } = useHome(); 
  return (
    <Layout title="Home">
    <Suspense fallback={<Skeleton/>}>
     <Base>     
     <div className="mainContainer">
          {/* Banner  */}
          <div className="banner">
          <Suspense fallback={<Skeleton/>}>
             {/* <BannerName name={userInfo ? (`${userInfo.name}`) : ("Chefinho")} discount={"20"} more={"#"} /> */}
             <BannerName name="Chefinho" discount={"20"} more={"#"} />
             </Suspense>
             <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
          </div>

          <div className="dishContainer">
            <div className="menuCard">
            <Suspense fallback={<Skeleton/>}>
               <SubMenuContainer title="iPhones" subtitle="Saiba Mais" linkHref="/login" />
            </Suspense>
            </div>

            
          
            <div className="rowContainer" hidden>
                  <div>
                  {/* <CardModern/> */}
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
                  </div>
            </div>
           
            <div className="dishItemContainer">
               <Suspense fallback={<Skeleton/>}>
               {isMainData &&
                isMainData.map((data) => (                    
              <CardModern 
              key={data.id}
              itemId={data.id}
              imgSrc={data.imgSrc}
              name={data.name}
              ratings={data.ratings}
              price={data.price}
              />      
           ))}
            </Suspense>
             {/* <ShopSection/> */}
             {/* <Suspense fallback={<Skeleton/>}>
             {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                    
                  />
                ))}
                </Suspense> */}
            </div>
          </div>
        </div>        
     </Base>
     </Suspense>
    </Layout>
  );
}
