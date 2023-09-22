import axios from 'axios';
import {baseMoviesUrl} from '../urls';
import { NotFoundMOVIE_DB_API_KEYError } from '../../errors';
import { ListMoviesCategoryType } from '../../types/TypeListMovie';

export const getMoviesByTypeList = async (typeListMovies: ListMoviesCategoryType, page?: number) => {
  try {
    const apiKey = process.env.MOVIE_DB_API_KEY;
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
    throw new Error('Erro ao buscar filmes: ' + error.message);
  }
}


