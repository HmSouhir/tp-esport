import { api } from "./fetcher";
import { ALL } from "../constants";

const leagueApi = {
  get: ({ selectedGame, ...query }) =>
    selectedGame === ALL
      ? api.get("/leagues", { query })
      : api.get(`/${selectedGame}/leagues`, { query }),
  getOne: (id) => api.get(`/leagues/${id}`),
};

export default leagueApi;
