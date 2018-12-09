import React, { Component, Fragment } from 'react';
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
    submitButtonText: PropTypes.string
  }

  static defaultProps ={
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
    submitButtonText: 'Get Tags'
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
    const keys = {
      enter: 13,
      tab: 9,
      spacebar: 32,
      backspace: 8
    };
    switch (event.keyCode) {
      case keys.backspace:
        if (!event.target.value) {
          this.removeTag(this.state.tags[this.state.tags.length - 1]);
        }
        break;
      case keys.tab:
        event.preventDefault();
        this.addTag(event.target.value);
        break;
      case keys.enter:
      case keys.spacebar:
        this.addTag(event.target.value);
        break;
      default:
        break;
    }
  }

  addTag = (tag) => {
    const tagRef = tag.trim();
    if (!this.props.allowDuplicates && this.state.tags.indexOf(tagRef) !== -1) {
      this.setState({ duplicateIndex: this.state.tags.indexOf(tagRef) });
    } else if (tagRef) {
      if (this.props.onBeforeTagAdd) {
        this.props.onBeforeTagAdd(tagRef);
      }
      this.setState({ tags: [...this.state.tags, tagRef], duplicateIndex: '' });
      this.input.value = '';
      this.input.focus();
      if (this.props.onAfterTagAdd) {
        this.props.onAfterTagAdd(tagRef);
      }
    }
  }

  removeTag = (index) => {
    if (this.props.onBeforeTagRemove) {
      this.props.onBeforeTagRemove(this.state.tags[index]);
    }
    const { tags } = this.state;
    tags.splice(index, 1);
    this.setState({ tags });
    if (this.props.onAfterTagRemove) {
      this.props.onAfterTagRemove(this.state.tags[index]);
    }
  }

  render() {
    const {
      maxTags, placeholder, duplicateTagClass, getTagValues, submitButtonText
    } = this.props;
    const { tags, duplicateIndex } = this.state;
    return (
      <Fragment>
        <div className="taggle_wrapper">
          <ul className="taggle_list">
            {tags.length > 0 &&
              tags.map((tag, index) => <li key={Math.random()} className={`taggle ${duplicateIndex === index ? duplicateTagClass : ''}`}><span className="taggle_text">{tag}<button className="close" onClick={() => this.removeTag(index)}><CloseIcon /></button></span></li>)}
            {(!maxTags || tags.length < maxTags) && <li><input ref={(ele) => { this.input = ele; }}type="text" placeholder={placeholder} onKeyDown={this.onKeyDown} /></li>}
          </ul>
        </div>
        {getTagValues && <button onClick={() => getTagValues(tags)}>{submitButtonText}</button>}
      </Fragment>
    );
  }
}

