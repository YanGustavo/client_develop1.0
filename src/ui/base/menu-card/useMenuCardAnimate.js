import React from 'react';
const useMenuCardAnimate = () => { 
   React.useEffect(() => {    
  // menu Card active class changer
    const menuCard = document
    .querySelector(".rowContainer")
    .querySelectorAll(".rowMenuCard");
  
    function setMenuCardActive() {
      menuCard.forEach((n) =>{
      n.classList.remove("active");
      this.classList.add("active");
    });
    }
    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []); 
 return;  
}
export default useMenuCardAnimate;
