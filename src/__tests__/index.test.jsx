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
const onChangeHandler = jest.spyOn(TaggleInput.prototype, 'onChange');

beforeEach(() => {
  wrapper = shallow(<TaggleInput
    onBeforeTagAdd={() => {}}
    onAfterTagAdd={() => {}}
    onBeforeTagRemove={() => {}}
    onAfterTagRemove={() => {}}
    onInputBlur={() => {}}
    onInputChange={() => {}}
  />);
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
    expect(ul.children()).toHaveLength(data.tags.length + 1);
    expect(ul.children('.taggle')).toHaveLength(data.tags.length);
    expect(input.props().placeholder).toBe(data.placeholder);
  });
  it('should display tag with default duplicateTag classname based on duplicateIndex in state', () => {
    wrapper.setState({ tags: data.tags, duplicateIndex: data.duplicateIndex });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(data.tags.length);
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
    expect(ul.children()).toHaveLength(data.tags.length);
    expect(wrapper.exists('.close')).toBeFalsy();
    expect(wrapper.exists('input')).toBeFalsy();
  });
  it('should remove the tag when click event is raised on close button', () => {
    wrapper.setState({ tags: data.tags });
    ul = wrapper.find('ul');
    ul.children('.taggle').at(0).find('.close')
      .simulate('click');
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(data.tags.length - 1);
    expect(ul.children('.taggle').first().find('.taggle_text').text()).toBe(`${data.tags[1]}<CloseIcon />`);
  });
  it('should add the tag with value test', () => {
    expect(ul.children('.taggle')).toHaveLength(0);
    input.simulate('keyDown', { keyCode: 13, target: { value: 'test' } });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(1);
    expect(ul.children('.taggle').first().find('.taggle_text').text()).toBe('test<CloseIcon />');
  });
  it('should remove the tag by backspace keydown event', () => {
    wrapper.setState({ tags: data.tags });
    input = wrapper.find('input');
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(data.tags.length);
    input.simulate('keyDown', { keyCode: 8 });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(data.tags.length - 1);
    expect(ul.children('.taggle').first().find('.taggle_text').text()).toBe(`${data.tags[0]}<CloseIcon />`);
  });
  it('should not add the tag with value empty', () => {
    expect(ul.children('.taggle')).toHaveLength(0);
    input.simulate('keyDown', { keyCode: 13 });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(0);
  });
  it('should not remove the tag by backspace keydown event if input has value', () => {
    wrapper.setState({ tags: data.tags });
    input = wrapper.find('input');
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(data.tags.length);
    input.simulate('keyDown', { keyCode: 8, target: { value: 'test' } });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(data.tags.length);
  });
  it('should add tag on blur of input if the props the saveOnBlur is true', () => {
    wrapper.setProps({ saveOnBlur: true });
    input = wrapper.find('input');
    input.simulate('blur', { target: { value: 'test' } });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(1);
    expect(ul.children('.taggle').first().find('.taggle_text').text()).toBe('test<CloseIcon />');
  });
  it('should not add tag on blur of input if the props the saveOnBlur is false', () => {
    wrapper.setProps({ saveOnBlur: false });
    input = wrapper.find('input');
    input.simulate('blur', { target: { value: 'test' } });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle')).toHaveLength(0);
  });
  it('should not show the input to add tag if the maxtags and tags length are same or greater', () => {
    wrapper.setProps({ maxTags: data.tags.length });
    wrapper.setState({ tags: data.tags });
    ul = wrapper.find('ul');
    expect(ul.children()).toHaveLength(data.tags.length);
    expect(wrapper.exists('input')).toBeFalsy();
  });
  it('should add duplicate class name when we trying to add same tag by keydown event', () => {
    wrapper.setState({ tags: data.tags });
    ul = wrapper.find('ul');
    expect(wrapper.exists('ul.bounce')).toBeFalsy();
    input.simulate('keydown', { keyCode: 13, target: { value: data.tags[0] } });
    ul = wrapper.find('ul');
    expect(ul.children('.taggle').at(0).props().className).toBe('taggle bounce');
    expect(ul.children('.taggle').at(1).props().className).toBe('taggle ');
  });
  it('should not add duplicate class name when we trying to add same tag by keydown event if the allowDuplicates is true', () => {
    wrapper.setProps({ allowDuplicates: true });
    wrapper.setState({ tags: data.tags });
    ul = wrapper.find('ul');
    expect(wrapper.exists('ul.bounce')).toBeFalsy();
    input.simulate('keydown', { keyCode: 13, target: { value: data.tags[0] } });
    ul = wrapper.find('ul');
    expect(wrapper.exists('ul.bounce')).toBeFalsy();
  });
  it('should call the onChange handler when the input changes', () => {
    input.simulate('change', { target: { value: 'test' } });
    expect(onChangeHandler).toHaveBeenCalled();
  });
});
