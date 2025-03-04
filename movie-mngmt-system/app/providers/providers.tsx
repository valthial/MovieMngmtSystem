import { ConfigProvider } from 'antd'
import React, { type ReactNode } from 'react'
import { useNavigation } from 'react-router';

export const Providers = (
    {
        children
    }: {
        children: ReactNode
    }
) => {
    const { location } = useNavigation();
    const isTransitioning = Boolean(location);

    return (
        <>
            {
                isTransitioning ?
                    <div>loading</div> :
                    <>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#353637',
                                    borderRadius: 8,
                                }
                            }}
                        >
                            {children}
                        </ConfigProvider>
                    </>
            }
        </>
    )
}
