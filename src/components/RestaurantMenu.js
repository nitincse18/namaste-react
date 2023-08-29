import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestratuntMenu from "../utils/useRestratuntMenu";
import RestaurantCategory from "./RestaurantCategory";


export const RestaurantMenu = () => {
  
  // const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null)

  const {resId} = useParams()
  const resInfo = useRestratuntMenu(resId)
  console.log(resInfo)


  if(resInfo === null ) {
    return  <Shimmer />
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  console.log('categories',categories)
  return  (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <h3 className="font-bold">{cuisines.join(", ")}- {costForTwoMessage} </h3>

      {
        categories.map((catogery, index) =>(
          // Controlled component
          <RestaurantCategory 
          key={catogery?.card?.card?.title} 
          data= {catogery?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          />
        )
         )
      }
      
    </div>
  );
};
