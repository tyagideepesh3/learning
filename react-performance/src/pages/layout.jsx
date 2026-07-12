import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
         <nav>
          <Link to="/">Home</Link> | <Link to="/admin">Admin</Link> |{" "}
          <Link to="/virtual-list">Virtual List</Link>
        </nav>
        <Outlet />
        </>
    )
}