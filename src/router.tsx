import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/main";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default Router;
