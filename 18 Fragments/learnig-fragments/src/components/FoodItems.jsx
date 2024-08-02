import { useState } from "react";
import Item from "./Item";
const FoodItems = ({items}) => {
 let [ activeItems,SetActiveitems]=useState([]); 

 let onBuyButton=(item,event)=>{
  let newItems=[...activeItems,item];
  SetActiveitems(newItems);
 }
  return (
    <ul className="list-group">
      {items.map((item) => ( 
       <Item key={item} foodItem={item} 
       bought={activeItems.includes(item)}
       handleBuyButton={(event)=> onBuyButton(item,event)}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
