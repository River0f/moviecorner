import { StoreDispatch } from "../../store"
import { setAPIConfig, setCountries, setJobs, setLanguages, setPrimaryTranslations, setTimezones } from "../../store/reducers/configReducer"
import { APIConfig, Country, Job, Language, Timezone } from "../../types/types"
import { mdbCLient } from "../instances"

export const fetchAPIConfig = () => {
    return (dispatch: StoreDispatch) =>{
        mdbCLient.get<APIConfig>("configuration")
        .then((responce) => {
            console.log(responce.data);
            dispatch(setAPIConfig(responce.data))
        })
    }
}

export const fetchCountries = () => {
    return (dispatch: StoreDispatch) =>{
        mdbCLient.get<Country[]>("/configuration/countries")
        .then((responce) => {
            console.log(responce.data);
            dispatch(setCountries(responce.data))
        })
    }
}

export const fetchJobs = () => {
    return (dispatch: StoreDispatch) =>{
        mdbCLient.get<Job[]>("/configuration/jobs")
        .then((responce) => {
            console.log(responce.data);
            dispatch(setJobs(responce.data))
        })
    }
}

export const fetchLanguages = () => {
    return (dispatch: StoreDispatch) =>{
        mdbCLient.get<Language[]>("/configuration/languages")
        .then((responce) => {
            console.log(responce.data);
            dispatch(setLanguages(responce.data))
        })
    }
}

export const fetchPrimaryTranslations = () => {
    return (dispatch: StoreDispatch) =>{
        mdbCLient.get<string[]>("/configuration/primary_translations")
        .then((responce) => {
            console.log(responce.data);
            dispatch(setPrimaryTranslations(responce.data))
        })
    }
}

export const fetchTimezones = () => {
    return (dispatch: StoreDispatch) =>{
        mdbCLient.get<Timezone[]>("/configuration/timezones")
        .then((responce) => {
            console.log(responce.data);
            dispatch(setTimezones(responce.data))
        })
    }
}