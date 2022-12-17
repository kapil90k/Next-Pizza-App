import React, { useState } from "react";
import { PizzaData } from "../public/data/PizzaData";
import PizzaCard from "./PizzaCard";
import { useStateValue } from "./StateProvider";

function PizzaSection() {
  const [{ basket }, dispatch] = useStateValue();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-col left-[10%] right-[-10%] items-center mt-[4rem] capitalize">
        <div className="text-4xl">The best pizza in town</div>
        <div className="mt-[1rem] text-xl text-gray-500">
          a dish of Italian origin, consisting of a flat round base of dough
          baked with a topping of tomatoes and cheese, typically with added
          meat, fish, or vegetables.
        </div>
      </div>
      <div className="mt-4">
        <div className="absolute left-[5%] right-[5%] grid  md:grid-cols-2 lg:grid-cols-4 gap-4 ml-2">
          {PizzaData.map((pizza) => (
            <PizzaCard pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PizzaSection;
