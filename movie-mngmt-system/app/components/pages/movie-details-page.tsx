import { Card, Descriptions, Popover } from 'antd'
import React from 'react'
import type { MovieDto } from '~/models/movie'

export const MovieDetailsPage = (
    {
        movie
    }: {
        movie?: MovieDto
    }
) => {
    const title = movie?.title ?? "Uknown title";

    return (
        <main className='w-full h-[90vh] flex justify-center items-center'>
            <Card className='w-1/2 max-h-2/3 h-full'>
                <Descriptions
                    column={1}
                    bordered
                    title={
                        title.length >= 20 ?
                            <Popover
                                className='select-none'
                                trigger='hover'
                                title={title}>
                                {title}
                            </Popover> :
                            <span>
                {title}
              </span>
                    }>

                    <Descriptions.Item
                        label="Id">
                        {movie?.id}
                    </Descriptions.Item>

                    <Descriptions.Item
                        label="User Id">
                        {movie?.userId}
                    </Descriptions.Item>

                    <Descriptions.Item
                        label="Body">
                        {movie?.body}
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </main>
    )
}
