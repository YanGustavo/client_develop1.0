import React from 'react';
 import { MenuItems, Items } from "utils/data";
 import axios from "axios";

const useHome = () => { 
  const [response, setResponse]:any = React.useState();
  const sendGetRequest = React.useCallback(async () => {
    //'https://accounts.cartx.io/api/eai-chefinho/products',
    try {
        const resp = await axios.get('https://stoplight.io/mocks/cartx/cartx-api-doc/4235477/e/products', {
            headers: {
              'Content-Type': 'application/json',
              'authorization': 'Bearer Y6TPosMhWM2GjTWrvKeGv2W6cR8kSg39EwND9tdnM98yBEcJthsFEHaYALbY'
            },
            transformResponse: (data) => JSON.parse(data),
        });
        setResponse(resp.data.products.data);
        console.log(resp.data.products);//response.data.products.data[0].seo_title
    } catch (err) {
        console.error(err);
    }
},[]);

  React.useEffect(() => {
    sendGetRequest();
  }, [sendGetRequest]);  

  const [isMainData, setMainData] = React.useState(
    Items.filter((element) => element.itemId == "iPhone")
 );
 const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId == itemId));
  };

 return{ 
  response, 
  MenuItems,
  isMainData,
  setData,
};  
}
export default useHome;