import { FastifyInstance } from "fastify";
import { getMovieByIdController,getMoviesBySearchController, getMoviesByTypeListController } from "./controllers";
export async function appRoutes(app: FastifyInstance) {
    app.get('/movies', getMoviesByTypeListController);
    app.get('/movie', getMovieByIdController);
    app.get('/movies/search',getMoviesBySearchController);
}