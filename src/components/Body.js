import RestaurantCard, { withNoOffersLabel } from "./Restaurantcard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // local state variable-Super powerful variable
  let resList = [];
  const [listOfRestaurants, setFilteredList] = useState(resList);
  const [searchText, setSearhText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const RestaurantCardWithNoOffers = withNoOffersLabel(RestaurantCard);
  useEffect(() => {
    setData();
  }, []);

  setData = async () => {
    const URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(URL);

    const json = await data.json();

    setFilteredList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        !!OOps something went wrong seems to be a network connection issue
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearhText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                console.log(res.info.name);

                return res.info.name

                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterList(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex itens-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterList(filteredList);
            }}
          >
            Top rated Restaurant
          </button>
        </div>

        {/* <div className="search m-4 p-4">
          <label>UserName:</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
        </div> */}
      </div>

      <div className="flex flex-wrap">
        {filterList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV2 ? (
              <RestaurantCardWithNoOffers resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
