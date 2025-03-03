import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Layout = () => {
  return (
    <div className="drawer">
    <input id="drawer-input" type="checkbox" className="drawer-toggle" />
    <div className="bg-base-100 text-base-content min-h-screen drawer-content">
      <Nav />
      <Outlet />
    </div>
  </div>
  )
}

export default Layout
