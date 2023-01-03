import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartProducts: sessionStorage.getItem("cartItems")
    ? JSON.parse(sessionStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.cartProducts.findIndex(
        (product) => product.id === payload.id
      );
      if (index >= 0) {
        state.cartProducts[index].cartQuantity += 1;
        toast.info(
          `${state.cartProducts[index].name} cart Quantity increased to  ${state.cartProducts[index].cartQuantity} `,
          {
            position: "bottom-left",
            autoClose: 800,
          }
        );
      } else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        // console.log("tempproduct=>", tempProduct);
        state.cartProducts.push(tempProduct);
        toast.success(`${payload.name} added to a cart`, {
          position: "bottom-left",
          autoClose: 800,
        });
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartProducts));
    },

    decreasedQuantity: (state, { payload }) => {
      // console.log(payload);
      const Index = state.cartProducts.findIndex(
        (product) => product.id === payload.id
      );
      // console.log(current(state.cartProducts[findIndex]));
      if (state.cartProducts[Index].cartQuantity > 1) {
        state.cartProducts[Index].cartQuantity -= 1;
        toast.info(` Decreased ${payload.name} cart quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartProducts[Index].cartQuantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== payload.id
        );
        toast.error(`${payload.name} has been removed from the cart`, {
          position: "bottom-left",
        });
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartProducts));
    },

    increasedQuantity: (state, { payload }) => {
      // console.log(payload);
      const Index = state.cartProducts.findIndex(
        (product) => product.id === payload.id
      );
      // console.log(current(state.cartProducts[findIndex]));
      if (state.cartProducts[Index].cartQuantity >= 1) {
        state.cartProducts[Index].cartQuantity =
          state.cartProducts[Index].cartQuantity + 1;
      }
      toast.success(`${payload.name} quantity increased`, {
        position: "bottom-left",
        autoClose: 800,
      });
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartProducts));
    },
    removeProduct: (state, { payload }) => {
      const removeFromCart = state.cartProducts.filter(
        (product) => product.id !== payload.id
      );
      state.cartProducts = removeFromCart;
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartProducts));
      toast.error(`${payload.name} has been removed from the cart`, {
        position: "bottom-left",
        autoClose: 800,
      });
    },
    clearCart: (state) => {
      state.cartProducts = [];
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartProducts));
      toast.error(`Cart Cleared`, {
        position: "bottom-left",
        autoClose: 800,
      });
    },

    getTotals: (state) => {
      const grandTotal = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity; //only for one product/item
          cartTotal.total += itemTotal; // for grand total
          cartTotal.quantity += cartQuantity;
          return cartTotal; //return
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      // console.log(total);
      const { total, quantity } = grandTotal;
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  decreasedQuantity,
  increasedQuantity,
  removeProduct,
  clearCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
