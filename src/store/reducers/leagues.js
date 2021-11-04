import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { LeaguesActionTypes } from "../constants/action-types";

const initialState = {
  get: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
    totalItems: 0,
  },
  getOne: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
  },
};

const getReducer = {
  [LeaguesActionTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [LeaguesActionTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [LeaguesActionTypes.GET.SUCCESS]: (state, action) => {
    const {
      payload: { data, totalItems },
    } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data,
      totalItems,
    };
    return { ...state, get: { ...query } };
  },
};

const getOneReducer = {
  [LeaguesActionTypes.GET_ONE.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [LeaguesActionTypes.GET_ONE.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [LeaguesActionTypes.GET_ONE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data: payload.data,
    };
    return { ...state, getOne: { ...query } };
  },
};

const clientSlice = createSlice({
  name: storeTypes.LEAGUES,
  initialState,
  reducers: {
    ...getReducer,
    ...getOneReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
