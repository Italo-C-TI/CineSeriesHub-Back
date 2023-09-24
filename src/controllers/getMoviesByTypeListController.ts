import { z as typingRules } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { getMoviesByTypeList } from "../theMovieDb/https";
import { ListMoviesCategoryEnum, ListMoviesCategoryType } from "../types&enums";

export const getMoviesByTypeListController = async (req: FastifyRequest, res: FastifyReply) => {

    const typeListMovies = req.originalUrl.split("/")[1] as ListMoviesCategoryType;
 
    try {
        if(typeListMovies === ListMoviesCategoryEnum.UNKNOWN){
            return res.status(400).send({ message: 'Tipo de lista inexistente ou não mapeada'});
        }
    
        const movies = await getMoviesByTypeList(typeListMovies);
        return res.status(200).send({ movies })

    } catch (error) {
        console.log(error);
    }
}
