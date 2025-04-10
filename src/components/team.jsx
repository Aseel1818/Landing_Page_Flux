import React from "react";

const Team = () =>{
  return (
    <div>
      <h2>Meet Our Team</h2>
      <div className="team-member">
        <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="Team member 1"></img>
        <h3>John Doe</h3>
        <p>Lead Developer</p>
      </div>
      <div className="team-member">
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="Team member 2"></img>
        <h3>Jane Smith</h3>
        <p>QA Developer</p>
      </div>
    </div>
  );
};

export default Team;