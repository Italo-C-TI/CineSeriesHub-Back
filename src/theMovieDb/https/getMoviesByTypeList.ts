import axios from 'axios';
import {baseMoviesUrl} from '../urls';
import { NotFoundMOVIE_DB_API_KEYError, UnexpectedError } from '../../errors';
import { ListMoviesCategoryType } from '../../types&enums/TypeListMovie';
import { env } from '../../env';


export const getMoviesByTypeList = async (typeListMovies: ListMoviesCategoryType, page?: number) => {
  try {
    const apiKey = env.MOVIE_DB_API_KEY;
    if (!apiKey) {
         throw new NotFoundMOVIE_DB_API_KEYError();
    }
    const params = {
      include_adult: false,
      language: 'pt-BR',
      page: page,
      api_key: apiKey,
    };

    const response = await axios.get(`${baseMoviesUrl}${typeListMovies}`, { params });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new UnexpectedError();
  }
}


