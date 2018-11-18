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
    placeholder: PropTypes.string
  }

  static defaultProps ={
    tags: [],
    maxTags: 0,
    allowDuplicates: false,
    duplicateTagClass: 'bounce',
    placeholder: 'Enter the tags'
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
      case keys.enter:
      case keys.spacebar:
        this.addTag(event.target.value);
        break;
      default:
        break;
    }
  }

  addTag = (tag) => {
    if (!this.props.allowDuplicates && this.state.tags.indexOf(tag) !== -1) {
      this.setState({ duplicateIndex: this.state.tags.indexOf(tag) });
    } else {
      this.setState({ tags: [...this.state.tags, tag], duplicateIndex: '' });
      this.input.value = '';
      this.input.focus();
    }
  }

  removeTag = (index) => {
    const { tags } = this.state;
    tags.splice(index, 1);
    this.setState({ tags });
  }

  render() {
    const { maxTags, placeholder, duplicateTagClass } = this.props;
    const { tags, duplicateIndex } = this.state;
    return (
      <div className="taggle_wrapper">
        <ul className="taggle_list">
          {tags.length > 0 &&
            tags.map((tag, index) => <li key={Math.random()} className={`taggle ${duplicateIndex === index ? duplicateTagClass : ''}`}><span className="taggle_text">{tag}<button className="close" onClick={() => this.removeTag(index)}><CloseIcon /></button></span></li>)}
          {(!maxTags || tags.length < maxTags) && <li><input ref={(ele) => { this.input = ele; }}type="text" placeholder={placeholder} onKeyDown={this.onKeyDown} /></li>}
        </ul>
      </div>
    );
  }
}

