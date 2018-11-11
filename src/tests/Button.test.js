import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Button from '../../src/components/Button';

let mountedForm, props, wrapper;
let NumbersList = {
  list : []
}
const checkAnswer = jest.fn();
const acceptAnswer = jest.fn();
const redraw = jest.fn();
const redraws = true;
let answerIsCorrect = true;
const selectedNumbers = []


const getComponent = () => {
  if (!mountedForm) {
    props = {
      answerIsCorrect,
      acceptAnswer,
      checkAnswer,
      selectedNumbers,
      redraw,
      redraws
    };
    mountedForm = shallow(<Button {...props} />);
  }
  return mountedForm;
};

describe('Button Component', () => {
  beforeEach(() => {});


  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('br').length).toBe(2);
    expect(wrapper.find('button').length).toBe(2);
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    wrapper.setProps({ answerIsCorrect: false });
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('br').length).toBe(2);
    expect(wrapper.find('button').length).toBe(2);
  });
});
