import RestaurantCard from "./RestaurantCard";
import restData from "../../utils/mockData";
import { useState } from 'react'; // Named import {}

const Body = () => {
  // Local State variable  
  let listOfRestaruntsData = [
    {
      data: {
        type: "F",
        id: "450663",
        name: "Chaayos Chai+Snacks=Relax",
        cloudinaryImageId: "0a6f66d75eb042123e34d89bef7189ce",
        cuisines: ["South Indian", "North Indian", "Biryani"],
        costForTwo: 25000,
        deliveryTime: 22,
        avgRating: 4.1,
      }
    },
    {
      data:{
        type: "F",
        "id": "424658",
        name: "Asha Tiffins",
        cloudinaryImageId: "hpncnz3sfv3gigsukkts",
        cuisines: ["South Indian", "North Indian", "Biryani"],
        costForTwo: 25000,
        deliveryTime: 22,
        avgRating: 3.9,
      }
    },
    {
      data:{
        type: "F",
        id: "4506637",
        name: "Rajwadi",
        cloudinaryImageId: "ioj0cpj1gbxqx6j68osj",
        cuisines: ["North Indian",
        "Desserts",
        "Beverages",
        "Punjabi"],
        costForTwo: 25000,
        deliveryTime: 22,
        avgRating: 4.3,
      },
    },
  ];

  // Local state variable- Super powerful variable
  const [listOfRestarunts, setListOfRestarunts] = useState(restData)
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            const filteredlist = listOfRestarunts.filter(
              (rest) => rest.data.avgRating > 4.3
            );
            setListOfRestarunts(filteredlist)
            console.log(filteredlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {/* RestaurantCard */}
        {listOfRestarunts.map((restaurant) => (
          <RestaurantCard restData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
