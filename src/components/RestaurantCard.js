import { CDN_URL } from "../../utils/constants"

const RestaurantCard = (props) => {
    const  {restData} = props
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = restData?.data
    return (
      <div className="rest-card">
        <img className="rest-logo" src={CDN_URL + cloudinaryImageId} alt="rest-logo"/>
          <h3>{name}</h3>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{avgRating}</h5>
          <h5>₹{costForTwo/100} For Two</h5>
          <h5>{deliveryTime} Mins</h5>
      </div>
    )
  }

export default RestaurantCard;