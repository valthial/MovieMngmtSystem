import { Button, type ButtonProps } from 'antd';
import { Link, type LinkProps } from 'react-router';

export const LinkButton = (
    {
        children,
        to
    }: {
    } & ButtonProps & LinkProps
) => {
    return (
        <Button>
            <Link
                to={to}>
                {children}
            </Link>
        </Button>
    )
}
