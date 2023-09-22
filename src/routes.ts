import { FastifyInstance } from "fastify";
import { getMovieByIdController,getMoviesBySearchController } from "./controllers";
export async function appRoutes(app: FastifyInstance) {
    app.get('/movies', listMovies);
    app.get('/movie', getMovieByIdController);
    app.get('/movies/search',getMoviesBySearchController);
}