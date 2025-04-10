import React from "react";
import Navbar from '../components/navbar';
import About from '../components/about';
import Mission from '../components/mission';
import Services from '../components/services';
import Team from '../components/team';
import '/Users/aseelhamayel/Documents/react/landingPage/landingpage/src/landingPageStyle.css';


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="services">
          <Services />
        </section>

        <section id="team">
          <Team />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;