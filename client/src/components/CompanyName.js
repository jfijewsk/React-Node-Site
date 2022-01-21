import React, {useState, Component} from 'react';

export default class CompanyName extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {compName: 'your company', 
                    apiAddress: '/api/json',
                    apiSuccess: 'fail'};
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
        if(this.state.apiSuccess == 'fail' || this.state.compName == this.state.ispName){
            this.state.compName = 'your company';
        }

          return(
        <>
        {this.state.compName} 

    </>
      );}
    
  }