import React from 'react';
import './Form.css'
import downArrow from './dropdownArrowState.png' 
import upArrow from './dropdownSectionUpward.png' 
import ReactHtmlParser from 'react-html-parser'; 
import heroBanner from './heroBanner.svg'
import shareIcon from './shareIcon.svg'
import ReactDOM from "react-dom";

import { StickyViewport, StickyBoundary, Sticky } from "./Sticky";


const fieldsCategoryId = 47332
const statesCategoryId = 6418

class Form extends React.Component {

  constructor(props) {
    let topicsProps
    let locationsProps
    let queryString
    let re = new RegExp(/topics=(.{0,})&locations=(.{0,})/)
    
    if (props.location.search) {
      // console.log(re.exec(props.location.search))
      [queryString, topicsProps, locationsProps] = re.exec(props.location.search)
      
      topicsProps = topicsProps.split('-').map( stringNumber => Number(stringNumber))
      locationsProps = locationsProps.split('-').map( stringNumber => Number(stringNumber))
    }
    
    super(props)
    this.state = {
      states: [],
      fields: [],
      possibleStates: [],
      possibleFields: [],
      showFields: [],
      showNav: [],
      info: {},
      loaded: {},
      topicsPropsState: topicsProps,
      locationsPropsState: locationsProps
    }; 
 
  };

//-----------------------------------------------------------
  componentDidMount() {
    // setting up possible states and fields in a scalable way
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/185189824/categories") 
      .then(res => res.json())
      .then(
        (result) => {
          var fieldsArray = result.categories.filter( category => category.parent === fieldsCategoryId).sort((a, b) => (a.description > b.description) ? 1 : -1)
          fieldsArray.forEach( (category, index) => {
            if (!this.state.possibleFields.includes(category.name)) {
              this.setState( prevState => ({
                possibleFields: [...prevState.possibleFields, category.name]
              }))
            }
            if (this.state.topicsPropsState) {
              if (this.state.topicsPropsState.includes(index)) {
                this.setState( prevState => ({
                  fields: [...prevState.fields, category.name],
                  showFields: [...this.state.showFields, category.name]
                }))
              }
            }

          })
          var stateArray = result.categories.filter( state => state.parent === statesCategoryId)
          stateArray.forEach( (state, index) => {
            if (!this.state.possibleStates.includes(state.name)) {
              this.setState( prevState => ({
              possibleStates: [...prevState.possibleStates, state.name]
              }))
            }
            if (this.state.locationsPropsState) {
              if (this.state.locationsPropsState.includes(index)) {
                this.setState( prevState => ({
                  states: [...prevState.states, state.name]
                }))
              }
            }
          })
        },
      );
  };

  componentDidUpdate(previousProps, previousState) {


    
    if (previousState.fields !== this.state.fields || previousState.states !== this.state.states) {
      let indexFields = []
      this.state.fields.forEach( field => { indexFields.push(String(this.state.possibleFields.indexOf(field))) })
      let indexStates = []
      this.state.states.forEach( state => { indexStates.push(String(this.state.possibleStates.indexOf(state))) })

      let currentUrlParams = new URLSearchParams(window.location.search);
      currentUrlParams.set('topics', (indexFields.join('-')))
      currentUrlParams.set('locations', (indexStates.join('-')))
      this.props.history.push(window.location.pathname + "?" + currentUrlParams.toString());


      this.setState({loaded: false});
      this.state.fields.forEach( fieldName => {
        const fetchInfo = async () => {
          const response = await fetch(
            `https://public-api.wordpress.com/rest/v1.1/sites/185189824/posts?category=${fieldName}`
          );
          const data = await response.json();

          data.posts.forEach( (post) => {
            // get state name of post and content/data for post
            var stateName = (Object.keys(post.categories)).filter( category => (category !== fieldName) && (category !== 'Uncategorized'))[0]
            
            if (this.state.states.includes(stateName)) {
              let postContent = post.content
              if (postContent.includes('Author:')) {
                postContent = postContent.split('Author:')[0]
              }

  
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
                loaded: {
                  ...prevState.loaded,
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

  collapseField = (fieldName) => {
    this.setState({
      showFields: this.state.showFields.filter((value) => value !== (fieldName))
    }) 
  }
  
  openField = (fieldName) => {
    this.setState({
      showFields: [...this.state.showFields, fieldName]
    })
  }

  unshowAllFields = () => {
    this.setState({ showFields: []})
  }

  showAllFields = () => {
    this.setState({ showFields: this.state.possibleFields})
  }

//------------------------------------------------------------

  toggleStates = (e) => {
    if ((this.state.states).includes(e.target.value)) {
      this.setState({
        states: this.state.states.filter((value) => value !== (e.target.value)),
        
      });
    } else {
      this.setState({ 
        states: [...this.state.states, e.target.value],
        
      })
    }
  };

  toggleFields = (e) => {
    if ((this.state.fields).includes(e.target.value)) {
      this.setState({
        fields: this.state.fields.filter((value) => value !== (e.target.value)),
        showFields: this.state.showFields.filter((value) => value !== (e.target.value))
      });
    } else {
        this.setState({ 
          fields: [...this.state.fields, e.target.value],
          showFields: [...this.state.showFields, e.target.value]
        })
    }
  };

  render() {

    const styleForGrid = {
      display: 'grid',
      'gridTemplateColumns': `repeat(${this.state.states.length}, minmax(150px, 1fr)`,
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
      if (thisState.showFields.includes(fieldName)) {
        var arrow = downArrow
        var handleClickShow = () => this.collapseField(fieldName)
      } else {
        var arrow = upArrow
        var handleClickShow = () => this.openField(fieldName)
      }

      showFieldsContent.push(<div className='field-title'>{fieldName}<img className='arrows' alt='' src={arrow} onClick={handleClickShow} /></div>)
        var infoDiv = []
        //loop through states
        thisState.states.forEach( (stateName, columnNumber) => {
          if (thisState.loaded[fieldName + stateName] && thisState.showFields.includes(fieldName)) {
            var content = thisState.info[fieldName][stateName]
            
          } else {
            var content = ' \n '
          }
          
          if (columnNumber % 2 === 0) {
            infoDiv.push(<div className='state-info'>{ReactHtmlParser(content)}</div>)
          } else {
            infoDiv.push(<div className='state-info gray-bgc'>{ReactHtmlParser(content)}</div>)
          }
        })
        showFieldsContent.push(<div style={styleForGrid}>{infoDiv}</div>)

    })
      
    const handleStuck = target => {
      // console.log(`Stuck!`, target)
      // target.style.backgroundColor = '#4caf50'
      // target.style.boxShadow =
      //   '0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4)'
    };
    const handleUnstuck = target => {
      // console.log(`UNstuck!`, target)
      // target.style.backgroundColor = 'rebeccapurple'
      // target.style.boxShadow = ''
    };
    const handleChange = ({ target, type }) => {
      if (type === "stuck") {
        // console.log(`Changed!!`, type, target);
        target.style.boxShadow =
          "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4)";
      } else {

        target.style.boxShadow = "";
      }
    };
  
    const stickySectionElements = function() {
      return(
      <StickyBoundary
        // style={{ height: "55vh" }}
        onStuck={handleStuck}
        onUnstuck={handleUnstuck}
        onChange={handleChange}
      >
        <Sticky as="h1">
          <div className='state-names' style={styleForGrid}>
            {stateNames}
          </div >
        </Sticky>
        <div className='background-white'>
          {showFieldsContent}
        </div>
      </StickyBoundary>
    )
    
  }

  


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
        </ul>
      )
    })    


    return(
      <div>
        <div className="form nav-main">
          <div></div>
          
         
          <main>
            <img className='banner' src={heroBanner} alt=""/>

            <div className='grid-for-buttons'>
              
            <button className='button-looks share-print-save'
              onClick={() =>  navigator.clipboard.writeText(window.location.href)}
            > <img className="share-icon" src={shareIcon} alt=""/>
              <label className='share-label'>Share</label>
            </button>
            <div className='button-looks all' onClick={this.showAllFields}><img className='all-icon'alt='' src={downArrow} onClick={this.showAllFields} /><label>Expand All</label></div>
            <div className='button-looks all' onClick={this.unshowAllFields}><img className='all-icon'alt='' src={upArrow} onClick={this.unshowAllFields} /><label>Collapse All</label></div>
            </div>
          
            
          </main>
          <aside className='nav'>

            <aside className='nav-states'>
              <h3>States</h3>
              {showStatesCheckBoxes}
            </aside>
            <aside className='nav-fields'>
              <h3>Topics</h3>
              {showFieldsCheckBoxes}
            </aside>
          </aside>
          <main className='content-table'>
            <StickyViewport as="main" className="content">
              {stickySectionElements()}
            </StickyViewport>
          </main>
        </div>
      </div>
    );
  };
};



export default Form;