import React from 'react';
import './Form.css'
import dropDownArrow from './dropdownArrowState.png' 
import upwardArrow from './dropdownSectionUpward.png' 
import ReactHtmlParser from 'react-html-parser'; 

const objFilter = (obj, predicate) => 
  Object.keys(obj)
    .filter( key => predicate(obj[key]) )
    .reduce( (res, key) => (res[key] = obj[key], res), {} );


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [],
      fields: [],
      possibleStates: [],
      possibleFields: [],
      show: { },
      error: null,
      isLoaded: false,
      info: {}
      
    }; 
  };

//-----------------------------------------------------------
componentDidMount() {
  fetch("https://public-api.wordpress.com/rest/v1.1/sites/185189824/posts?filter[parent]=47332")
    .then(res => res.json())
    .then(
      (result) => {
        

        //parsing 
        result.posts.forEach( (postJson,index) => {

          // checks fields and will add this one if it isn't already there
          var fieldCatObj = objFilter( postJson.terms.category, category => category.parent === 47332)

          var fieldName = fieldCatObj[Object.keys(fieldCatObj)].name
          if (!this.state.possibleFields.includes(fieldName)) {
            this.setState( prevState => ({
              possibleFields: [...prevState.possibleFields, fieldName]
            }))
          }
          
          var stateCatObj = objFilter( postJson.terms.category, category => category.parent === 6418)

          var stateName = stateCatObj[Object.keys(stateCatObj)].name
          if (!this.state.possibleStates.includes(stateName)) {
            this.setState( prevState => ({
              possibleStates: [...prevState.possibleStates, stateName]
            }))
          }

          
          // this.setState( prevState => ({
          //   info: {...prevState.info, 
          //     [stateName]: {
          //       [fieldName]: postJson.content
          //     }
          //   }
          // }));
          
          this.setState( prevState => ({
            isLoaded: true
          }));
        })
      },
      
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
};


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

  collapseField = (target, code) => {
    this.state.show[`${code}`] = 'closed'
    console.log(this.state.show[`${code}`])
  }

  openField = () => {

  }

  getFieldNames = (fieldCode) => {
    if (fieldCode === 'rar') {
      return(<div className='field-title'>Restrictions and Roadmaps<img src={dropDownArrow} className = 'arrows' height='20px' onClick ={this.collapseField.bind(this, 'rar')} /></div>);
    } else if (fieldCode === 'csg') {
      return(<div className='field-title'>COVID Safe GuideLines<img src={upwardArrow} className = 'arrows' height='20px'/></div>);
    } else if (fieldCode === 'csp') {
      return(<div className='field-title'>COVID Safe Plans</div>);
    }
  }

  getInfo = (field, state) => {
    
    if (field == 'Current Restrictions / Road to Recovery Stage / Step / Phase') {
      if (state == 'New South Wales') {
        const reactState = this.state;
        const info = reactState.info
        if (this.state.error) {
          return <div>Error: {this.error.message}</div>;
        } else if (reactState.isLoading) {
          return <div>Loading...</div>;
        } else {
          return(
          
            <div>{ReactHtmlParser (info)} </div>

          )
        }
      } else if (state === 'vic') {
        return('Restrictions and Roadmaps VIC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'qld') {
        return('Restrictions and Roadmaps QLD Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'sa') {
        return('Restrictions and Roadmaps SA Lorem ipsum')
      } else if (state === 'nt') {
        return('Restrictions and Roadmaps NT Lorem ipsum')
      } else if (state === 'wa') {
        return('Restrictions and Roadmaps WA Lorem ipsum')
      } else if (state === 'act') {
        return('Restrictions and Roadmaps ACT Lorem ipsum')
      } else if (state === 'tas') {
        return('Restrictions and Roadmaps TAS Lorem ipsum')
      }
    }
    
    else if (field === 'csg') { 
      if (state === 'nsw') {
        return('Covid Safe Guidelines NSW Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'vic') {
        return('Covid Safe Guidelines VIC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'qld') {
        return('Covid Safe Guidelines QLD Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'sa') {
        return(`Covid Safe Guidelines ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'nt') {
        return(`Covid Safe Guidelines ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'wa') {
        return(`Covid Safe Guidelines ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'act') {
        return(`Covid Safe Guidelines ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'tas') {
        return(`Covid Safe Guidelines ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      }
    }

    else if (field === 'csp') {
      if (state === 'nsw') {
        return('Covid Safe Plans NSW Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'vic') {
        return('Covid Safe Plans VIC Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'qld') {
        return('Covid Safe Plans QLD Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
      } else if (state === 'sa') {
        return(`Covid Safe Plans ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'nt') {
        return(`Covid Safe Plans ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'wa') {
        return(`Covid Safe Plans ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'act') {
        return(`Covid Safe Plans ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      } else if (state === 'tas') {
        return(`Covid Safe Plans ${state} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      }
    }
    else if (field === 'adr') {
    // infoAdditionalResources = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoLiveMusicRestrictions = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoSeatingRestrictions = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }
    
    // infoDanceRestrictions = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoAlcoholRestrictions = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoPhysicalDistancing = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoTravelPermits = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoMaximumNumberPatrons = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoContactRegisterRequirements = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoTicketing = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoTraining = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoBorderRestrictions = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }

    // infoQuarantineRequirements = (state) => {
    //   if (state === 'nsw') {
    //   } else if (state === 'vic') {
    //   } else if (state === 'qld') {
    //   } else if (state === 'sa') {
    //   } else if (state === 'nt') {
    //   } else if (state === 'wa') {
    //   } else if (state === 'act') {
    //   } else if (state === 'tas') {
    //   }
    // }
    }
  }

//------------------------------------------------------------

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
        'gridTemplateColumns': `repeat(${this.state.states.length}, minmax(150px, 1fr)`,
        'gridColumnGap': '5px'
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

    thisState.states.forEach( (stateName,index) => {
      if (index % 2 === 0) {
        stateNames.push(<div className='state-title'>{stateName}</div>)
      } else {
        stateNames.push(<div className='state-title gray-bgc'>{stateName}</div>)
      }

    })
    
    let showFields = []
    
    thisState.fields.forEach( (fieldCode) => {
      const fieldName = this.getFieldNames(fieldCode)
      let restrictionsAndRoadmaps = [];

      thisState.states.forEach(( stateCode, index) => {
        if (index % 2 === 0) {
          restrictionsAndRoadmaps.push(<div className='display-info'>{this.getInfo(fieldCode, stateCode)}</div>)
        } else {
          restrictionsAndRoadmaps.push(<div className='display-info gray-bgc'>{this.getInfo(fieldCode, stateCode)}</div>)
        }
      })

      showFields.push(
        <div className='field-card'>
          {fieldName}
        <div className='display-info' style={styleForGrid}>
          {restrictionsAndRoadmaps}
        </div>
      </div>
      )
    })

    return(
      <div className="form nav-main">
        <aside className='nav-fields'>
          <h3>Fields</h3>
          <ul>
            <input  value='rar' type="checkbox"  onClick={this.toggleFields} checked={checkField('rar')}/>Restrictions and Roadmaps
          </ul> 
          <ul>
            <input  value='csg' type="checkbox"  onClick={this.toggleFields} checked={checkField('csg')}/>COVID Safe Guidelines
          </ul>
          <ul>
            <input  value='csp' type="checkbox"  onClick={this.toggleFields} checked={checkField('csp')}/>COVID Safe plans
          </ul>
        </aside>
        <main>
          <div className='content'>
            <div className='state-names' style={styleForGrid}>
              {stateNames}
            </div>

            {showFields}
            
          </div>
          
        </main>
        <aside className='plus' onClick={this.showAddState}>
          <h3>States</h3>
          <ul>
            <input  value='qld' type="checkbox"  onClick={this.toggleStates} checked={checkState('qld')}/>
            <label htmlFor="">Queensland</label>
          </ul>
          <ul>
            <input value='vic' type="checkbox"  onClick={this.toggleStates} checked={checkState('vic')}/>
            <label htmlFor="">Victoria</label>
          </ul>
          <ul>
            <input value='nsw' type="checkbox"  onClick={this.toggleStates} checked={checkState('nsw')}/>
            <label htmlFor="">New South Wales</label>
          </ul>
          <ul>
            <input value='nt' type="checkbox"  onClick={this.toggleStates} checked={checkState('nt')}/>
            <label htmlFor="">Northern Territory</label>
          </ul>
          <ul>
            <input value='sa' type="checkbox"  onClick={this.toggleStates} checked={checkState('sa')}/>
            <label htmlFor="">South Australia</label>
          </ul>
          <ul>
            <input value='act' type="checkbox"  onClick={this.toggleStates} checked={checkState('act')}/>
            <label htmlFor="">Australia Capitol Territory</label>
          </ul>
          <ul>
            <input value='tas' type="checkbox"  onClick={this.toggleStates} checked={checkState('tas')}/>
            <label htmlFor="">Tasmania</label>
          </ul>
          <ul>
            <input value='wa' type="checkbox"  onClick={this.toggleStates} checked={checkState('wa')}/>
            <label htmlFor="">Western Australia</label>
          </ul>
        </aside>
      </div>
    );
  };
};



export default Form;