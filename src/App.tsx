import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/AppNav/components/LoginPage/LoginPage";
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
