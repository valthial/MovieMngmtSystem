import axios from "axios"
import type { MovieDto } from "~/models/movie";

const API_BASE_URL = import.meta.env.VITE_API_URL;
export const getMovieById = async (id: string) => {
  try {
    const {
      data,
      status,
      statusText,
    } = await axios.get<MovieDto>(`http://localhost:5000/api/movies/${id}`);

    if (status < 200 || status >= 300) {
      console.error("[getMovieById]: Failed with status", status, statusText);
      return null;
    }

    return data;
  }
  catch (e) {
    console.error("[getMovieById]: Failed with error message", (e as Error).message)
    return null;
  }
}

export const getMovies = async () => {
  try {
    const {
      data,
      status,
      statusText,
    } = await axios.get<MovieDto[]>(`http://localhost:5000/api/movies/getAll`);

    if (status < 200 || status >= 300) {
      console.error("[getMovies]: Failed with status", status, statusText);
      return null;
    }

    return data;
  } catch (e) {
    console.error("[getMovies]: Failed with error message", (e as Error).message)
    return null;
  }
}
