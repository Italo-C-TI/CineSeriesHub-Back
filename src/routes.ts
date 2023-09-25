import { FastifyInstance } from "fastify";
import { getMovieByIdController,getMoviesBySearchController, getMoviesByTypeListController } from "./controllers";
export async function appRoutes(app: FastifyInstance) {
    app.get('/top_rated/movies', getMoviesByTypeListController);
    app.get('/popular/movies', getMoviesByTypeListController);
    app.get('/now_playing/movies', getMoviesByTypeListController);
    app.get('/movie/:movie_id', getMovieByIdController);
    app.get('/movies/search',getMoviesBySearchController);
}