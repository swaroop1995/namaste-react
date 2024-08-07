const RestaurantCard = (props) => {
  const { resName, cuisine, resImageUrl, deliveryTime, rating } =
    props.resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={resImageUrl} />
      <h3>{resName}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
