import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react'; // Named import {}
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {

  // Local state variable- Super powerful variable
  const [listOfRestarunts, setListOfRestarunts] = useState([]);
  const [filteredRestarunts, setFilteredRestarunts] = useState([]);

  const [searchText, setSearchText] = useState('')
  
  // Whenever state variables update, react triggers a reconcilation cycle(re-renders the components)

  useEffect(()=>{
    fetchData()
  }, []);

  const fetchData = async () => {
    const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9440703&lng=77.67222389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json()

    console.log(json);
    // Optional Chaining
    setListOfRestarunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestarunts(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus()

  if(!onlineStatus) return <h1>Looks like you're offline!! Please check your internet connection</h1>


  return listOfRestarunts.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"
           className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}/>
          <button onClick={() => {
            // Filter the restraunt cards and update UI
            // searchText
            const filteredRest = listOfRestarunts.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredRestarunts(filteredRest)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            
            const filteredlist = listOfRestarunts.filter(
              (rest) => rest.info.avgRating > 4.3
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
        {filteredRestarunts.map((restaurant) => (
          <Link 
            key={restaurant?.info?.id}
            to={"/restaurants/"+restaurant?.info?.id}
          > 
            <RestaurantCard restData={restaurant?.info} key={restaurant?.info.id} 
            />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
