import React, { useEffect, useState } from "react";
import { useStateValue } from "../components/StateProvider";
import Image from "next/image";
import { MdOutlineDeleteOutline } from "react-icons/md";

function order() {
  const [{ basket }, dispatch] = useStateValue();
  const [allItems, set_allItems] = useState({});

  useEffect(() => {
    function aggregate_orders() {
      console.log(`Inside aggregate_orders`);
      let basket_items = {};
      basket.forEach((item) => {
        if (basket_items[item.id]) {
          basket_items[item.id].push(item);
        } else {
          basket_items[item.id] = [item];
        }
      });
      set_allItems(basket_items);
    }
    aggregate_orders();
  }, [basket]);

  function addToCart(pizza) {
    console.log(`Inside order add_to_cart: ${pizza.name} ${pizza.price}`);
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
  }

  function decrementOne(id) {
    console.log(`Decrementing item: ${id}`);
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  }

  function deleteItem(id) {
    console.log(`Deleting item: ${id}`);
    dispatch({
      type: "DELETE_ITEM",
      id: id,
    });
  }

  return (
    <div className="absolute w-full top-[10%] left-2">
      {Object.keys(allItems).map((pizza_key) => (
        <div className="flex p-2 justify-between items-center bg-slate-200 m-2 rounded-2xl w-1/2 hover:opacity-80">
          <Image
            src={allItems[pizza_key][0].image}
            width="120px"
            height="100px"
            className="rounded-2xl"
          />
          <div className="border-2">{allItems[pizza_key][0].name}</div>
          <div>{allItems[pizza_key].length}</div>
          <div className="border-4">
            ${allItems[pizza_key][0].price * allItems[pizza_key].length}
          </div>
          <div className="flex justify-between items-center space-x-2 bg-orange-400 text-white rounded-full px-3 py-1 mr-1">
            <MdOutlineDeleteOutline
              size={20}
              className="cursor-pointer"
              onClick={() => deleteItem(allItems[pizza_key][0]["id"])}
            />
            <button
              className="active:scale-90 transform duration-300 ease-in-out text-lg font-semibold"
              onClick={() => decrementOne(allItems[pizza_key][0]["id"])}
            >
              -
            </button>
            <p className="">
              {
                basket.filter((item) => item.id == allItems[pizza_key][0]["id"])
                  .length
              }{" "}
              inn Cart
            </p>
            <button
              className="active:scale-90 transform duration-300 ease-in-out text-lg font-semibold"
              onClick={() => addToCart(allItems[pizza_key][0])}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default order;
