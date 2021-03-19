import React from 'react';
import Form from './Form.js'
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import { BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      didPropsWork: props
    }; 
  };

  render() {
    return(
      <div className="App">
          <Header />
          <Router>
            <Switch>
              <Route path="/:queryString" component={Form}/>
              <Route path="/" component={Form}/>
            </Switch>
          </Router>
          <Footer />
      </div>
    );
  };
};


export default App;
