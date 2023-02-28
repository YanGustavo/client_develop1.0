import React from 'react';
 import { MenuItems, Items } from "utils/data";

const useHome = () => { 
  const [isMainData, setMainData] = React.useState(
    Items.filter((element) => element.itemId == "iPhone")
 );
 const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

 return{  
  MenuItems,
  isMainData,
  setData,
};  
}
export default useHome;