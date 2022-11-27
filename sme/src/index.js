import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Basic from './Basic';
import MDInput from './MDInput.js';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Basic>
      <MDInput />
    </Basic>
  );