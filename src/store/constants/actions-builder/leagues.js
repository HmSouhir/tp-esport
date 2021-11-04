import { actions } from "../../reducers/leagues";
import { LeaguesActionTypes } from "../action-types";

const leaguesActionsBuilder = {
  GET: {
    START: actions[LeaguesActionTypes.GET.START],
    SUCCESS: actions[LeaguesActionTypes.GET.SUCCESS],
    FAIL: actions[LeaguesActionTypes.GET.FAIL],
  },
  GET_ONE: {
    START: actions[LeaguesActionTypes.GET_ONE.START],
    SUCCESS: actions[LeaguesActionTypes.GET_ONE.SUCCESS],
    FAIL: actions[LeaguesActionTypes.GET_ONE.FAIL],
  },
};

export default leaguesActionsBuilder;
