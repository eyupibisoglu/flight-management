import { ADD_FLIGHT, DELETE_FLIGHT } from "../constants";
export const addFlight    = flight => ({ type: ADD_FLIGHT, payload: flight });
export const deleteFlight = flight => ({ type: DELETE_FLIGHT, payload: flight })