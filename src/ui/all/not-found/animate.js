import React from 'react';
const useAnimate = () => { 
    if (process.browser) {
    const causeRepaintsOn = document.querySelectorAll("#wordsearch h1, h2, h3, p");
    const [width, setWidth] = React.useState(window.innerWidth);
    const handleResize = () => causeRepaintsOn.css("z-index", 1);
    const handleResizeOn = () => {
        const liWidth = document.querySelector(".one").style.width;
        document.querySelectorAll("#wordsearch ul li").style.height =  liWidth;
        document.querySelectorAll("#wordsearch ul li").style.lineHeight = liWidth;
        const totalHeight = document.querySelector("#wordsearch").style.width;
        document.getElementById("#wordsearch").style.height = totalHeight;
    };

   React.useEffect(() => {
     function One() {    
      const liWidth = document.querySelectorAll("#wordsearch ul li").style.width; 
      const totalHeight = document.getElementById("#wordsearch").style.width; 
      document.querySelectorAll("#wordsearch ul li").style.height = liWidth;
      document.querySelectorAll("#wordsearch ul li").style.lineHeight =liWidth;           
      document.getElementById("#wordsearch").style.height = totalHeight;
  };
  
  window.addEventListener('resize', handleResize);
  window.addEventListener('resize', handleResizeOn);
  function Delay () {
      /* 4 */
      this.delay(1500).queue(function () {
        document.querySelector(".one").addClass("selected");
          this.dequeue();
      })
      /* 0 */
      .delay(500).queue(function () {
        document.querySelector(".two").addClass("selected");
          this.dequeue();
      })
      /* 4 */
      .delay(500).queue(function () {
        document.querySelector(".three").addClass("selected");
          this.dequeue();
      })
      /* P */
      .delay(500).queue(function () {
        document.querySelector(".four").addClass("selected");
          this.dequeue();
      })
      /* A */
      .delay(500).queue(function () {
        document.querySelector(".five").addClass("selected");
          this.dequeue();
      })
      /* G */
      .delay(500).queue(function () {
        document.querySelector(".six").addClass("selected");
          this.dequeue();
      })
      /* E */
      .delay(500).queue(function () {
        document.querySelector(".seven").addClass("selected");
          this.dequeue();
      })
      /* N */
      .delay(500).queue(function () {
        document.querySelector(".eight").addClass("selected");
          this.dequeue();
      })
      /* O */
      .delay(500).queue(function () {
        document.querySelector(".nine").addClass("selected");
          this.dequeue();
      })
      /* T */
      .delay(500).queue(function () {
        document.querySelector(".ten").addClass("selected");
          this.dequeue();
      })
      /* F */
      .delay(500).queue(function () {
        document.querySelector(".eleven").addClass("selected");
          this.dequeue();
      })
      /* O */
      .delay(500).queue(function () {
        document.querySelector(".twelve").addClass("selected");
          this.dequeue();
      })
      /* U */
      .delay(500).queue(function () {
          $(".thirteen").addClass("selected");
          this.dequeue();
      })
      /* N */
      .delay(500).queue(function () {
        document.querySelector(".fourteen").addClass("selected");
          this.dequeue();
      })
      /* D */
      .delay(500).queue(function () {
        document.querySelector(".fifteen").addClass("selected");
          this.dequeue()
      });
  };
  One();
  Delay();
 });
 return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('resize', handleResizeOn);
 };
}
 return;  
}
export default useAnimate;
