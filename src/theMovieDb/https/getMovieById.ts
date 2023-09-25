import axios from 'axios';
import {baseMoviesUrl} from '../urls';
import { NotFoundMOVIE_DB_API_KEYError, UnexpectedError } from '../../errors';
import { env } from '../../env';

export const getMovieById = async (movie_id: string) => {
  try {
    const apiKey = env.MOVIE_DB_API_KEY;
    if (!apiKey) {
        throw new NotFoundMOVIE_DB_API_KEYError();
    }
    const params = {
      include_adult: false,
      language: 'pt-BR',
      api_key: apiKey,
    };
    const response = await axios.get(`${baseMoviesUrl}${movie_id}`, { params });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new UnexpectedError();
  }
}


