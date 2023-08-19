import "./App.css";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const user = localStorage.getItem("user");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
          {user && <Route path="/" element={<MainPage />} />}
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
