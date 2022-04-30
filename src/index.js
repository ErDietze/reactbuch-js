import React from 'react';
import ReactDOM from 'react-dom';
import Choicebar from './components/ChoiceBar';
import './index.css';

ReactDOM.render(
  <div>
    <Choicebar percent={37} title="JavaScript" />
  </div >,
  document.getElementById('root')
);

