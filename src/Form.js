import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [],
      fields: []
    };
  };

  changeStates = (e) => {
    if (this.state.states.includes(e.target.value)) {
      this.state.states.filter(function(value) { return value === (e.target.value)})
    } else {
      this.state.states.push(e.target.value)
    }
  };

  render() {
    return(
      <div className="form nav-main">
        <aside className='nav-fields'>
          <h3>State</h3>
        </aside>
        <main>
          <h1>State Name</h1>
        </main>
      </div>
    );
  };
};



export default Form;