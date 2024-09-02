import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  console.log(props);

  const { name, cuisines, cloudinaryImageId, avgRating, imageId } =
    props.resData.info;
  const deliveryTime = props.resData.info.sla.deliveryTime;
  console.log(cloudinaryImageId);
  const data = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-10 hover:bg-gray-200">
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}minutes</h4>

      <h4>{data.loggedInUser}</h4>
    </div>
  );
};

export const withNoOffersLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
          No Offers
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
