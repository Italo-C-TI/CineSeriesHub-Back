export enum ListMoviesCategoryEnum {
    NOW_PLAYING = "now_playing",
    TOP_RATED = "top_rated",
    POPULAR = "popular",
    UNKNOWN = "unknown"
}
  
export type ListMoviesCategoryType = Lowercase<keyof typeof ListMoviesCategoryEnum>;
