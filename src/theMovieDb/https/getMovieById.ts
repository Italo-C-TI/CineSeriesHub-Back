import axios from 'axios';
import {baseMoviesUrl} from '../urls';
import { NotFoundMOVIE_DB_API_KEYError } from '../../errors';
import { env } from '../../env';

export const getMovieById = async (movie_id: string, page?: number) => {
  try {
    const apiKey = env.MOVIE_DB_API_KEY;
    if (!apiKey) {
        throw new NotFoundMOVIE_DB_API_KEYError();
    }
    const params = {
      include_adult: false,
      language: 'pt-BR',
      movie_id,
      page: page || 1,
      api_key: apiKey,
    };
    const response = await axios.get(baseMoviesUrl, { params });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar filme');
  }
}


