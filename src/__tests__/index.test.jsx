import React from 'react';
import { shallow } from 'enzyme';

import TaggleInput from '../index.jsx';

const data = {
  tags: ['react', 'taggle'],
  placeholder: 'Enter Keywords',
  duplicateIndex: 1,
  readOnly: true
};


let wrapper;
let input;
let ul;

beforeEach(() => {
  wrapper = shallow(<TaggleInput />);
  input = wrapper.find('input');
  ul = wrapper.find('ul');
});

describe('TaggleInput Component', () => {
  it('should display only the input tag with default placeholder text - Enter the tags', () => {
    expect(input).toBeDefined();
    expect(input.props().placeholder).toBe('Enter the tags');
    expect(ul.children()).toHaveLength(1);
  });
  it('should display tags passed as props and input tag with placeholder text - Enter Keywords', () => {
    wrapper.setProps({ placeholder: data.placeholder });
    wrapper.setState({ tags: data.tags });
    input = wrapper.find('input');
    ul = wrapper.find('ul');
    expect(ul.children()).toHaveLength(3);
    expect(ul.children('.taggle')).toHaveLength(data.tags.length);
    expect(input.props().placeholder).toBe(data.placeholder);
  });
  it('should display tag with default duplicateTag classname based on duplicateIndex in state', () => {
    wrapper.setState({ tags: data.tags, duplicateIndex: data.duplicateIndex });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(2);
    expect(ul.children('.taggle').at(data.duplicateIndex).props().className).toBe('taggle bounce');
    expect(ul.children('.taggle').at(0).props().className).toBe('taggle ');
    wrapper.setState({ duplicateIndex: 0 });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle').at(0).props().className).toBe('taggle bounce');
    expect(ul.children('.taggle').at(1).props().className).toBe('taggle ');
  });
  it('should display tag in ready-only mode without input and close button', () => {
    wrapper.setProps({ readOnly: data.readOnly });
    wrapper.setState({ tags: data.tags });
    ul = wrapper.find('ul');
    expect(ul.children()).toHaveLength(2);
    expect(wrapper.exists('.close')).toBeFalsy();
    expect(wrapper.exists('input')).toBeFalsy();
  });
});
