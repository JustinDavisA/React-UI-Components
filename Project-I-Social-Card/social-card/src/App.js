import React from 'react';
import './App.css';
import HeaderContent from './components/HeaderComponents/HeaderContent';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Social Card!</h3>
      <HeaderContent />
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
