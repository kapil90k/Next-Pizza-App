import React, { useState } from "react";

function MyTestCart() {
  const [allItems, set_allItems] = useState({});

  let a = [
    {
      notes: "Game was played",
      time: "2017-10-04T20:24:30+00:00",
      sport: "hockey",
      owner: "steve",
      players: "10",
      game_id: 1,
    },
    {
      notes: "Game was played",
      time: "2017-10-04T12:35:30+00:00",
      sport: "lacrosse",
      owner: "steve",
      players: "6",
      game_id: 2,
    },
    {
      notes: "Game was played",
      time: "2017-10-14T20:32:30+00:00",
      sport: "hockey",
      owner: "steve",
      players: "4",
      game_id: 3,
    },
    {
      notes: "Game was played",
      time: "2017-10-04T10:12:30+00:00",
      sport: "hockey",
      owner: "henry",
      players: "10",
      game_id: 4,
    },
    {
      notes: "Game was played",
      time: "2017-10-14T20:34:30+00:00",
      sport: "soccer",
      owner: "john",
      players: "12",
      game_id: 5,
    },
  ];

  let basket = [
    {
      id: 1,
      name: "Double Cheeseburger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: "98.25",
      description:
        "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
    },
    {
      id: 1,
      name: "Double Cheeseburger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: "98.25",
      description:
        "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
    },
    {
      id: 1,
      name: "Double Cheeseburger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: "98.25",
      description:
        "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
    },
    {
      id: 2,
      name: "Loaded Burger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: "260.50",
      description:
        "Signature burgers all have fresh twist on traditional favourites, including tasty toppings such as caramelised onions, mature cheddar and alioli",
    },
    {
      id: 2,
      name: "Loaded Burger",
      category: "burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: "260.50",
      description:
        "Signature burgers all have fresh twist on traditional favourites, including tasty toppings such as caramelised onions, mature cheddar and alioli",
    },
    {
      id: 3,
      name: "Meat Lovers",
      category: "pizza",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: "350.45",
      description:
        "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
    },
  ];

  function write_log() {
    console.log(`Inside write_log`);
    let finalObj = {};
    a.forEach((games) => {
      const date = games.time.split("T")[0];
      if (finalObj[date]) {
        finalObj[date].push(games);
      } else {
        finalObj[date] = [games];
      }
    });
    console.log(JSON.stringify(finalObj, null, 2));
  }

  function aggregate_orders() {
    console.log(`Inside aggregate_orders`);
    let basket_items = {};
    basket.forEach((item) => {
      // const date = games.time.split("T")[0];
      if (basket_items[item.id]) {
        basket_items[item.id].push(item);
      } else {
        basket_items[item.id] = [item];
      }
    });
    console.log(JSON.stringify(basket_items, null, 2));
    set_allItems(basket_items);
  }

  return (
    <div>
      <button
        onClick={aggregate_orders}
        className="px-4 py-1 bg-red-500 text-white"
      >
        Click me
      </button>
      <div>
        {Object.keys(allItems).map((key) => (
          <p>
            {/* {key}: {JSON.stringify(allItems[key])} */}
            {key}: {allItems[key].length}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MyTestCart;
