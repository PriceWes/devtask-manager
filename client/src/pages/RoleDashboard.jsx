import { getUserRole } from "../utils/auth";
import AdminDashboard from "./AdminDashboard";
import DeveloperDashboard from "./Dashboard";
import { Navigate } from "react-router-dom";

export default function RoleDashboard() {
    const userRole = getUserRole();

    //if role not found redirect to login
   if (!userRole){
    return <Navigate to="/login" replace />;
   }

   //render appropriate dashboard based on role
   switch (userRole) {
    case 'admin':
        return <AdminDashboard />
    case 'developer':
        return <DeveloperDashboard />;
    default:
        //if role not recognized return to login
        return <Navigate to="/login" replace />;
   }
}