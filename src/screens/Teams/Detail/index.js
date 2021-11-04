import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOne } from "../../../store/actions/teams";

import View from "./view";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const teamQuery = useSelector((state) => state.teams.getOne);

  useEffect(() => {
    dispatch(getOne(id));
  }, [id, dispatch]);

  return <View teamQuery={teamQuery} />;
};

export default Detail;
