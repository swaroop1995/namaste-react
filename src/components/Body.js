import RestaurantCard from "./Restaurantcard";
import { useState } from "react";

const Body = () => {
  // local state variable-Super powerful variable
  const [listOfRestaurants, setFilteredList] = useState([
    {
      data: {
        id: 1,
        resName: "Meghana Foods",
        cuisine: ["Biryani", "North India", "Asian"],
        resImageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQef1myAJ1CVnUiL4Zs74GfNPT7lgknzMdTCA&s",
        rating: 4.4,
        deliveryTime: 37,
      },
    },
    {
      data: {
        id: 2,
        resName: "KFC",
        cuisine: ["Burger", "Fast Food"],
        resImageUrl:
          "https://b.zmtcdn.com/data/pictures/chains/2/2900222/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|750:500&crop=750:500;*,*",
        rating: 3,
        deliveryTime: 22,
      },
    },
    {
      data: {
        id: 3,
        resName: "McDonalds",
        cuisine: ["Burger", "French fries"],
        resImageUrl:
          "https://b.zmtcdn.com/data/pictures/chains/2/2900222/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|750:500&crop=750:500;*,*",

        rating: 4.1,
        deliveryTime: 22,
      },
    },
  ]);

  //Normal js variable

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.rating > 4
            );
            console.log(filteredList);
            setFilteredList(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
