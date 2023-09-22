export class NotFoundMOVIE_DB_API_KEYError extends Error {
    constructor() {
      super('A variável de ambiente MOVIE_DB_API_KEY não está definida.')
    }
  }