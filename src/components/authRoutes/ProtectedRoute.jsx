import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const ProtectedRoute = () => {
    const [auth, setAuth] = React.useState(localStorage.getItem('token') || false)
    
    useEffect(() => {
        setAuth(localStorage.getItem('token'))
    }, [localStorage.getItem('token')])

    return (
        <div>
            {
                auth ?
                    <Sidebar  >
                        <Outlet />
                    </Sidebar>
                    : <Navigate to="/login" />
            }

        </div>
    )
}

export default ProtectedRoute