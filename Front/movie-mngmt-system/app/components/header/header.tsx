import { Button } from 'antd'
import { LinkButton } from '../link-button'
import { CaretLeftOutlined, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

export const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className='sticky w-full flex h-16 bg-zinc-800 dark:bg-black'>
      <div className='w-full flex justify-between items-center mx-2'>
        <Button
          onClick={() => navigate(-1)}
          shape='circle'
          icon={
            <CaretLeftOutlined />
          }
        />
        <div className='flex gap-2'>
          <LinkButton
            to={"/"}>
            <UnorderedListOutlined
              className='mr-1' />
            See all
          </LinkButton>
          <LinkButton to={"/movie/add"}>
            <PlusOutlined
              className='mr-1'
            />
            Add a Movie
          </LinkButton>
        </div>
      </div>
    </nav>
  )
}
