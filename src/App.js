import React from 'react';
import Form from './Form.js'
import './App.css';
import Header from './Header.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phase: "beginning",
      state: null,
      event: null,
      outdoorOrIndoor: null,
      space: null,
    }; 
  };

  

  render() {
    return(
      <div className="App">
        <Header />
        
        <Form />
      </div>
    );
  };
};


export default App;
