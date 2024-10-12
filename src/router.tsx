import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { NotFoundPage } from "./pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
