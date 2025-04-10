import React from "react";
import {useNavigate} from "react-router-dom";



const Home = () => {
const navigate = useNavigate();

const navigateToLanding = () =>{
  navigate('/landing');
};

return(

  <div className="container">
    <h1>Welcome to Our Site</h1>
    <p>This is a simple webpage with a background image and some styled text. The button bellow can navigate</p>
    <button onClick={navigateToLanding}>Let's get started</button>
  </div>
);
};

export default Home;