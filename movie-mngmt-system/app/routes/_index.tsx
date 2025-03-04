import { IndexPage } from "~/components/pages/index-page.js";
import type { Route } from "./+types/_index";
import { getMovies } from "~/repositories/api";
import type { MovieDto } from "~/models/movie";
import { MovieLoader } from "~/components/loaders/movies-loader";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
  const movies = await getMovies();
  return movies;
}

export function HydrateFallback() {
  return <MovieLoader />;
}

export default function Home(
    {
      loaderData
    }: {
      loaderData: Route.ClientLoaderArgs
    }) {
  console.dir(loaderData);
  const movies = (loaderData as unknown) as MovieDto[];
  return (
      <IndexPage movies={movies} />
  );
}
