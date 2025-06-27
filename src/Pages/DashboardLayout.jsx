import { Outlet } from 'react-router'
import Sidebar from '../components/Dashboard/Sidebar'

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex bg-white'>
            {/* Left Side: Sidebar Component */}
            <Sidebar></Sidebar>
            {/* Right Side: Dashboard Dynamic Content */}
            <div className='flex-1 md:ml-64 p-4 bg-base-100 min-h-screen'>
                
                    {/* Outlet for dynamic contents */}
                    <Outlet />
                
            </div>
        </div>
    )
}

export default DashboardLayout
