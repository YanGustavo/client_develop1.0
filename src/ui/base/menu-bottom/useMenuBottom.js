import React from 'react';
const useMenuBottom = () => { 
  React.useEffect(() => {
    const menuLi = document
    .querySelectorAll("#menu li");

    // const menuCard = document
    // .querySelector(".rowContainer")
    // .querySelectorAll(".rowMenuCard");

    function setMenuActive() {
      this.classList.add("active");
      //  menuCard.forEach((n) =>{
      //   n.classList.remove("active");        
      // });
    }
    menuLi.forEach((n) => n.addEventListener("mouseover", setMenuActive));

  //   function setMenuCardActive() {
  //     menuCard.forEach((n) =>{
  //     n.classList.remove("active");
  //     this.classList.add("active");
  //   });
  //   }

  // menuCard.forEach((n) => n.addEventListener("mouseover", setMenuCardActive));
  },[]);
 return;  
}
export default useMenuBottom;