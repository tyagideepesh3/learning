import "./App.css";
import { LongList } from "./longList/LongList";
import { VirtualList } from "./virtualList/VirtualList";
import { Link, Outlet, RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeContext, ThemeProvider, THEMES } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}>
          <nav>
            <Link to="/">Home</Link> | <Link to="/admin">Admin</Link> |{" "}
            <Link to="/virtual-list">Virtual List</Link>
          </nav>
        </RouterProvider>
      </ThemeProvider>

    </>
  );
}

export default App;
