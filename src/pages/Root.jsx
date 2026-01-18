import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import PixelLoader from "../components/pixelLoadingScreen";
import FallingLeaves from "../components/FallingLeaves";

function RootLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // loader duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PixelLoader show={loading} />

      {!loading && (
        <>
          <MainNavigation />
          <main>
            <FallingLeaves />
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}

export default RootLayout;
