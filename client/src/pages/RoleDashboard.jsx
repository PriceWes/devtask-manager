import { getUserRole } from "../utils/auth";
import AdminDashboard from "./AdminDashboard";
import DeveloperDashboard from "./Dashboard";
import { Navigate } from "react-router-dom";

export default function RoleDashboard() {
    const userRole = getUserRole();

    //if role not found redirect to login
    switch (userRole) {
        case 'admin':
            return <AdminDashboard />;
        case 'developer':
            return <DeveloperDashboard />;
        default:
            // if role not found, redirect to login
            return <Navigate to="/login" replace />;
    }
}