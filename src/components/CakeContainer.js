import React from "react";
import { buyCake } from "../redux/cake/cakeAction";
import { useSelector, useDispatch } from "react-redux";

const CakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No of Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;
