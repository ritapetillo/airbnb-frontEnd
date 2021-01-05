import moment from "moment";
export const getTotNights = (checkin, checkout) => {
  const checkinD = moment(checkin);
  const checkoutD = moment(checkout);
  const nights = checkoutD.diff(checkinD, "days");
  return nights;
};
