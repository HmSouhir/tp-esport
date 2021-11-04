import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { Context } from "../../../Shared/Context";
import { PATHS } from "../../../utils/constants";
import { get } from "../../../store/actions/leagues";
import View from "./view";

const Leagues = () => {
  const dispatch = useDispatch();
  const { selectedGame } = useContext(Context);

  const [page, setPage] = useState(1);
  const onPageChange = setPage;
  const leaguesQuery = useSelector((state) => state.leagues.get);

  useEffect(() => {
    dispatch(get({ selectedGame, page, per_page: 5 }));
  }, [dispatch, page, selectedGame]);

  const history = useHistory();
  const onShow = (id) => history.push(`${PATHS.LEAGUES.LIST}/${id}`);

  return <View {...{ onShow, leaguesQuery, onPageChange, page }} />;
};

export default Leagues;
