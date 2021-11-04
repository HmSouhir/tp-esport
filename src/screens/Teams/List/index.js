import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { PATHS } from "../../../utils/constants";
import { get } from "../../../store/actions/teams";

import { Context } from "../../../Shared/Context";
import View from "./view";

const Leagues = () => {
  const { selectedGame } = useContext(Context);

  const history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const onPageChange = setPage;
  const teamsQuery = useSelector((state) => state.teams.get);
  
  useEffect(() => {
    dispatch(get({ selectedGame, page, per_page: 5 }));
  }, [dispatch, page, selectedGame]);

  const onShow = (id) => history.push(`${PATHS.TEAMS.LIST}/${id}`);

  return <View {...{ onShow, teamsQuery, onPageChange, page }} />;
};

export default Leagues;
