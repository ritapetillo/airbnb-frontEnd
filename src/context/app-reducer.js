import {
  SEARCH_LISTINGS,
  AUTH,
  LOGOUT,
  REGISTER_BOOKING,
  GET_CURRENT_USER_BOOKINGS,
} from "./app-actions";

const appReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SEARCH_LISTINGS:
      return {
        ...state,
        listings: action.payload,
      };
    case AUTH:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: "",
        isAuth: false,
      };
    case REGISTER_BOOKING:
      return {
        ...state,
        booking: action.payload,
      };
    case GET_CURRENT_USER_BOOKINGS:
      return {
        ...state,
        prevBookings: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
