import { getMoviesBySearch } from "../theMovieDb/https/getMoviesBySearch";
import { z as typingRules } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";

export const getMoviesBySearchController = async (req: FastifyRequest, res: FastifyReply) => {
    const QuerySchema = typingRules.object({
        search: typingRules.string(),
    })

    const { search } = QuerySchema.parse(req.query);


    try {
        const movies = await getMoviesBySearch(search);
 

        return res.status(200).send({ movies })

    } catch (error) {
        console.log(error);
        throw new Error('Erro ao pesquisar filmes');
    }
}