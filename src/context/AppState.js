import React, { useState, useReducer, useEffect } from "react";
import { SEARCH_LISTINGS, AUTH, LOGOUT, REGISTER_BOOKING } from "./app-actions";
import AppContext from "./app-context";
import appReducer from "./app-reducer";
import {
  getListingsResearch,
  login,
  getUser,
  register,
  postBooking,
} from "../lib/fetches";
import appContext from "./app-context";
import useReducerPersisted from "use-reducer-persisted";

function AppState(props) {
  const [isAuth, setisAuth] = useState(false);
  const [lastSearch, setLastSearch] = useState();
  const initialState = { ...JSON.parse(localStorage.getItem("state")) } || {
    listings: [],
    currentListing: "",
    user: "",
    isAuth: false,
    booking: "",
  };

  console.log(initialState);
  const [state, dispatch] = useReducerPersisted(
    "state",
    appReducer,
    initialState,
    "local"
  );

  // const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("TOKEN"));
    // if (token) {
    //   const user = getUser(token);
    //   dispatch({
    //     type: AUTH,
    //     payload: user,
    //   });
    // }
  }, []);

  const doLogin = async (cred) => {
    try {
      console.log(cred);
      const token = await login(cred);
      if (token) {
        await localStorage.setItem("TOKEN", JSON.stringify(token));
        const user = await getUser(token);
        dispatch({
          type: AUTH,
          payload: user,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const doLogout = async () => {
    await localStorage.clear();
    dispatch({
      type: LOGOUT,
    });
  };

  const doRegister = async (cred) => {
    try {
      const token = JSON.parse(localStorage.getItem("TOKEN"));
      console.log(cred);
      if (token) {
        await localStorage.clear();
      }
      const user = await register(cred);
      console.log(user);
      // dispatch({
      //     type:AUTH,
      //    payload:user

      // })
    } catch (err) {
      console.log(err);
    }
  };

  const getListings = async (queries) => {
    const { city, checkin, checkout, guests } = queries;
    setLastSearch(queries);
    try {
      const listings = await getListingsResearch(
        city,
        checkin,
        checkout,
        guests
      );
      dispatch({
        type: SEARCH_LISTINGS,
        payload: listings,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const registerBooking = async (body) => {
    try {
      const booking = {
        ...body,
        isCompleted: true,
      };
      const bookingMade = await postBooking(body);
      console.log(bookingMade);
      console.log(body);
      dispatch({
        type: REGISTER_BOOKING,
        payload: booking,
      });
      return bookingMade;
    } catch (err) {
      console.log(err);
    }
  };

  const preBooking = async (booking) => {
    try {
      const bookingData = {
        ...booking,
        isCompleted: false,
      };

      dispatch({
        type: REGISTER_BOOKING,
        payload: bookingData,
      });
    } catch (err) {
      console.log("It was not possible to compelete the booking");
      return undefined;
    }
  };

  return (
    <AppContext.Provider
      value={{
        listings: state.listings,
        isAuth: state.isAuth,
        setisAuth,
        getListings,
        lastSearch,
        user: state.user,
        doLogin,
        doLogout,
        doRegister,
        registerBooking,
        preBooking,
        booking: state.booking,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
