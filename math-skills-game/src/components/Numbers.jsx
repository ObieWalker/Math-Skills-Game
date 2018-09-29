import React from "react";
import _ from 'lodash';

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }
  
  return (
    <div className="row col-6 col-md-offset-4 card text-center">
      {Numbers.list.map((number, i) =>
      <span key={i} className={numberClassName(number)}
      onClick={()=> props.selectNumber(number)}>{number}</span>)}
    </div>
  );
};


Numbers.list = _.range(1, 10);

export default Numbers;