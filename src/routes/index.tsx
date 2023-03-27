import { Routes, Route, Navigate } from "react-router-dom";
import Register from "";
import Login from "";
import Home from "../pages/Homepage";
import ProtectedRoutes from "";

const RoutesMain = () => (
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
);
export default RoutesMain;
