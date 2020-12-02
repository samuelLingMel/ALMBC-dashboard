import React from 'react';
import Form from './Form.js'
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import { BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom'
import { useParams } from "react-router";

// function getParams() {
//   let {locations, topics} = useParams()
//   return([locations, topics])
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      didPropsWork: props
    }; 
  };

  // componentDidMount() {
  //   let {locations, topics} = useParams()
  //   this.setState = {state: [locations, topics]}
  // }

  render() {
    return(
      <div className="App">
          <Header />
          <Router>
            <Switch>
              <Route path="/:queryString" component={Form}/>
              {/* <Route path="/"
                children={<Form />} /> */}
              {/* </Route> */}
            </Switch>
          </Router>
          <Footer />
      </div>
    );
  };
};


export default App;
