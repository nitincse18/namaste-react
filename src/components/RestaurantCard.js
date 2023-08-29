import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const  {restData} = props

    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = restData
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg  hover:bg-gray-300">
        <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="rest-logo"/>
          <h3 className="font-bold py-2">{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating}</h5>
          <h5>{costForTwo}</h5>
          <h5>{deliveryTime} Mins</h5>
      </div>
    )
  }


  export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

export default RestaurantCard;