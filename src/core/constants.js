export const APP_ROUTES = {
  ROOT: "/",
  BUSINESSES: "/businesses",
  BUSINESS_BY_ID: "/businesses/:businessId",
  NEW_BUSINESS: "/businesses/new",
  EVENTS: "/events",
  EVENT_BY_ID: "/events/:eventId",
  NEW_EVENT: "/events/new",
  ABOUT: "/about",
  EDIT_BUSINESS: "/businesses/:businessId/edit",
};

export const API_URL = import.meta.env.VITE_API_URL;

export const typeOfBusinessKeys = [
  "hotel",
  "restaurant",
  "coffee-shop",
  "store",
  "museum",
  "theatre",
  "brand",
  "supermarket",
  "transport",
  "workplace",
  "other",
];
