import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import _ from 'lodash';
import NumbersComponent from '../../src/components/Numbers';

let mountedForm, props, wrapper;
let NumbersList = {
  list : [1,2,3]
}
let Numbers = {
  list : [1,2,3,4,5,6,7,8,9]
}
const selectNumber = jest.fn();
const selectedNumbers = [1,2,3,4];
const numberClassName = jest.fn();
const usedNumbers = [1,2,3];

const getComponent = () => {
  if (!mountedForm) {
    props = {
      selectNumber,
      usedNumbers,
      selectedNumbers
    };
    mountedForm = shallow(<NumbersComponent {...props} />);
  }
  return mountedForm;
};

describe('Numbers Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('testing numberClassName function', () => {
    wrapper = getComponent();
    wrapper.props().numberClassName;
  });
  it('should click on numbers button', () => {
    wrapper = getComponent();
    wrapper
    .find('.used')
    .at(0)
    .simulate('click');
  });
});
