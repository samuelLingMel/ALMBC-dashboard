import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: ['vic', 'nsw', 'qld'],
      fields: []
    };
  };

  showAddState = () => {
    var addState = document.querySelector('.addState');
    addState.classList.toggle("show");
  }

  toggleStates = (e) => {
    if ((this.state.states).includes(e.target.value)) {
    console.log((e.target.value))
    this.setState({
    states: this.state.states.filter((value) => value !== (e.target.value))
      });
    } else {
        var newState = this.state.states
        newState.push(e.target.value)
        this.setState({ states: newState})
    }
  };

  render() {

    const styleForGrid = {
        display: 'grid',
        'gridTemplateColumns': `repeat(${this.state.states.length}, minmax(150px, 1fr)`
    }

    return(
      <div className="form nav-main">
        <aside className='nav-fields'>
          <h3>State</h3>
          <ul>field 1</ul>
          <ul>field 2</ul>
          <ul>field 3</ul>
        </aside>
        <main>
          <div className='plus-grid'>
            <div className='display-info' style= {styleForGrid}>
              <div className='col-one'>
                <h3>Queensland</h3>
                <p>QLD info</p>
              </div>
            
              <div className='col-two'>
                <h3>Victoria</h3>
                <p>VIC info</p>
              </div>

              <div className='col-three'>
                <h3>New South Wales</h3>
                <p>NSW info</p>
              </div>
            </div>
            <div className='plus' onClick={this.showAddState}>
              +
              <div className='addState'>
                <ul>
                  <label htmlFor="">Queensland</label>
                  <input value='qld' type="checkbox"  onClick={this.toggleStates}/>
                </ul>
                <ul>
                  <label htmlFor="">Victoria</label>
                  <input value='vic' type="checkbox"  onClick={this.toggleStates}/>
                </ul>
                <ul>
                  <label htmlFor="">New South Wales</label>
                  <input value='nsw' type="checkbox"  onClick={this.toggleStates}/>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
};



export default Form;