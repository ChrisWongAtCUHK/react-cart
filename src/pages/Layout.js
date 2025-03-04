import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Layout = () => {
  return (
    <>
      <Nav />
      <div className='mt-28'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
