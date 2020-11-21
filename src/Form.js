import React, { Suspense } from 'react';
import './Form.css'
import dropDownArrow from './dropdownArrowState.png' 
import upwardArrow from './dropdownSectionUpward.png' 
import ReactHtmlParser from 'react-html-parser'; 

const fieldsCategoryId = 47332
const statesCategoryId = 6418

// const objFilter = (obj, predicate) => 
//   Object.keys(obj)
//     .filter( key => predicate(obj[key]) )
//     .reduce( (res, key) => (res[key] = obj[key], res), {} );

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [],
      fields: [],
      possibleStates: [],
      possibleFields: [],
      show: {},
      info: {},
      loading: {}
    }; 
  };

//-----------------------------------------------------------
  componentDidMount() {
    // setting up possible states and fields in a scalable way
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/185189824/categories") 
      .then(res => res.json())
      .then(
        (result) => {
          
          

          var fieldsArray = result.categories.filter( category => category.parent === fieldsCategoryId)
          fieldsArray.forEach( category => {
            if (!this.state.possibleFields.includes(category.name)) {
              this.setState( prevState => ({
              possibleFields: [...prevState.possibleFields, category.name]
              }))
            }
          })
          var stateArray = result.categories.filter( state => state.parent === statesCategoryId)
          stateArray.forEach( state => {
            if (!this.state.possibleStates.includes(state.name)) {
              this.setState( prevState => ({
              possibleStates: [...prevState.possibleStates, state.name]
              }))
            }
          })
          
        },

      );
  };

  componentDidUpdate(previousProps, previousState) {
    
    // not sure why this isn't working when more fields or states are added
    // not working when adding to states because the previous state gets the added state as well
    // if the fields are not the same or the states are not the same
    console.log(previousState.fields !== this.state.fields)
    console.log(previousState.fields)
    console.log(this.state.fields)

    // console.log(previousState.states !== this.state.states)
    // console.log(previousState.fields !== this.state.fields || previousState.states !== this.state.states)

    if (previousState.fields !== this.state.fields || previousState.states !== this.state.states) {
      this.setState({loading: false});
      this.state.fields.forEach( fieldName => {
        const fetchInfo = async () => {
          const response = await fetch(
            `https://public-api.wordpress.com/rest/v1.1/sites/185189824/posts?category=${fieldName}`
          );
          const data = await response.json();

          data.posts.forEach( (post) => {
            // get state name of post and content/data for post
            var stateName = (Object.keys(post.categories)).filter( category => (category != fieldName) && (category != 'Uncategorized'))[0]
            


            if (this.state.states.includes(stateName)) {
              var postContent = post.content
  
              this.setState(prevState => ({
                info: Object.assign(
                  {},
                  this.state.info,
                  { ...prevState.info,
                    [fieldName]: {
                      ...prevState.info[fieldName],
                      [stateName]: postContent
                  }
                  }),                    
                loading: {
                  ...prevState.loading,
                  [fieldName + stateName]: true                  
                }
              }))

            }

          })
        };

        fetchInfo();
        
      })
    }
  }

  collapseField = (target, code) => {
    this.state.show[`${code}`] = 'closed'
    console.log(this.state.show[`${code}`])
  }

  openField = () => {

  }

//------------------------------------------------------------

  toggleStates = (e) => {
    if ((this.state.states).includes(e.target.value)) {
    this.setState({
    states: this.state.states.filter((value) => value !== (e.target.value))
      });
    } else {
        this.setState({ states: [...this.state.states, e.target.value]})
    }
  };

  toggleFields = (e) => {
    if ((this.state.fields).includes(e.target.value)) {
      this.setState({
        fields: this.state.fields.filter((value) => value !== (e.target.value))
      });
    } else {
        this.setState({ fields: [...this.state.fields, e.target.value]})
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

    let showFieldsContent = []
    // loops through fields and gets the field name
    
    thisState.fields.forEach( fieldName => {
      showFieldsContent.push(<div className='field-title'>{fieldName}</div>)
        var infoDiv = []
        //loop through states
        thisState.states.forEach( (stateName, columnNumber) => {
          if (thisState.loading[fieldName + stateName]) {
            var content = thisState.info[fieldName][stateName]
            
          } else {
            var content = ''
          }
          
          if (columnNumber % 2 === 0) {
            infoDiv.push(<div className='state-info'>{ReactHtmlParser(content)}</div>)
          } else {
            infoDiv.push(<div className='state-info gray-bgc'>{ReactHtmlParser(content)}</div>)
          }
        })
        showFieldsContent.push(<div style={styleForGrid}>{infoDiv}</div>)

    })
  

      
      

    var showStatesCheckBoxes = []
    
    thisState.possibleStates.forEach( name => { 
      showStatesCheckBoxes.push(
      <ul>
        <input value={name} type="checkbox"  onClick={this.toggleStates} checked={checkState(name)}/>
        <label htmlFor="">{name}</label>
      </ul>)
    })    

    var showFieldsCheckBoxes = []
    
    thisState.possibleFields.forEach( name => { 
      showFieldsCheckBoxes.push(
      <ul>
        <input value={name} type="checkbox"  onClick={this.toggleFields} checked={checkField(name)}/>
        <label htmlFor="">{name}</label>
      </ul>)
    })    



    return(
      <div className="form nav-main">
        <aside className='nav-fields'>
          <h3>Fields</h3>
          {showFieldsCheckBoxes}
        </aside>
        <main>
          <div className='content'>
            <div className='state-names' style={styleForGrid}>
              {stateNames}
            </div>

              {showFieldsContent}

          </div>
          
        </main>
        <aside className='plus' onClick={this.showAddState}>
          <h3>States</h3>
          {showStatesCheckBoxes}
        </aside>
      </div>
    );
  };
};



export default Form;