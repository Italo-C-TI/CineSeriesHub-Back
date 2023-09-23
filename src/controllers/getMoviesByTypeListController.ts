import { z as typingRules } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { getMoviesByTypeList } from "../theMovieDb/https";
import { ListMoviesCategoryEnum, ListMoviesCategoryType } from "../typesAndEnums";

export const getMoviesByTypeListController = async (req: FastifyRequest, res: FastifyReply) => {
    const QuerySchema = typingRules.object({
        typeListMovies: typingRules.nativeEnum(ListMoviesCategoryEnum),
    })

    let { typeListMovies } = QuerySchema.parse(req.query);
    typeListMovies = Object.values(ListMoviesCategoryEnum).includes(typeListMovies)
  ? typeListMovies
  : ListMoviesCategoryEnum.UNKNOWN;
        try {
        if(typeListMovies === ListMoviesCategoryEnum.UNKNOWN){
            return res.status(400).send({ message: 'Tipo de lista inexistente ou não mapeada'});
        }
    
        const movies = await getMoviesByTypeList(typeListMovies);
        console.log(movies);
 

        return res.status(200).send({ movies })

    } catch (error) {
        console.log(error);
    }
}