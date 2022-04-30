import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VotingComponent from './components/VotingComponent';
import './index.css';

const vote = {
  title: "How is your Day",
  description: "Tell me: How has your day been so far?",
  choices: [
    { id: "choice_1", title: "good", count: 7 },
    { id: "choice_2", title: "Bad", count: 12 },
    { id: "choice_3", title: "Not sure yet", count: 1 }
  ]
}

ReactDOM.render(
  <App>
    <VotingComponent vote={vote} />
  </App>,
  document.getElementById('root')
);

