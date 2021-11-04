import storeTypes from "../constants/store-types";
import leaguesReducer from "./leagues";
import teamsReducer from "./teams";

const reducers = {
  [storeTypes.LEAGUES]: leaguesReducer,
  [storeTypes.TEAMS]: teamsReducer,
};

export default reducers;
