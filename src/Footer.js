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

          this.setState({ disclaimer: (result.posts[0].content)})
          this.setState({ thankYou: (result.posts[1].content)})
          this.setState({ loaded: true})
        }
      )
  }

  

  render() {
    var loading = () => {
      if (this.state.loaded) {
        return([ReactHtmlParser(this.state.disclaimer), ReactHtmlParser(this.state.thankYou)])
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