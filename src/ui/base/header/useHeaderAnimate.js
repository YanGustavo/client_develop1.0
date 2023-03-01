import React from 'react';
const useHeader = () => { 
   React.useEffect(() => {
    const toggleIcon = document.querySelector(".toggleMenu");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".menuRight").classList.add("active");
    });
    const container = document.querySelector("main");
    container.addEventListener("click", () => {
      document.querySelector(".menuRight").classList.remove("active");
    });
  }, );
 return;  
}
export default useHeader;