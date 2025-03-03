import {Table, type TableProps } from 'antd'
import {useMemo, useState } from 'react'
import type { MovieDto } from '~/models/movie'

// https://ant.design/components/table#table-demo-edit-row
export const MoviesTable = (
  {
    movies
  }: {
    movies: MovieDto[]
  }
) => {
    const [data, setData] = useState<MovieDto[]>(movies);
    
    const cols = useMemo<TableProps<MovieDto>['columns']>(() => {
        return [
            {
            title: "Id",
            dataIndex: 'id',
            },
            {
            title: "User Id",
            dataIndex: 'userId',
            },
            {
            title: "Title",
            dataIndex: 'title',
            },
            {
            title: "Body",
            dataIndex: 'body',
            }
        ]
    }, [movies]);
    
    return (
        <div className='w-full h-full flex justify-center items-center'>
        <Table<MovieDto>
            className='flex w-4/5'
            sticky
            virtual
            columns={cols}
            rowKey='id'
            dataSource={data}
        />
        </div>
    )
}
