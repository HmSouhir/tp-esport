import List from "./List";
import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";
import Detail from "./Detail";

const routes = [
  { exact: true, component: List, path: PATHS.HOME },
  { exact: true, component: Detail, path: PATHS.LEAGUES.DETAIL },
];

export default MapRoutes(routes, Layout);
