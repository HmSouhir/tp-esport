import { actions } from "../../reducers/teams";
import { TeamsActionTypes } from "../action-types";

const teamsActionTypes = {
  GET: {
    START: actions[TeamsActionTypes.GET.START],
    SUCCESS: actions[TeamsActionTypes.GET.SUCCESS],
    FAIL: actions[TeamsActionTypes.GET.FAIL],
  },
  GET_ONE: {
    START: actions[TeamsActionTypes.GET_ONE.START],
    SUCCESS: actions[TeamsActionTypes.GET_ONE.SUCCESS],
    FAIL: actions[TeamsActionTypes.GET_ONE.FAIL],
  },
};

export default teamsActionTypes;
