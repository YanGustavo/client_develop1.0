import { APP_ROUTES } from 'constants/app-router';
/**
 * *
 * *@param asPath string
 * @return boolean
 */
export const checkIsPublicRoute = (asPath: string): boolean =>{
  const appPubicRoutes = Object.values(APP_ROUTES.public);
  return appPubicRoutes.includes(asPath);
}