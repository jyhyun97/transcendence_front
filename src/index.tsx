import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav'
import Side from './Side'
import Rank from './Rank'
import Content from './Content'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav></Nav>
    <Side></Side>
    <Content>
      <Rank></Rank>
    </Content>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
