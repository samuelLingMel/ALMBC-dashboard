import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: ['nsw'],
      fields: ['rar', 'csg', 'csp']
    };
  };

//------------------------------------------------------------

  getStatesNames = (state) => {
    if (state === 'nsw') {
      return('New South Wales')
    } else if (state === 'vic') {
      return('Victoria')
    } else if (state === 'qld') {
      return('Queensland')
    } else if (state === 'sa') {
      return('South Australia')
    } else if (state === 'nt') {
      return('Northern Territory')
    } else if (state === 'wa') {
      return('Western Australia')
    } else if (state === 'act') {
      return('Australian Capitol Territory')
    } else if (state === 'tas') {
      return('Tasmania')
    }
  }

  infoRestrictionsAndRoadmaps = (state) => {
    if (state === 'nsw') {
      return('Restrictions and Roadmaps Lorem Ipsum NSW')
    } else if (state === 'vic') {
      return('Restrictions and Roadmaps Lorem Ipsum VIC')
    } else if (state === 'qld') {
      return('Restrictions and Roadmaps Lorem Ipsum QLD')
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoCovidSafeGuidelines = (state) => {
    if (state === 'nsw') {
      return('Covid Safe Guidelines Lorem Ipsum NSW')
    } else if (state === 'vic') {
      return('Covid Safe Guidelines Lorem Ipsum VIC')
    } else if (state === 'qld') {
      return('Covid Safe Guidelines Lorem Ipsum QLD')
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoCovidSafePlans = (state) => {
    if (state === 'nsw') {
      return('Covid Safe Plans Lorem Ipsum NSW')
    } else if (state === 'vic') {
      return('Covid Safe Plans Lorem Ipsum VIC')
    } else if (state === 'qld') {
      return('Covid Safe Plans Lorem Ipsum QLD')
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoAdditionalResources = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoLiveMusicRestrictions = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoSeatingRestrictions = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }
  
  infoDanceRestrictions = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoAlcoholRestrictions = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoPhysicalDistancing = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoTravelPermits = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoMaximumNumberPatrons = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoContactRegisterRequirements = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoTicketing = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoTraining = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoBorderRestrictions = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

  infoQuarantineRequirements = (state) => {
    if (state === 'nsw') {
    } else if (state === 'vic') {
    } else if (state === 'qld') {
    } else if (state === 'sa') {
    } else if (state === 'nt') {
    } else if (state === 'wa') {
    } else if (state === 'act') {
    } else if (state === 'tas') {
    }
  }

//------------------------------------------------------------

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
        var newStates = this.state.states
        newStates.push(e.target.value)
        this.setState({ states: newStates})
    }
  };

  toggleFields = (e) => {
    if ((this.state.fields).includes(e.target.value)) {
    this.setState({
    fields: this.state.fields.filter((value) => value !== (e.target.value))
      });
    } else {
        var newFields = this.state.fields
        newFields.push(e.target.value)
        this.setState({ fields: newFields})
    }
  };

  render() {

    const styleForGrid = {
        display: 'grid',
        'gridTemplateColumns': `repeat(${this.state.states.length}, minmax(150px, 1fr)`
    }

    const thisState = this.state

    const checkState = function(stateCode) {
      if (thisState.states.includes(stateCode)) {
        return(true)
      } else {
        return(false)
      }
    }
    
    const checkField = function(fieldCode) {
      if (thisState.fields.includes(fieldCode)) {
        return(true)
      } else {
        return(false)
      }
    }

    let stateNames = []

    

    thisState.states.forEach( (stateCode,index) => {
      if (index % 2 === 0) {
        stateNames.push(<div className='state-title'>{this.getStatesNames(stateCode)}</div>)
      } else {
        stateNames.push(<div className='state-title gray-bgc'>{this.getStatesNames(stateCode)}</div>)
      }

    })
    
    let restrictionsAndRoadmaps = [];

    thisState.states.forEach(( stateCode, index) => {
      if (index % 2 === 0) {
        restrictionsAndRoadmaps.push(<div className='state-title'>{this.infoRestrictionsAndRoadmaps(stateCode)}</div>)
      } else {
        restrictionsAndRoadmaps.push(<div className='state-title gray-bgc'>{this.infoRestrictionsAndRoadmaps(stateCode)}</div>)
      }
    })

    let showFields =  [<div className='fieldTitle'>restrictions and Roadmaps  </div>,
    <div className='display-info' style={styleForGrid}>
      {restrictionsAndRoadmaps}
    </div>]

    return(
      <div className="form nav-main">
        <aside className='nav-fields'>
          <h3>State</h3>
          <ul><input  value='rar' type="checkbox"  onClick={this.toggleFields} checked={checkField('rar')}/>Restrictions and Roadmaps</ul> 
          <ul><input  value='csg' type="checkbox"  onClick={this.toggleFields} checked={checkField('csg')}/>COVID Safe Guidelines</ul>
          <ul><input  value='csp' type="checkbox"  onClick={this.toggleFields} checked={checkField('csp')}/>COVID Safe plans</ul>
        </aside>
        <main>
          <div className='plus-grid'>
            <div>
              <div className='display-info' style={styleForGrid}>
                {stateNames}
              </div>

              {showFields}
             
            </div>
            <div className='plus' onClick={this.showAddState}>
              +
              <div className='addState'>
                <ul>
                  <label htmlFor="">Queensland</label>
                  <input  value='qld' type="checkbox"  onClick={this.toggleStates} checked={checkState('qld')}/>
                </ul>
                <ul>
                  <label htmlFor="">Victoria</label>
                  <input value='vic' type="checkbox"  onClick={this.toggleStates} checked={checkState('vic')}/>
                </ul>
                <ul>
                  <label htmlFor="">New South Wales</label>
                  <input value='nsw' type="checkbox"  onClick={this.toggleStates} checked={checkState('nsw')}/>
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