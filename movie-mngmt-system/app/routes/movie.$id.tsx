import React from 'react'
import { getMovieById } from '~/repositories/api'
import { MovieDetailsPage } from '~/components/pages/movie-details-page'
import type { MovieDto } from '~/models/movie'
import type { Route } from './+types/movie.$id'

export async function clientLoader({
   params
}: Route.ClientLoaderArgs
) {
    const movie = await getMovieById(params.id);
    return movie;
}

export default function Movies({
   loaderData: post
}: {
    loaderData: MovieDto
}) {
    return <MovieDetailsPage movie={post}/>
}
