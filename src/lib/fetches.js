const { REACT_APP_API_URI } = process.env;
const TOKEN = JSON.parse(localStorage.getItem("token"));
export const getListingsResearch = async (city, checkin, checkout, guests) => {
  console.log(city);
  try {
    const res = await fetch(
      `${REACT_APP_API_URI}/listings/search/results?city=${city}&checkin=${checkin}&checkout=${checkout}}&guests=${guests}`
    );
    const data = await res.json();
    if (res.ok) {
      console.log(data);
      return data;
    } else {
      console.log("there was a problem fetching data");
    }
  } catch (err) {
    console.log(err);
  }
};
export const getListingById = async (id) => {
  try {
    const res = await fetch(`${REACT_APP_API_URI}/listings/${id}`);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      console.log("there was a problem fetching data");
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  try {
    const res = await fetch(`${REACT_APP_API_URI}/users/login`, {
      headers: myHeaders,
      method: "POST",
      body: JSON.stringify(body),
    });
    if (res.ok) {
      console.log(res);
      const data = await res.text();
      return data;
    } else {
      console.log("there was a problem fetching data");
    }
  } catch (err) {
    console.log(err);
  }
};

export const register = async (body) => {
  body = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
  };
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    headers: myHeaders,
    method: "POST",
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(
      `${REACT_APP_API_URI}/users/register`,
      requestOptions
    );
    console.log(res);
    if (res.ok) {
      console.log(res);
      const data = await res.text();
      return data;
    } else {
      console.log("there was a problem register user");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (token) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("auth-token", token && token);

  try {
    const res = await fetch(`${REACT_APP_API_URI}/users/me`, {
      headers: myHeaders,
      method: "GET",
    });
    if (res.ok) {
      const data = await res.json();

      return data;
    } else {
      console.log("there was a problem fetching data");
    }
  } catch (err) {
    console.log(err);
  }
};

//make booking
const postBooking = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("auth-token", TOKEN && TOKEN);
  const requestOptions = {
    headers: myHeaders,
    method: "POST",
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(`${REACT_APP_API_URI}/bookings`, requestOptions);
    console.log(res);
    if (res.ok) {
      console.log(res);
      const data = await res.text();
      return data;
    } else {
      console.log("there was a problem creating the booking");
    }
  } catch (err) {
    console.log(err);
    console.log("there was a problem creating the booking");
  }
};
