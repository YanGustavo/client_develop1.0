import React from 'react';
import { ABOUT_US, NOT_FOUND} from "constants/about-constants";
import AboutUs from "ui/base/abouts/about_us";
import NotFound from 'ui/all/not-found';
const useAbout = () => { 

  const params:any  = "ABOUT_US";

  const getSwitchs = React.useCallback(() => {
    switch (params) {
      case ABOUT_US:
        return (<><AboutUs/></>);
      default:
        return (<><NotFound/></>);
    }
},[]);

  React.useEffect(() => {
    getSwitchs();
  },[params]);
  
  return (<><AboutUs/></>);
}
export default useAbout;
