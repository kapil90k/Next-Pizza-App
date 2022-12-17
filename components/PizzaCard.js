import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useStateValue } from "./StateProvider";

function PizzaCard({ pizza }) {
  const [{ basket }, dispatch] = useStateValue();
  const [cartItems, setCarttems] = useState([]);
  useEffect(() => {
    setCarttems(basket);
  }, [basket]);

  const addToCart = () => {
    console.log(`Inside add_to_cart: ${pizza.name} ${pizza.price}`);
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: pizza.id,
        name: pizza.name,
        category: pizza.category,
        image: pizza.image,
        price: pizza.price,
        description: pizza.description,
      },
    });
  };

  const decrementOne = () => {
    console.log(`Inside remove_from_cart: ${pizza.name} ${pizza.price}`);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: pizza.id,
    });
  };

  const deleteItem = () => {
    console.log(`Deleting item: ${pizza.id}`);
    dispatch({
      type: "DELETE_ITEM",
      id: pizza.id,
    });
  };

  return (
    <div>
      <div className="w-[350px] shadow-2xl rounded-2xl ">
        <Image
          src={pizza.image}
          width="350px"
          height="300px"
          className="rounded-t-2xl cursor-pointer"
        />
        <div className="flex justify-between items-center">
          <div className="ml-2">
            <div>{pizza.name}</div>
            <small>${pizza.price}</small>
          </div>
          {cartItems.filter((item) => item.id == pizza.id).length ? (
            <div className="flex justify-between items-center space-x-2 bg-orange-400 text-white rounded-full px-3 py-1 mr-1">
              <MdOutlineDeleteOutline
                size={20}
                className="cursor-pointer"
                onClick={deleteItem}
              />
              <button
                className="active:scale-90 transform duration-300 ease-in-out text-lg font-semibold"
                onClick={decrementOne}
              >
                -
              </button>
              <p className="">
                {cartItems.filter((item) => item.id == pizza.id).length} in Cart
              </p>
              <button
                className="active:scale-90 transform duration-300 ease-in-out text-lg font-semibold"
                onClick={addToCart}
              >
                +
              </button>
            </div>
          ) : (
            <button
              id={pizza.id}
              onClick={addToCart}
              className="px-3 bg-orange-400 rounded-full active:scale-95 transform duration-300 ease-in-out text-white py-1 mr-1"
            >
              Add to Cart
            </button>
          )}
        </div>
        <div className="text-slate-400 mt-2 text-sm ml-2 pb-4">
          {pizza.description}
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
