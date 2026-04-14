import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import DashboardLayout from "./components/layout/DashboardLayout";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Users />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;