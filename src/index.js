import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Page /> {/* Render the Page component */}
  </React.StrictMode>,
  document.getElementById('root')
);