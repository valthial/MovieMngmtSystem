import type { MovieDto } from '~/models/movie'
import { MoviesTable } from '../tables/movies-table'

export const IndexPage = (
  {
    movies
  }: {
    movies?: MovieDto[]
  }
) => {
  return (
    <main className='w-full h-[90vh] flex justify-center items-center'>
      <MoviesTable
        movies={movies ?? []} />
    </main>
  )
}
