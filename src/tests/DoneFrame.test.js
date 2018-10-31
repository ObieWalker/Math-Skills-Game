import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import DoneFrame from '../../src/components/DoneFrame';

let mountedForm, props, wrapper;
const resetGame = jest.fn();
const doneStatus = true


const getComponent = () => {
  if (!mountedForm) {
    props = {
      resetGame,
      doneStatus
    };
    mountedForm = shallow(<DoneFrame {...props} />);
  }
  return mountedForm;
};

describe('DoneFrame Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('div').length).toBe(1);
  });
});
