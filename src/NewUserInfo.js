import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

export default function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userId, serUserId] = useState(1);
  const userChange = (event) => {
    serUserId(event.target.value);
  };
  useEffect(() => {
    console.log("useEffect runs");
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
    return () => {
      console.log("clean up.");
    };
  }, [userId]);

  return (
    <div className="user">
      User Info:
      <input type="text" value={userId} onChange={userChange} />
      <br />
      Name: {user.name}
      <br />
      email:{user.email}
    </div>
  );
}
