import React, { useEffect, useState } from "react";
import UserSidebar from "../user-dashboard/UserSidebar";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find(user => user.email === userEmail);

    if (!loggedInUser) {
      window.location.href = "/login"; // Redirect if not logged in
    } else {
      setUserData(loggedInUser);
    }
  }, []);

  return (
    <div className="user-dashboard">
      <UserSidebar />
      <div className="container">
        {userData ? (
          <div className="profile">
            <h2>Welcome {userData.name}</h2>
            {/* Render user content */}
            <div className="my-courses">
              <h3>Your Courses</h3>
              {/* Display courses */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
