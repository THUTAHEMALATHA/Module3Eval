import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UpdatePage from "./pages/UpdatePage";
import PrivateRoute from "./components/PrivateRoute";


function App(){
  return(
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/login" element={Login} />
        <Route path="/customers/dashboard" element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>} />
        <Route path="/update/:id" element={<PrivateRoute>
          <UpdatePage/>
        </PrivateRoute>} />

      </Routes>
    </div>
  );
}
export default App;