import React from 'react';
import {PRIVACY_POLICY, EXCHANGE_AND_REFUND_POLICY, SHIPPING_POLICY, SERVICE_TERMS, CONTACT, FAQ, ABOUT_US, NOT_FOUND, LOADING, ERROR } from "constants/about-constants";
import Abouts from "ui/base/abouts";

const useAbout = (router) => { 
  const [data, setData] = React.useState(Abouts(LOADING));
  console.log("router in useAbout:" +router);
  const getRequestPages = React.useCallback(async (keyword) => {
    try {
      switch (keyword) {
        case PRIVACY_POLICY:
          return await setData(Abouts(PRIVACY_POLICY));
          case EXCHANGE_AND_REFUND_POLICY:
          return await setData(Abouts(EXCHANGE_AND_REFUND_POLICY));
          case SHIPPING_POLICY:
          return await setData(Abouts(SHIPPING_POLICY));
          case SERVICE_TERMS:
          return await setData(Abouts(SERVICE_TERMS));
          case CONTACT:
          return await setData(Abouts(CONTACT));
          case FAQ:
          return await setData(Abouts(FAQ));
        case ABOUT_US:
          return await setData(Abouts(ABOUT_US));
        default:
          return await setData(Abouts(NOT_FOUND));
      } 
    } catch {
      return Abouts(ERROR);
    } 
        
},[]);

  React.useEffect(() => { 
    if (router){  
      console.log("router.keyword in useAbout:" +router.keyword); 
      getRequestPages(router.keyword);
    }    
  }, [getRequestPages, router]); 
  return {
    data,
  }
}
export default useAbout;
