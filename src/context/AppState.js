import React, { useState, useReducer, useEffect } from "react";
import { SEARCH_LISTINGS, AUTH, LOGOUT, REGISTER_BOOKING } from "./app-actions";
import AppContext from "./app-context";
import appReducer from "./app-reducer";
import { getListingsResearch, login, getUser, register } from "../lib/fetches";
import appContext from "./app-context";

function AppState(props) {
  const [isAuth, setisAuth] = useState(false);
  const [lastSearch, setLastSearch] = useState();
  const initialState = {
    listings: [],
    currentListing: "",
    user: "",
    isAuth: false,
    booking: "",
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("TOKEN"));
    if (token) {
      const user = getUser(token);
      dispatch({
        type: AUTH,
        payload: user,
      });
    }
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
    dispatch({
      type: REGISTER_BOOKING,
      payload: body,
    });
    console.log(body);
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
        booking: state.booking,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppState;
