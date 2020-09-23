import React from 'react';

import './App.css';

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

  handleChange = (e) => {
    this.setState({ [e.target.className]: e.target.value })
  }

  space = () => {
    if (this.state.state) {
      return(
        <div>The space is 
          <select onChange={this.handleChange} class="space">
            <option value="start">space in square meters</option>
            <option value="10>">10 or less</option>
            <option value="50>">50 or less</option>
            <option value="100>">100 or less</option>
            <option value="200>">200 or less</option>
            <option value="200<">more than 200</option>
          </select>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
  outdoorOrIndoor = () => {
    if (this.state.state) {
      return(
        <div>The event is held 
          <select onChange={this.handleChange} class="outdoorOrIndoor">
            <option value="start">outdoor/indoor</option>
            <option value="outdoors">outdoors</option>
            <option value="indoors">indoors</option>
          </select>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
  event = () => {
    if (this.state.state) {
      return(
        <div>The type of event is a
          <select onChange={this.handleChange} class="event">
            <option value="start">event name</option>
            <option value="concert">concert</option>
            <option value="restaurant">restaurant</option>
            <option value="other">other</option>
          </select>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }

  render() {
    return(
      <div className="App">
        <h1>Risk Assessment Form</h1>
        <div>I am located in 
          <select onChange={this.handleChange} class="state">
            <option value="start">pick a state</option>
            <option value="vic">Victoria</option>
            <option value="nsw">New South Whales</option>
            <option value="act">Australian Capital Territory</option>
            <option value="nt">Northern Territory</option>
            <option value="tas">Tasmania</option>
            <option value="wa">Western Australia</option>
            <option value="qld">Queensland</option>
          </select>
        </div>
        {this.space()}
        {this.event()}
        {this.outdoorOrIndoor()}
      </div>
    );
  }
}

let data = {
  federal: {
    phase: ['Step 3', 'https://www.health.gov.au/sites/default/files/documents/2020/06/3-step-framework-for-a-covidsafe-australia-3-step-framework-for-a-covidsafe-australia_2.pdf'],
    starts: 'Friday 26 June',
    eventsPermitted: 'Yes, as determined by states & territories. Note restrictions may follow the AHPPC Statement on high risk environments.',
    dancing: 'No as per AHPPC statement',
    safetyGuidelines: [
      ['AHPPC Statement on very high risk environments – nightclubs, dance venues, and large unstructured outdoor events','https://www.health.gov.au/news/australian-health-protection-principal-committee-ahppc-statement-on-very-high-risk-environments'],
      ['SafeWork Australia Guiding Principles','https://www.nsw.gov.au/sites/default/files/2020-06/national-covid-19-safe-workplace-principles_0.pdf']
    ],
    borderControls: 'Each state or territory has its own entry requirements and travel restrictions. You must comply with any border rules of the state or territory that you are entering or leaving.',
    additionalSupport: ['Payments and Services during COVID-19', 'https://www.servicesaustralia.gov.au/individuals/subjects/payments-and-services-during-coronavirus-covid-19']
  }

}

export default App;
