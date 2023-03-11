import React from 'react';
import IndexPage from './pages/index_page';
import OrderPage from './pages/order_page';
import {useRightMenuContext} from "context/RightMenuContext";
import * as actionTypes from 'context/RightMenuContext/action-types';
const useRightMenu = () => {  
  const [data, setData] = React.useState("Carregando"); 
  const [page, setPage] = React.useState(null);
  const [isPending, startTransition] = React.useTransition(); 
  const [{ value, loading }, actions] = useRightMenuContext();

  function navigate(value) {
    startTransition(() => {
      setPage(value);
    });
  }
   let content;
  if (page === actionTypes.HOME) {
    setData("Eai Chefinho, Seja bem vindo!");
    content = (
      <IndexPage/>
    );
  } else if (page === actionTypes.ORDER) {
    setData("Seus Pedidos");
    content = (
      <OrderPage />
    );
  }

  React.useEffect(() => {
   navigate(value);
    },[value]);

return{ 
 isPending,
 content,
};
}
export default useRightMenu;