import { getMovieById } from "../theMovieDb/https/getMovieById"; // Importe a função correta
import { z as typingRules } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";

export const getMovieByIdController = async (req: FastifyRequest, res: FastifyReply) => {
    const ParamsSchema = typingRules.object({
        movie_id: typingRules.string(),
    })

    const { movie_id } = ParamsSchema.parse(req.params);

    try {
        const movie = await getMovieById(movie_id);

        if (movie) {
            return res.status(200).send({ movie });
        } else {
            return res.status(404).send({ message: 'Filme não encontrado' });
        }

    } catch (error) {
        console.log(error);
        throw new Error('Erro ao buscar filme');
    }
}