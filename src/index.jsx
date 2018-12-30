import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import CloseIcon from './icons.jsx';

export default class TaggleInput extends Component {
  static propTypes = {
    tags: PropTypes.array,
    maxTags: PropTypes.number,
    allowDuplicates: PropTypes.bool,
    duplicateTagClass: PropTypes.string,
    placeholder: PropTypes.string,
    onBeforeTagAdd: PropTypes.func,
    onAfterTagAdd: PropTypes.func,
    onBeforeTagRemove: PropTypes.func,
    onAfterTagRemove: PropTypes.func,
    onInputBlur: PropTypes.func,
    onInputChange: PropTypes.func,
    keyCodesToAddTag: PropTypes.array,
    saveOnBlur: PropTypes.bool,
    readOnly: PropTypes.bool
  }

  static defaultProps = {
    tags: [],
    maxTags: 0,
    allowDuplicates: false,
    duplicateTagClass: 'bounce',
    placeholder: 'Enter the tags',
    onBeforeTagAdd: undefined,
    onAfterTagAdd: undefined,
    onBeforeTagRemove: undefined,
    onAfterTagRemove: undefined,
    onInputBlur: undefined,
    onInputChange: undefined,
    keyCodesToAddTag: ['13'],
    saveOnBlur: false,
    readOnly: false
  }

  constructor(props) {
    super(props);
    const { tags } = props;
    this.state = {
      tags,
      duplicateIndex: ''
    };
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  onKeyDown = (event) => {
    const { keyCodesToAddTag } = this.props;
    if (keyCodesToAddTag.includes(event.keyCode) && event.target.value) {
      this.addTag(event.target.value);
    }

    if (event.keyCode === 8) {
      if (!event.target.value) {
        const { tags } = this.state;
        this.removeTag(tags.length - 1);
      }
    }
  }

  onBlur = (event) => {
    const { onInputBlur, saveOnBlur } = this.props;
    if (typeof onInputBlur === 'function') {
      onInputBlur(event);
    }
    if (saveOnBlur && event.target.value) {
      this.addTag(event.target.value);
    }
  }

  onChange = (event) => {
    const { onInputChange } = this.props;
    if (typeof onInputChange === 'function') {
      onInputChange(event);
    }
  }

  addTag = (tag) => {
    const tagRef = tag.trim();
    const { allowDuplicates, onBeforeTagAdd, onAfterTagAdd } = this.props;
    const { tags } = this.state;
    if (!allowDuplicates && tags.indexOf(tagRef) !== -1) {
      this.setState({ duplicateIndex: tags.indexOf(tagRef) });
    } else if (tagRef) {
      if (typeof onBeforeTagAdd === 'function') {
        onBeforeTagAdd(tagRef);
      }
      this.setState({ tags: [...tags, tagRef], duplicateIndex: '' });
      this.input.value = '';
      this.input.focus();
      if (typeof onAfterTagAdd === 'function') {
        onAfterTagAdd(tagRef);
      }
    }
  }

  removeTag = (index) => {
    const { onAfterTagRemove, onBeforeTagRemove } = this.props;
    const { tags } = this.state;
    if (typeof onBeforeTagRemove === 'function') {
      onBeforeTagRemove(tags[index]);
    }
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    this.setState({ tags: updatedTags });
    if (typeof onAfterTagRemove === 'function') {
      onAfterTagRemove(tags[index]);
    }
  }

  render() {
    const {
      maxTags, placeholder, duplicateTagClass, readOnly
    } = this.props;
    const { tags, duplicateIndex } = this.state;
    return (
      <div className="taggle_wrapper">
        <ul className="taggle_list">
          {tags.length > 0
            && tags.map((tag, index) => (
              <li key={Math.random()} className={`taggle ${duplicateIndex === index ? duplicateTagClass : ''}`}>
                <span className="taggle_text">
                  {tag}
                  {!readOnly && <button className="close" type="button" onClick={() => this.removeTag(index)}><CloseIcon /></button>}
                </span>
              </li>))}
          {(!readOnly && (!maxTags || tags.length < maxTags)) && <li><input ref={(ele) => { this.input = ele; }} type="text" placeholder={placeholder} onKeyDown={this.onKeyDown} onBlur={this.onBlur} onChange={this.onChange} /></li>}
        </ul>
      </div>
    );
  }
}
