export enum ListMoviesCategoryEnum {
    NOW_PLAYING = "now_playing",
    TOP_RATED = "top_rated",
    POPULAR = "popular",
    UNKNOW = "unknow"
}
  
export type ListMoviesCategoryType = Lowercase<keyof typeof ListMoviesCategoryEnum>;
