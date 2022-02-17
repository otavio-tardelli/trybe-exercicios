import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['estudar', 'fazer exercício', 'dormir', 'comer'];

class App extends React.Component {
  render() {
    return (
      <ul> { array.map(element => Task(element)) } </ul>
    );
  }
}

export default App;
