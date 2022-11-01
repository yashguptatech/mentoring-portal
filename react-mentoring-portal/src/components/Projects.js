import React from "react"

function Projects(props) {
    return (
        <>
        <a href={props.link}>
            <div  
            className=" rounded-lg shadow-lg bg-white transition duration-500 h-52 cursor-pointer
            hover:scale-110   p-16  ">
                    
                <h1 className="font-bold text-3xl text-black ">{props.title}</h1>
                <div className="info-group">
                    
                <p className="text-2xl">{props.subtitle}</p>
                    
            </div>
                
            </div>
           </a>
        </>
          )
}
export default Projects;

