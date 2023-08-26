import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constants";
import useRestratuntMenu from "../../utils/useRestratuntMenu";


export const RestaurantMenu = () => {
  
  // const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams()
  const resInfo = useRestratuntMenu(resId)
  console.log(resInfo)


  if(resInfo === null ) {
    return  <Shimmer />
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  return  (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}- {costForTwoMessage} </h3>

      <h2>Menu</h2>
      <ul>
        {itemCards.map(item =>
            <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
        )}
        
        {/* <li>Burger</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};
