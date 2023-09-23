import axios from 'axios';
import {baseMoviesUrl} from '../urls';
import { NotFoundMOVIE_DB_API_KEYError } from '../../errors';
import { ListMoviesCategoryType } from '../../typesAndEnums/TypeListMovie';
import { env } from '../../env';


export const getMoviesByTypeList = async (typeListMovies: ListMoviesCategoryType, page?: number) => {
  try {
    const apiKey = env.MOVIE_DB_API_KEY;
    console.log(apiKey);
    console.log(env);
    if (!apiKey) {
         throw new NotFoundMOVIE_DB_API_KEYError();
    }
    const params = {
      include_adult: false,
      language: 'pt-BR',
      page: page || 1,
      api_key: apiKey,
    };

    const response = await axios.get(`${baseMoviesUrl}${typeListMovies}`, { params });


    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao buscar lista de filmes');
  }
}


