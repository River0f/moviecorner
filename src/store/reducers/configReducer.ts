import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIConfig, Country, Job, Language, Timezone } from "../../types/types";

export interface ConfigState {
    apiConfig: APIConfig;
    countries: Country[];
    jobs: Job[];
    languages: Language[];
    primaryTranslations: string[];
    timezones: Timezone[];
}

const initalState:ConfigState  = {
    apiConfig: {
        images: {
            base_url: "",
            secure_base_url: "",
            backdrop_sizes: [],
            logo_sizes: [],
            poster_sizes: [],
            profile_sizes: [],
            still_sizes: []
        },
        change_keys: []
    },
    countries: [],
    jobs: [],
    languages: [],
    primaryTranslations: [],
    timezones: [],
}

export const apiConfigslice = createSlice({
    name: "config",
    initialState: initalState,
    reducers: {
        setAPIConfig: (state, action:PayloadAction<APIConfig>) => {
            state.apiConfig = action.payload;
        },
        setCountries: (state, action:PayloadAction<Country[]>) => {
            state.countries = action.payload;
        },
        setJobs: (state, action:PayloadAction<Job[]>) => {
            state.jobs = action.payload;
        },
        setLanguages: (state, action:PayloadAction<Language[]>) => {
            state.languages = action.payload;
        },
        setPrimaryTranslations: (state, action:PayloadAction<string[]>) => {
            state.primaryTranslations = action.payload;
        },
        setTimezones: (state, action:PayloadAction<Timezone[]>) => {
            state.timezones = action.payload;
        }
    }
})

export const { setAPIConfig, setCountries, setJobs, setLanguages, setPrimaryTranslations, setTimezones} = apiConfigslice.actions;

export default apiConfigslice.reducer;