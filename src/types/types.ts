
export interface IMovie {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_id: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface IMovieList {
    page?: number;
    results?: IMovie[];
    total_results?: number;
    total_pages?: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ImagesConfig {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
}

export interface APIConfig {
    images: ImagesConfig;
    change_keys: string[];
}

export interface Country {
    iso_3166_1: string;
    english_name: string;
}

export interface Job {
    department: string;
    jobs: string[];
}

export interface Language {
    iso_639_1: string;
    english_name: string;
    name: string;
}

export interface Timezone {
    iso_3166_1: string;
    zones: string[];
}