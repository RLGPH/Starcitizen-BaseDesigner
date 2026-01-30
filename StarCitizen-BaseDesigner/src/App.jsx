import { BrowserRouter, Route, Routes } from "react-router-dom";
import Designer from "./pages/Designer";
import MainLayout from "./layouts/Mainlayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Designer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;