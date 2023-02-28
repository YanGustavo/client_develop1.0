'use client';
import React from "react";
import styled from 'styled-components';
import BarChart from "@mui/icons-material/BarChart";
const RatingStyle = styled.div`
  margin: 5px 0;
.rating i {
  font-size: 12px;
  color: #ebb450;
}
.rating span {
  margin-left: 10px;
}

`; 
// type RatingProps = {
//   rating: Number;
// }
// {rating = 5}: RatingProps
//param1:number, param2:number
const Rating = (rating = 0 ) => {  
  const iconClass = (param1, param2) => {
    if(rating >= param1) {return <BarChart/>;}
    if(rating >= param2) { return <BarChart/>;}
    else {return <BarChart/>;}
  }
  return (
    <RatingStyle>
      <i icon={iconClass(1, 0.5)}/>
      <i icon={iconClass(2, 1.5)} />
      <i icon={iconClass(3, 2.5)}/>
      <i icon={iconClass(4, 3.5)}/>
      <i icon={iconClass(5, 4.5)}/> 
    </RatingStyle>
  );
};

export default Rating;
