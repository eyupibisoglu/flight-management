import { ADD_FLIGHT, DELETE_FLIGHT, API_CALL_SUCCESS, API_CALL_REQUEST } from "../constants";

const initialState = {
    fetching: false, error: null,
    flights: [{ "_id": 1, "origin": "İstanbul", "destination": "Antalya" }, { "_id": 2, "origin": "İstanbul", "destination": "Ankara" }]
  };
  
const rootReducer = (state = initialState, action) => 
{
    switch (action.type) 
    {
        case ADD_FLIGHT:
            return { ...state, flights: [...state.flights, action.payload] };
        case DELETE_FLIGHT:
            const newFlights = state.flights.filter(flight => flight._id !== action.payload._id)
            return { ...state, flights: newFlights }
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, flights: action.flights };
        default:
            return state;
    }
};
  
  export default rootReducer;