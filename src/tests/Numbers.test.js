import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Numbers from '../../src/components/Numbers';

let mountedForm, props, wrapper;
let NumbersList = {
  list : []
}
const selectNumber = jest.fn();
const selectedNumbers = [];
const numberClassName = jest.fn();
const usedNumbers = [];
const getComponent = () => {
  if (!mountedForm) {
    props = {
      selectNumber,
      usedNumbers,
      selectedNumbers
    };
    mountedForm = shallow(<Numbers {...props} />);
  }
  return mountedForm;
};

describe('Numbers Component', () => {
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
