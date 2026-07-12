import { lazy, Suspense, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const Admin = lazy(async () => {
    const module = await import("./admin");
    return {
      default: module.Admin,
    }
  });
  return (
    <>
      <h2>Home Page</h2>
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
