import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';

const App = () => {
      return ( 
          <div>
      <h1>We are learning React</h1>
      <Content/>
      </div>
      )
    }
ReactDOM.render(<App/>, document.getElementById('root'));