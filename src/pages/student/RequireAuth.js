import { Navigate, Outlet } from "react-router-dom";


const RequireAuth = () => {
    const token = localStorage.getItem('token')
    
    console.log(token)
    return (
        <div>
        { token
    ? <Outlet />
    : 
    
    <Navigate to="/login-page" replace />
}
    </div>
    )
    
}
export default RequireAuth