import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
