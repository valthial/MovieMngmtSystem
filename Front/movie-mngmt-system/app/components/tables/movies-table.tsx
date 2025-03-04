import { DeleteOutlined } from '@ant-design/icons'
import { Button, Popconfirm, Table, type TableProps } from 'antd'
import React, { useCallback, useMemo, useState, type Key } from 'react'
import { data } from 'react-router'
import type { MovieDto } from '~/models/movie'
import { useMoviesApi } from '~/hooks/useMoviesApi'

export const MoviesTable = (
    {
        movies
    }: {
        // movies: MovieDto[]
        movies: MovieDto[]
    }
) => {
    const { deleteMovie, isExecuting } = useMoviesApi();
    const [data, setData] = useState<MovieDto[]>(movies);
    const onDeleteConfirmed = useCallback(async (id: string) => {
        const deleted = await deleteMovie(id);
        if (!deleted) return;

        const newData = [...data].filter(x => x.id !== id);
        console.debug("Succefully deleted row with id:", id);
        console.dir("Rows", newData);
        setData(newData);
    }, [data]);
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
            },
            {
                title: "",
                dataIndex: "delete",
                render: (_, record) => {
                    return (
                        <div className='flex justify-center items-center w-full h-full'>
                            <Popconfirm
                                title="You're about to delete a movie"
                                description="Are you sure?"
                                onConfirm={async () => await onDeleteConfirmed(record.id)}
                                cancelText="No"
                                okText="Yes">
                                <Button
                                    icon={<DeleteOutlined />}
                                    danger>
                                    Delete
                                </Button>
                            </Popconfirm>
                        </div>
                    )
                }
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
