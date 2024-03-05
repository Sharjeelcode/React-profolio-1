
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Sider from './components/Sider'

function Layout() {
    return (
        <>
            <Header />
            <div className='flex'>
                <Sider />
                <Outlet />
            </div>
        </>
    )
}

export default Layout