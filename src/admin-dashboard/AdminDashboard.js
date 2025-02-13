import React, { useEffect, useState } from "react";
import AdminSidebar from "../admin-dashboard/AdminSidebar";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  
  useEffect(() => {
    const adminEmail = localStorage.getItem("adminEmail");
    const admin = localStorage.getItem("adminEmail");

    if (adminEmail !== admin) {
      window.location.href = "/login"; // Redirect if not logged in
    } else {
      setAdminData({ email: adminEmail });
    }
  }, []);

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="container">
        {adminData ? (
          <div className="profile">
            <h2>Welcome Admin</h2>
            {/* Render admin content */}
            <div className="manage-users">
              <h3>Manage Users</h3>
              {/* Display user data */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
