import React, {useState, Component} from 'react';
import '../CSS/Home.css';


/*
export default function CompanyName (){

    const [compName, setCompName] = useState('your company');
      

    return(
            <div className='now-hiring'>
                {compName}

            </div>
        
    )
}
*/


export default class CompanyName extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {compName: 'your company', 
                    ip: 'http://ip-api.com/json/208.73.132.195',
                    apiSuccess: 'fail'};

    }
  
    componentDidMount() {
      fetch(this.state.ip)
      .then(response => response.json())
      .then(data => this.setState({apiSuccess: data.status, compName: data.org}))

      .catch(error =>{
        console.log(error);
      });
    }

      render () {
        //console.log(this.state.apiSuccess);
        if(this.state.apiSuccess == 'fail'){
            this.state.compName = 'your company';
        }

          return(
        <div className='now-hiring'>
        {this.state.compName} 

    </div>
      );}
    
  }