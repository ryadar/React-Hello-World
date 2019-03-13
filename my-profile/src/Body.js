import React from "react"
import "./body.css"

function Body(props){

  return <div className="Body-Text-Center">
   <p>Name : {props.name}</p>
   <p>Designation:{props.designation}</p>
   <p>Skills: {props.skills}</p>
   <p> Phone Number {props.phone}</p>
   <p> About Me : {props.about}</p>

  </div>

}

export default Body