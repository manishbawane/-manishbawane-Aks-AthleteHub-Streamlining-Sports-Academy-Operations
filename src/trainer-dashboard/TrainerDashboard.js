import React, { useEffect, useState } from "react";
import TrainerSidebar from "../trainer-dashboard/TrainerSidebar";
import "../styles/TrainerDashboard.css";

const TrainerDashboard = () => {
  const [trainerData, setTrainerData] = useState(null);
  
  useEffect(() => {
    const trainerEmail = localStorage.getItem("trainerEmail");
    const trainers = JSON.parse(localStorage.getItem("trainers")) || [];
    const loggedInTrainer = trainers.find(trainer => trainer.email === trainerEmail);

    if (!loggedInTrainer) {
      window.location.href = "/login"; // Redirect if not logged in
    } else {
      setTrainerData(loggedInTrainer);
    }
  }, []);

  return (
    <div className="trainer-dashboard">
      <TrainerSidebar />
      <div className="container">
        {trainerData ? (
          <div className="profile">
            <h2>Welcome {trainerData.name}</h2>
            {/* Render trainer content */}
            <div className="manage-students">
              <h3>Your Students</h3>
              {/* Display students */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TrainerDashboard;
