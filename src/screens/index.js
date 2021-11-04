import Leagues from "./Leagues";
import NotFound from "../Shared/NotFound";
import Teams from "./Teams";

const routes = [...Leagues, ...Teams, { component: NotFound }];

export default routes;
