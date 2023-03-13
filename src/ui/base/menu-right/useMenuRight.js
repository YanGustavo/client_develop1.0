import React from 'react';
import IndexPage from './pages/index_page';
import OrderPage from './pages/order_page';
import SkeletonComponent from "components/SkeletonComponent";
import {useRightMenuContext} from "context/RightMenuContext";
import * as actionTypes from 'context/RightMenuContext/action-types';
const useRightMenu = () => {  
  const [data, setData] = React.useState("Carregando");
  
  const [content, setContent] = React.useState(<SkeletonComponent/>); 
  const [isPending, startTransition] = React.useTransition(); 
  const [{ value, loading }, actions] = useRightMenuContext();
  const [page, setPage] = React.useState(value);

  function navigate(page) {
    startTransition(() => {
      console.log("entrou no transition e value é:"+ value+"e page:"+page);
      setPage(value);      
      console.log("e page depois do set:"+page);
    });
    if (page === actionTypes.HOME) {
        setData("Eai Chefinho, Seja bem vindo!");
        setContent(<IndexPage/>);
      } else if (page === actionTypes.ORDER) {
        setData("Seus Pedidos");
        setContent(<OrderPage/>);
      }else{
        setData("Eai Chefinho, Seja bem vindo!, estamos tendo problemas no carregamento das outras paginas no momento");
        setContent(<IndexPage/>);
      }
  };
  React.useEffect(() => {
      navigate(value);
    },[value]);

return{ 
  data,
 isPending,
 content,
};
}
export default useRightMenu;