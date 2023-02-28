import { useRouter } from 'next/navigation';
import React, { ReactNode} from 'react'

import { APP_ROUTES } from 'constants/app-router';
import { checkUserAuthenticated } from 'functions';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({children}: PrivateRouteProps) => {
  const { push } = useRouter();
  
  const isUserAuthenticated = checkUserAuthenticated();
  
  React.useEffect(() => {
    if(!isUserAuthenticated){
      push(APP_ROUTES.public.login)
    }
  },[isUserAuthenticated, push]);
  return (
    <>
    {!isUserAuthenticated && null}
    {isUserAuthenticated  && {children}}
    </>
  );

 
}
export default PrivateRoute;