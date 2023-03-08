import React from 'react';
import { ABOUT_US} from "constants/about-constants";
import Abouts from "ui/base/abouts";
import NotFound from 'ui/all/not-found';
const useAbout = (router) => { 
  if (true) {
  const pages = React.useCallback((keyword) => {  
      switch (keyword) {
        case ABOUT_US:
          return (<><Abouts keyword={ABOUT_US}/></>);
        default:
          return (<><NotFound/></>);
      }   
},[]);

  React.useEffect(() => {    
      pages(router.keyword);
  }, [router]); 
} 
  return (<><NotFound/></>);
}
export default useAbout;
