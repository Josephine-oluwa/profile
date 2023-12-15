import { Outlet } from 'react-router-dom'
import Header from '../common/Header'

const Layout = () => {
  return (
    <div>
    
    <Outlet/>
    </div>
  )
}

export default Layout