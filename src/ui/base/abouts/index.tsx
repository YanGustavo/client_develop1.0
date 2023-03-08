import { ABOUT_US} from "constants/about-constants";
import NotFound from 'ui/all/not-found';
const Abouts = (keyword) => {
  // Pages
  const aboutUs = () => {
    return(
      <>
      <p>About Us Page</p>
      </>
    )};
    
      //keyword exist
      if(keyword !== undefined){
        switch (keyword) {
          case ABOUT_US:
            return aboutUs;
            default: 
            return <NotFound/>;
        }
      }
      return <NotFound/>;  
  }
  export default Abouts;