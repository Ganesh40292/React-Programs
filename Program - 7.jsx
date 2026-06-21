1)App.jsx

import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <ProfileCard
        name="Ganesh Prasad"
        bio="Welcome to my profile page"
        image="https://www.wallsnapy.com/img_gallery/monkey-d-luffy-anime-face-closeup-4k-wallpaper-630237.jpg"
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
