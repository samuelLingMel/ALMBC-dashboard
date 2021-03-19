import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 

import './Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disclaimer:'',
      thankYou: '',
      loaded: false
    };
  };

  componentDidMount() {
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/185189824/posts?category=Footnotes") 
    .then(res => res.json())
      .then(
        (result) => {

          const [disclaimerText, acknowledgementText] = result.posts[0].content.split('Acknowledgement')
          this.setState({ disclaimer: (disclaimerText)})
          this.setState({ thankYou: (acknowledgementText)})
          this.setState({ loaded: true})
        }
      )
  }

  

  render() {
    var loading = () => {
      if (this.state.loaded) {
        return(
          <div className="container">

        <div className="row">
          <div className="col-md-9 col-md-offset-3">
            <h2>Disclaimer</h2>
            {ReactHtmlParser(this.state.disclaimer)}
            <h2>Acknowledgement</h2>
            {ReactHtmlParser(this.state.thankYou)}
          </div>
        </div>
        </div>
)

      } else {
        return(<div>is Loading.....</div>)
      }
    }
    return(
      <footer>
        {loading()} 
      </footer>
    );
  };
};


export default Footer;
