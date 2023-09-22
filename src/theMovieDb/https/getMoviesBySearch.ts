import axios from 'axios';
import {searchMoviesUrl} from '../urls';
import { NotFoundMOVIE_DB_API_KEYError } from '../../errors';

export const getMoviesBysearchMovies = async (query: string, page?: number) => {
  try {
    const apiKey = process.env.MOVIE_DB_API_KEY;
    if (!apiKey) {
        throw new NotFoundMOVIE_DB_API_KEYError();
    }
    const params = {
      include_adult: false,
      language: 'pt-BR',
      query,
      page: page || 1,
      api_key: apiKey,
    };
    const response = await axios.get(searchMoviesUrl, { params });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar filmes: ' + error.message);
  }
}


