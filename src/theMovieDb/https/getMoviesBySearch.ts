import axios from 'axios';
import {searchMoviesUrl} from '../urls';
import { NotFoundMOVIE_DB_API_KEYError, UnexpectedError } from '../../errors';
import { env } from '../../env';

export const getMoviesBySearch = async (query: string, page?: number) => {
  try {
    const apiKey = env.MOVIE_DB_API_KEY;
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
    console.log(error);
    throw new UnexpectedError();
  }
}


