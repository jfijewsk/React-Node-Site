import React from 'react';

export default class CompanyName extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {compName: 'Your Company', 
                    apiAddress: '/api/json',
                    apiSuccess: 'fail',
                    ispName: 'unknown'};
    }
  
    componentDidMount() {
      fetch(this.state.apiAddress)
      .then(response => response.json())
      .then(data => this.setState({apiSuccess: data.status, compName: data.org, ispName: data.isp}))

      .catch(error =>{
        console.log(error);
      });
    }

      render () {
        console.log("This is what react sees" + JSON.stringify(this.state));
        console.log("/n" + JSON.stringify(this.state.compName));

        var cleanedName = this.state.compName.replace(/,?\s*(llc|inc|co)\.?$/i, "")
        console.log("clean name  " + cleanedName)
        console.log("ispname " + this.state.ispName)
        var cleanedISP = this.state.ispName.replace(/,?\s*(llc|inc|co)\.?$/i, "")

        if(this.state.apiSuccess === 'fail' || cleanedName === cleanedISP){
          cleanedName = "Your Company"
        }

        else {
          cleanedName = this.state.compName.replace(/,?\s*(llc|inc|co)\.?$/i, "")
        }


          return(
        <>
        {cleanedName} 

    </>
      );}
    
  }