import { api } from "./fetcher";
import { ALL } from "../constants";

const teamApi = {
  get: ({ selectedGame, ...query }) =>
    selectedGame === ALL
      ? api.get("/teams", { query })
      : api.get(`/${selectedGame}/teams`, { query }),
  getOne: (id) => api.get(`/teams/${id}`),
};

export default teamApi;
