import { Route, Routes, useLocation } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { RestuarantPage } from "./pages/Restuarant/RestuarantPage";
import { useLayoutEffect } from "react";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/r/:id" element={<RestuarantPage />} />
      </Routes>
    </>
  );
}

export default App;
