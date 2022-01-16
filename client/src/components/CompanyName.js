import React, {useState, Component} from 'react';
import '../CSS/Home.css';

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
      .then(data => this.setState({apiSuccess: data.status, compName: data.org}))

      .catch(error =>{
        console.log(error);
      });
    }

      render () {
        console.log("This is what react sees" + JSON.stringify(this.state));
        if(this.state.apiSuccess == 'fail'){
            this.state.compName = 'your company';
        }

          return(
        <>
        {this.state.compName} 

    </>
      );}
    
  }