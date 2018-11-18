import React from 'react';
import { render } from 'react-dom';

import TaggleInput from '../index.js';

render(
  <div>
    <h2>React Taggle Input</h2>
    <TaggleInput tags={['test', 'test1']} max={5} />
  </div>,
  document.getElementById('root')
);
