import api from "../../utils/api/teams";
import { CommonActionTypes } from "../constants/action-types";
import { TeamsActionsBuilder } from "../constants/actions-builder";

export const get = (query, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeamsActionsBuilder.GET,
  promise: () => api.get(query),
  successCallback,
  errorCallback,
});

export const getOne = (id, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeamsActionsBuilder.GET_ONE,
  promise: () => api.getOne(id),
  successCallback,
  errorCallback,
});
