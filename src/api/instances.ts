import axios from "axios";

const API_KEY = "09671f893e89a3d219d0bad73ba9e631";

export const mdbCLient = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        "api_key": API_KEY
    }
})