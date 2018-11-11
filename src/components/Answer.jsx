import React from "react";

const Answers = (props) => {

  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i)=>
      <span className="btn" key={i} onClick={() => props.unselectNumber(number)}>{number}</span>)}
    </div>
  )
}

export default Answers;