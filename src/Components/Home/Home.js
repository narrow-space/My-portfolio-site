import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contactme/Contact";
import Menubar from "../Menubar/Menubar";
import Newprojects from "../NewProjects/Newprojects";
import Services from "../Services/Services";

function Home() {
  return (
    <div style={{"background":" #18181d"}}>
      <Menubar></Menubar>
      <Banner></Banner>
      <Services></Services>
      <Newprojects></Newprojects>
      <Contact></Contact>
    </div>
  );
}

export default Home;
