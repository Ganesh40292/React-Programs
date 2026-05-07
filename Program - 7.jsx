1)App.jsx

import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <ProfileCard
        name="Preethi M"
        bio="Hello dear students, I hope you have finished executing today’s lab program. Please do not waste time, complete your record book and submit it on my table by Monday."
        image="https://sode-edu.in/smvitm/wp-content/uploads/2024/01/KMB_7084.jpg"
        bgColor="#e6f2ff"
      />
    </div>
  );
}

export default App;

2)ProfileCard.jsx

import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, bio, image, bgColor }) => {
  const cardStyle = {
    backgroundColor: bgColor,
    textAlign: "center",
    padding: "20px"
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={image} alt={name} className="profile-img" />

      <h2>{name}</h2>

      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;

3)ProfileCard.css

.card {
  width: 300px;
  margin: 100px auto;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
}

h2 {
  color: #333;
}

p {
  color: #555;
  font-size: 14px;
}
