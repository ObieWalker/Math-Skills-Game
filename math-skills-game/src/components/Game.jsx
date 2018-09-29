import React, { Component } from "react";
import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Numbers from "./Numbers";
import DoneFrame from "./DoneFrame";

class Game extends Component {
  static randomNumber = () => 1 + Math.floor(Math.random()*9);

  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null
  })

  state = {
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null
  };
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0
    || this.state.usedNumbers.includes(clickedNumber)){
      return;
    }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number =>
      number !== clickedNumber)
    }));
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars === 
      prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
    }), () => this.updateDoneStatus);
  }

  redraw = () => {
    if (this.state.redraws === 0 ) {return;}
    this.setState(prevState => ({
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }), () => this.updateDoneStatus);
  }

  possibleSolutions = ({ numberOfStars, usedNumbers }) => {
    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
      number => usedNumbers.indexOf(number) === -1
    );

    return this.possibleCombinationSum(possibleNumbers, numberOfStars);
  };

  possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) {
      return true;
    }
    if (arr[0] > n) {
      return false;
    }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleCombinationSum(arr, n);
    }
    let listSize = arr.length,
      combinationsCount = 1 << listSize;
    for (let i = 1; i < combinationsCount; i++) {
      let combinationSum = 0;
      for (let j = 0; j < listSize; j++) {
        if (i & (1 << j)) {
          combinationSum += arr[j];
        }
      }
      if (n === combinationSum) {
        return true;
      }
    }
    return false;
  };

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: "Congratulations!!!" };
      }

      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: "Game Over!!" };
      }
    });
  };

  resetGame = () => {
    this.setState(Game.initialState())
  }

  render() {
    const { 
      selectedNumbers,
      randomNumberOfStars,
      answerIsCorrect,
      usedNumbers,
      redraws,
      doneStatus } = this.state

    return (
      <div >
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars}/>
          <Button selectedNumbers={selectedNumbers}
                  redraws={redraws}
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect}
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}/>
          <Answer selectedNumbers={selectedNumbers}
                  unselectNumber={this.unselectNumber}/>
        </div>
        <br />
        {doneStatus ? 
        <DoneFrame doneStatus={doneStatus}
                    resetGame={this.resetGame}/> :
        <Numbers selectedNumbers={selectedNumbers}
                selectNumber={this.selectNumber}
                usedNumbers={usedNumbers}/>
        }
      </div>
    );
  }
}

export default Game;