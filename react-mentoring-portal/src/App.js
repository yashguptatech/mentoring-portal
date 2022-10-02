import React from "react"
import Projects from "./components/Projects"
import img1 from "./images/img1.png"
function App() {
  return (
    <div className=" gap-8 bg-gray-300 min-h-screen p-16">
      <nobr><h1 className="text-5xl text-center  font-bold ">COMPUTER SCIENCE AND ENGINEERING - PROJECTS</h1></nobr> 
        <div>
          <img className="pt-20" src={img1} alt="Image not found"/>
        </div>
        <div className="grid grid-rows gap-8 min-h-screen pt-28 p-16">
         
          <Projects 
                  title="SMART HOME"
                  subtitle=" this is it"
                  link="./index.js"
              />
          <Projects 
                  title="CYBER STALKING"
                  subtitle=" this is it"
              />
          <Projects 
                  title="FITNESS APP FOR HEALTH MANAGEMENT"
                  subtitle=" this is it"
              />
          <Projects 
                  title="CNC MACHINE HANDLING"
                  subtitle=" this is it"
              />
        </div>

    </div>

  );
}

export default App;
