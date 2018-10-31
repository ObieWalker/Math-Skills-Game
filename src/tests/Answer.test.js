import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Answer from '../../src/components/Answer';

let mountedForm, props, wrapper;
const unselectNumber = jest.fn();
const selectedNumbers = [66, 7]


const getComponent = () => {
  if (!mountedForm) {
    props = {
      unselectNumber,
      selectedNumbers
    };
    mountedForm = shallow(<Answer {...props} />);
  }
  return mountedForm;
};

describe('Answers Component', () => {
  beforeEach(() => {});

  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders component successfully', () => {
    wrapper = getComponent();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('span').length).toBe(2);
  });
});
