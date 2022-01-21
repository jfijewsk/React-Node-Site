import React, {Component} from 'react';
import './CSS/App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Home from './components/Home';


import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar>

          </Navbar>

          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route  path='/aboutMe' element={< AboutMe />}></Route>
            <Route path="*" element={< Home />}> </Route>
            </Routes>     
           </div>
      </Router>
    )
  }
    
}






export default App;