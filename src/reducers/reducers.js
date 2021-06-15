import {combineReducers} from "redux";
import fetchTech from "../reducers/fetch_tech";
import customSearch from "../reducers/custom_search";

const reducers= combineReducers({
    FetchTech: fetchTech,
    CustomSearch: customSearch
});

export default reducers;