import { lazy, Suspense, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext, THEMES } from "../ThemeContext";

export const Home = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const theme = useContext(ThemeContext);
  const Admin = lazy(async () => {
    const module = await import("./admin");
    return {
      default: module.Admin,
    }
  });
  return (
    <>
      <h2>Home Page</h2>
      current theme is: {theme.theme}
      <button onClick={()=> theme.setTheme(THEMES.DARK)}> change theme </button>
      <button onClick={() => setShowAdmin(!showAdmin)}>
        {showAdmin ? "Hide" : "Show"} Admin Panel Here
      </button>
      {showAdmin && (
        <Suspense fallback={<div>Loading Admin Panel...</div>}>
          <Admin />
        </Suspense>
      )}
    </>
  );
};
