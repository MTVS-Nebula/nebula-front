import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import Layout from "./Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
