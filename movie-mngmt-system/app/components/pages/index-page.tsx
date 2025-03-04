import React, { useMemo, useState } from 'react'
import type { MovieDto } from '~/models/movie'
import { MoviesTable } from '../tables/movies-table'
import { Button, Popconfirm, type TableProps } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { useMoviesApi } from '~/hooks/useMoviesApi'

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
