export const initialState = {
  basket: [],
  user: "null",
  // basket: [
  //   {
  //     id: 1,
  //     name: "Double Cheeseburger",
  //     category: "burger",
  //     image:
  //       "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  //     price: "98.25",
  //     description:
  //       "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
  //   },
  //   {
  //     id: 1,
  //     name: "Double Cheeseburger",
  //     category: "burger",
  //     image:
  //       "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  //     price: "98.25",
  //     description:
  //       "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
  //   },
  //   {
  //     id: 1,
  //     name: "Double Cheeseburger",
  //     category: "burger",
  //     image:
  //       "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  //     price: "98.25",
  //     description:
  //       "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
  //   },
  //   {
  //     id: 2,
  //     name: "Loaded Burger",
  //     category: "burger",
  //     image:
  //       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  //     price: "260.50",
  //     description:
  //       "Signature burgers all have fresh twist on traditional favourites, including tasty toppings such as caramelised onions, mature cheddar and alioli",
  //   },
  //   {
  //     id: 2,
  //     name: "Loaded Burger",
  //     category: "burger",
  //     image:
  //       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  //     price: "260.50",
  //     description:
  //       "Signature burgers all have fresh twist on traditional favourites, including tasty toppings such as caramelised onions, mature cheddar and alioli",
  //   },
  //   {
  //     id: 3,
  //     name: "Meat Lovers",
  //     category: "pizza",
  //     image:
  //       "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //     price: "350.45",
  //     description:
  //       "Generously topped with crispy rasher bacon & crumbled beef on a BBQ sauce base, finished with creamy mayonnaise",
  //   },
  // ],
};

const reducer = (state, action) => {
  console.log(`Action triggered: ${action.type}`);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log("Request deletion", index, action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} ) as it's not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "DELETE_ITEM":
      let updated_basket = state.basket.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: updated_basket,
      };

    case "CLEAR_CART":
      return { ...state, basket: [] };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
