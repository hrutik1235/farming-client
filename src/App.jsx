import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import { useEffect } from "react";
import Protected from "./components/Protected";
import Home from "./screens/home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Protected />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
