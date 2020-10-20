import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: ['qld'],
      fields: []
    };
  };

// remember button to expand all boxes at once
//   function to show each territories name in states
// accepts states as an argument
// first shows bar with field name(and summary?)
// loops through the length of states
// this part can be changed depending on parameter
// if 3 letter code corresponds it returns a div with the name
// if states[i] corresponds to  3 letter terri code 
// then show information of field to that terri

  showAddState = () => {
    var addState = document.querySelector('.addState');
    addState.classList.toggle("show");
  }

  toggleStates = (e) => {
    if ((this.state.states).includes(e.target.value)) {
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

    // every time we change state it will refresh
    // create array to house the arrays 
    // loop through the fields
    // generate a div to house the array with information with the style below(with a responsive number of columns)
    // loop through the states 
      // first field will just loop be for the name(of the state like a title for the column)
      // a different function for each field - function to handle:
        // need an if for each state they will have different information
        // for each state add a div to an array with the information
      
      // return the array to a div 

    const styleForGrid = {
        display: 'grid',
        'gridTemplateColumns': `repeat(${this.state.states.length}, minmax(150px, 1fr)`
    }

    let queensland;
    let victoria;
    let newsouthwales;


    if ((this.state.states).includes('qld')) {
        queensland = [[<div>testing 1</div>,<div>testing 2</div>,<div>testing 3</div>],<h3>Queensland</h3>,<p>QLD field 1 info</p>,<p>QLD field 2 info</p>,<p>QLD field 3 info</p>]
    }
    
    if ((this.state.states).includes('vic')) {
      victoria = <div><h3>Victoria</h3><p>VIC field 1 info</p><p>VIC field 2 info</p><p>VIC field 3 info</p></div>
    }

    if ((this.state.states).includes('nsw')) {
      newsouthwales = <div><h3>New South Wales</h3><p>NSW field 1 info</p><p>NSW field 2 info</p><p>NSW field 3 info</p></div>
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
              <div></div>{queensland}
              {victoria}
              {newsouthwales}
            </div>
            <div className='plus' onClick={this.showAddState}>
              +
              <div className='addState'>
                <ul>
                  <label htmlFor="">Queensland</label>
                  <input checked value='qld' type="checkbox"  onClick={this.toggleStates}/>
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