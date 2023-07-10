import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    const [auth, setAuth] = React.useState(localStorage.getItem('token') || false)

    useEffect(() => {
        setAuth(localStorage.getItem('token'))
    }, [localStorage.getItem('token')])

    return (
        <div>
            {
                !auth ?
                        <Outlet />
                    : <Navigate to="/" />
            }

        </div>
    )
}

export default PublicRoute