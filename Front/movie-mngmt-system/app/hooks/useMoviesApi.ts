import axios from "axios"
import { useState } from "react";

export const useMoviesApi = () => {
    const [isExecuting, setIsExecuting] = useState<boolean>(false);
    const API_BASE_URL = import.meta.env.VITE_API_URL;
    const addMovie = async (formData: FormData) => {
        try {
            setIsExecuting(true);
            const {
                data,
                status,
                statusText
            } = await axios.postForm(`${API_BASE_URL}/api/movie/create`,
                formData,
                {
                    timeout: 3000
                });

            if (status < 200 || status >= 300) {
                console.error("Error while creating a movie", statusText);
                return;
            }
        }
        catch (e: unknown) {
            console.error("Error while creating a movie", (e as Error).message);
        }
        finally {
            setIsExecuting(false);
        }
    }

    const deleteMovie = async (id: string) => {
        try {
            const {
                data,
                status,
                statusText
            } = await axios.delete<boolean>(`/api/movie/${id}`);

            if (status < 200 || status >= 300) {
                console.error("Error while creating a movie", statusText);
                return false;
            }
            return data;
        }
        catch (e: unknown) {
            console.error("Error while creating a movie", (e as Error).message);
            return false;
        }
        finally {
            setIsExecuting(false);
        }
    }

    return {
        addMovie,
        deleteMovie,
        isExecuting
    } as const;
}