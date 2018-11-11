import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Game from '../../src/components/Game';

let mountedForm, props, wrapper, randomNo;
const doneStatus = true
const selectNumber = jest.fn();
const unselectNumber = jest.fn();
const checkAnswer = jest.fn();
const acceptAnswer = jest.fn();
const redraw = jest.fn();
const possibleSolutions = jest.fn(5, 2);
const possibleCombinationSum = jest.fn();
const updateDoneStatus = jest.fn();
const resetGame = jest.fn();
const arr = []

const getComponent = () => {
  if (!mountedForm) {
    props = {
      resetGame,
      doneStatus
    };
    mountedForm = shallow(<Game {...props} />);
  }
  return mountedForm;
};

describe('Game Component', () => {
  beforeAll(() => {
    wrapper = getComponent();
    randomNo = wrapper.state("randomNumberOfStars")
  });

  it('renders component successfully', () => {
    
    // expect(wrapper).toMatchSnapshot();
    
  });
  it('renders component successfully', () => {
    wrapper = getComponent();

    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('hr').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('Button').length).toBe(1);
    expect(wrapper.find('Stars').length).toBe(1);
  });
  it('should have a method that handles selectNumber', () => {
    expect(wrapper.instance().selectNumber).toBeDefined();
  });
  it('should have a method that handles unselectNumber', () => {
    expect(wrapper.instance().unselectNumber).toBeDefined();
  });
  it('should have a method that handles checkAnswer', () => {
    expect(wrapper.instance().checkAnswer).toBeDefined();
  });
  it('should have a method that handles acceptAnswer', () => {
    expect(wrapper.instance().acceptAnswer).toBeDefined();
  });
  it('should have a method that handles redraw', () => {
    expect(wrapper.instance().redraw).toBeDefined();
  });
  it('should have a method that handles possibleSolutions', () => {
    expect(wrapper.instance().possibleSolutions).toBeDefined();
  });
  it('should have a method that handles possibleCombinationSum', () => {
    expect(wrapper.instance().possibleCombinationSum).toBeDefined();
  });
  it('should have a method that handles updateDoneStatus', () => {
    expect(wrapper.instance().updateDoneStatus).toBeDefined();
  });
  it('should have a method that handles resetGame', () => {
    expect(wrapper.instance().resetGame).toBeDefined();
  });
  it('testing selectNumber function', () => {
    wrapper = getComponent();
    wrapper.instance().selectNumber();
    expect(wrapper.state().answerIsCorrect).toEqual(null);
    expect(wrapper.state().selectedNumbers).toEqual([undefined]);
  });
  it('testing selectNumber function', () => {
    wrapper = getComponent();
    wrapper.instance().selectNumber();
    expect(wrapper.state().answerIsCorrect).toEqual(null);
    expect(wrapper.state().selectedNumbers).toEqual([undefined]);
  });
  it('testing unselectNumber function', () => {
    wrapper = getComponent();
    wrapper.instance().unselectNumber();
    expect(wrapper.state().answerIsCorrect).toEqual(null);
    expect(wrapper.state().selectedNumbers).toEqual([]);
  });
  it('testing checkAnswer function', () => {
    wrapper = getComponent();
    wrapper.instance().checkAnswer();
    expect(wrapper.state().answerIsCorrect).toEqual(false);
  });
  it('testing acceptAnswer function', () => {
    wrapper = getComponent();
    wrapper.instance().acceptAnswer();
    expect(wrapper.state().usedNumbers).toEqual([]);
    expect(possibleSolutions.mock.calls.length).toBe(0);
    expect(wrapper.state().answerIsCorrect).toEqual(null);
  });
  it('testing redraw function', () => {
    wrapper = getComponent();
    wrapper.instance().redraw();
    expect(wrapper.state().selectedNumbers).toEqual([]);
    expect(wrapper.state().answerIsCorrect).toEqual(null);
  });
  it('testing updateDoneStatus function', () => {
    wrapper = getComponent();
    wrapper.instance().updateDoneStatus();
    expect(wrapper.state().doneStatus).toEqual(null);
  });
  it('testing redraw function', () => {
    wrapper = getComponent();

    wrapper.instance().redraw();
    wrapper.instance().redraw();
    wrapper.instance().redraw();
    wrapper.instance().redraw();
    wrapper.instance().redraw();
    expect(wrapper.state().selectedNumbers).toEqual([]);
    expect(wrapper.state().answerIsCorrect).toEqual(null);
  });
  it('testing possibleSolutions function', () => {
    wrapper = getComponent();
    let params = {
      numberOfStars : 4,
      usedNumbers : []
    }
    wrapper.instance().possibleSolutions(params);
    expect(wrapper.state().selectedNumbers).toEqual([]);
  });
  it('testing possibleCombinationSum function', () => {
    wrapper = getComponent();
    let arr = []
    let n;
    wrapper.instance().possibleCombinationSum(arr, n);
    expect(wrapper.state().selectedNumbers).toEqual([]);
    expect(wrapper.state().answerIsCorrect).toEqual(null);
  });
  it('testing possibleCombinationSum function', () => {
    wrapper = getComponent();
    let arr = [4,5,6]
    let n = 2;
    wrapper.instance().possibleCombinationSum(arr, n);
    expect(wrapper.state().selectedNumbers).toEqual([]);
    expect(wrapper.state().answerIsCorrect).toEqual(null);
  });
  it('testing possibleCombinationSum function', () => {
    wrapper = getComponent();
    let arr = [4,5,6,7,8]
    let n = 12;
    wrapper.instance().possibleCombinationSum(arr, n);
    expect(wrapper.state().selectedNumbers).toEqual([]);
    expect(wrapper.state().answerIsCorrect).toEqual(null);
  });
  it('testing possibleCombinationSum function', () => {
    wrapper = getComponent();
    let arr = [4,5,6,7,13]
    let n = 12;
    wrapper.instance().possibleCombinationSum(arr, n);
    expect(wrapper.state().selectedNumbers).toEqual([]);
    expect(wrapper.state().answerIsCorrect).toEqual(null);
  });
  it('testing updateDoneStatus function', () => {
    wrapper = getComponent();
    wrapper.instance().updateDoneStatus();
    expect(wrapper.state().doneStatus).toEqual("Game Over!!");
  });
  it('testing resetGame function', () => {
    wrapper = getComponent();
    wrapper.instance().resetGame();
    expect(wrapper.state().doneStatus).toEqual(null);
  });
});
