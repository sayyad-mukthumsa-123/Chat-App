import React, { useState, useEffect } from "react";
import Logout from "../components/Logout"
import "../Styles/Welcome.css";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const user = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      setUserName(user.username);
    };

    fetchUserName();
  }, []);

  return (
    <div className="wel-container">
      <div className="logout-container">
        <div className="logout-wel">
          <Logout />
        </div>
      </div>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, <span id="user">{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </div>
  );
}
