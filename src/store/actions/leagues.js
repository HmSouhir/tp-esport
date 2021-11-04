import api from "../../utils/api/leagues";
import { CommonActionTypes } from "../constants/action-types";
import { LeaguesActionsBuilder } from "../constants/actions-builder";

export const get = (query, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: LeaguesActionsBuilder.GET,
  promise: () => api.get(query),
  successCallback,
  errorCallback,
});

export const getOne = (id, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: LeaguesActionsBuilder.GET_ONE,
  promise: () => api.getOne(id),
  successCallback,
  errorCallback,
});
