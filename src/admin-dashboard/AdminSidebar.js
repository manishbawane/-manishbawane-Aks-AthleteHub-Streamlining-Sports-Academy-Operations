import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/AdminSidebar.css"; // Optional, for styling

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3>Admin Dashboard</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin-dashboard/manage-users" className="sidebar-link">
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/manage-trainers" className="sidebar-link">
              Manage Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin-dashboard/manage-courses" className="sidebar-link">
              Manage Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
