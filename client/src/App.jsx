import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Track from "./pages/Track";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddCourier from "./pages/AddCourier";
import EditCourier from "./pages/EditCourier";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track" element={<Track />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add" element={<AddCourier />} />
      <Route path="/edit/:id" element={<EditCourier />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;