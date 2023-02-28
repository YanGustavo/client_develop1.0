import {
  CART_DETAILS_REQUEST,
  CART_ADD_SUCCESS,
  CART_DETAILS_FAIL,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from "constants/cart-constants";

export const cartReducer = (
  state:any = { cartItems: [], shippingAddress: {} },
  action:any
) => {
  switch (action.type) {
    case CART_DETAILS_REQUEST:
      return { ...state, loading: true};
    case CART_ADD_SUCCESS:
      const item:any = action.payload;
      const existItem:any = state.cartItems.find(
        (x:any) => x.product === item.product
        );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x:any) =>
            x.product === existItem.product ? item : x
          ),
          loading: false,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          loading: false,
        };
      }
      case CART_DETAILS_FAIL:
        return { loading: false, error: action.payload };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x:any) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
