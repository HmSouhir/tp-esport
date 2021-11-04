import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOne } from "../../../store/actions/leagues";

import View from "./view";
import { PATHS } from "../../../utils/constants";

const Detail = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const leagueQuery = useSelector((state) => state.leagues.getOne);
  const onClickWinner = (id) => push(`${PATHS.TEAMS.LIST}/${id}`);

  useEffect(() => {
    dispatch(getOne(id));
  }, [id, dispatch]);

  return <View leagueQuery={leagueQuery} onClickWinner={onClickWinner} />;
};

export default Detail;
