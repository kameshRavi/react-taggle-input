import React from 'react';
import { render } from 'react-dom';

import TaggleInput from '../index.js';

render(
  <div>
    <h2>React Taggle Input</h2>
    <TaggleInput tags={['test', 'test1']} maxTags={5} keyCodesToAddTag={[13, 32]} />
  </div>,
  document.getElementById('root')
);
