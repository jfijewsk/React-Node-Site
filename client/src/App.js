import './CSS/App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Login from './components/Login';
import SiteDetails from './components/SiteDetails';
import Visitors from './components/Visitors';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

    return (
      <Router>
        <div className="App">
          <Navbar>

          </Navbar>

          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route  path='/aboutMe' element={< AboutMe />}></Route>
            <Route  path='/siteDetails' element={< SiteDetails />}></Route>
            <Route  path='/login' element={< Login />}></Route>
            <Route  path='/visitors' element={< Visitors />}></Route>
            
            <Route path="*" element={< Home />}> </Route>
            </Routes>     
           </div>
      </Router>
    )
  
    
}

export default App;