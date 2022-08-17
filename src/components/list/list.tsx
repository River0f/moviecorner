import axios from "axios";
import { useEffect } from "react"
import { IMovieList } from "../../types/types";

const API_KEY = '09671f893e89a3d219d0bad73ba9e631';

export const List = () => {

    useEffect(() => {
        const fetchData = async () => {
            axios.get<IMovieList>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
                .then((responce) => {
                    console.log(responce.data);
                })
        }
        fetchData();
    });

    return (
        <div>
            Movie list
        </div>
    )
}