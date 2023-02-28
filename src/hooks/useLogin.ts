import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "redux/actions";
import {useRouter} from 'next/navigation'


const useLogin = () => { 
  // const dispatch:any = useDispatch();
  const router:any = useRouter();
  const  redirect = router.query;

  // const userLogin:any = useSelector((state:any) => state.userLogin);
  // const { error, loading, userInfo } = userLogin;
  const error = false;
  const loading = false;

  // React.useEffect(() => {
  //   if (userInfo) {
  //    router.push(redirect || '/');
  //   }
  // }, [userInfo, router, redirect]);
  const google = () => {
    // window.open("http://localhost:5000/auth/google", "_self");
  };
  const activeLogin= (email:any, password:any) => {
    // dispatch(login(email, password));
  };

 return{
  error,
  loading,
  redirect,
  activeLogin,
  google,
};  
}
export default useLogin;