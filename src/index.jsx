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
    getTagValues: PropTypes.func,
    submitButtonText: PropTypes.string,
    addTagKeyCodes: PropTypes.array
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
    getTagValues: undefined,
    submitButtonText: 'Get Tags',
    addTagKeyCodes: ['13']
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
    this.input.focus();
  }

  onKeyDown = (event) => {
    const { addTagKeyCodes } = this.props;
    if (addTagKeyCodes.includes(event.keyCode)) {
      this.addTag(event.target.value);
    }

    if (event.keyCode === 8) {
      if (!event.target.value) {
        const { tags } = this.state;
        this.removeTag(tags.length - 1);
      }
    }
  }

  addTag = (tag) => {
    const tagRef = tag.trim();
    const { allowDuplicates, onBeforeTagAdd, onAfterTagAdd } = this.props;
    const { tags } = this.state;
    if (!allowDuplicates && tags.indexOf(tagRef) !== -1) {
      this.setState({ duplicateIndex: tags.indexOf(tagRef) });
    } else if (tagRef) {
      if (onBeforeTagAdd) {
        onBeforeTagAdd(tagRef);
      }
      this.setState({ tags: [...tags, tagRef], duplicateIndex: '' });
      this.input.value = '';
      this.input.focus();
      if (onAfterTagAdd) {
        onAfterTagAdd(tagRef);
      }
    }
  }

  removeTag = (index) => {
    const { onAfterTagRemove, onBeforeTagRemove } = this.props;
    const { tags } = this.state;
    if (onBeforeTagRemove) {
      onBeforeTagRemove(tags[index]);
    }
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    this.setState({ tags: updatedTags });
    if (onAfterTagRemove) {
      onAfterTagRemove(tags[index]);
    }
  }

  render() {
    const {
      maxTags, placeholder, duplicateTagClass, getTagValues, submitButtonText
    } = this.props;
    const { tags, duplicateIndex } = this.state;
    return (
      <>
        <div className="taggle_wrapper">
          <ul className="taggle_list">
            {tags.length > 0
            && tags.map((tag, index) => (
              <li key={Math.random()} className={`taggle ${duplicateIndex === index ? duplicateTagClass : ''}`}>
                <span className="taggle_text">
                  {tag}
                  <button className="close" type="button" onClick={() => this.removeTag(index)}><CloseIcon /></button>
                </span>
              </li>))}
            {(!maxTags || tags.length < maxTags) && <li><input ref={(ele) => { this.input = ele; }} type="text" placeholder={placeholder} onKeyDown={this.onKeyDown} /></li>}
          </ul>
        </div>
        {getTagValues && <button type="button" onClick={() => getTagValues(tags)}>{submitButtonText}</button>}
      </>
    );
  }
}

