import React from 'react';

import './Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  };

  render() {
    return(
      <footer>
        <p>Disclamer: The information published in this Dashboard is made available by ALMBC as a general reference source on the understanding that users exercise their own skill and care with respect to its use. Before relying on this material in any important matter, users should carefully evaluate the source, accuracy, currency, completeness and relevance of the information for their purposes and should obtain appropriate professional advice relevant to their particular circumstances. Links to other websites are linked "as is", are provided for convenience and do not constitute endorsement or approval by ALMBC of material at those sites. ALMBC does not have control or responsibility for these external information sources. By accessing information at or through this Dashboard each user waives and releases ALMBC to the full extent permitted by law from any and all claims relating to the usage of the material made available through this Dashboard.</p>
        <p>This dashboard would not be possible without the tireless work of the following ALMBC Members - please reach out via contact@almbc.org.au if you would like to contribute or have feedback.</p>
        <p>Member Resources Working Group Members		
Christina Allen	Chair, Member Resources Working Group	https://www.linkedin.com/in/christina-allen-media/
James Arnold-Garvey 	Deputy Chair, Member Resources Working Group	http://www.architectsofentertainment.com/
Nick Horvat 	Secretary, Member Resources Working Group	https://www.fivefourentertainment.com.au/
Lance Fox	Working Group Member - ACT	https://www.thebasementcanberra.com.au/
Jane Slingo	Working Group Member - NSW	https://www.electronicmusicconference.com/
Pixie Weyand	Working Group Member - QLD	http://thezoo.com.au/
Sam Nardo	Working Group Member - NSW	https://www.century.com.au/
Russell Temple	Working Group Member - NT	
Sharlene Harris	Working Group Member - Vic	https://www.alhgroup.com.au/
Tilly Mckay	Working Group Member - Vic	https://www.linkedin.com/in/tilly-mckay-0263672a/
Marcus Sarich	Working Group Member - WA	https://www.indianoceanhotel.com.au/
Ross Macpherson	Working Group Member - WA	https://www.macromusic.com.au/
Brendan Self	Working Group Member - TAS	https://vandemoniantouring.com.au/</p>   
      </footer>
    );
  };
};


export default Footer;