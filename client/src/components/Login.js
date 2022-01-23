import React, { useState } from "react";
import axios from 'axios';
import { Navigate  } from 'react-router';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate()

    const handleUserChange = event => {
        setUser(event.target.value)
      };

      const handlePassChange = event => {
        setPass(event.target.value)
      };


      

      const handleSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
    
        axios.post('/api/authenticate', { user: user, pass: pass })
            .then((result) => {
                console.log(result.status);
                if(result.status >= 200 && result.status < 300){
                    return navigate('/visitors')

                }
                else if (result.status === 401){
                    console.log("wrong credientals");
                    
                }
                else{
                    console.log("Error. Please try again later");
                }
            }).catch(err => {
                console.log("I caught this error");
                console.log("Error. Please try again later");
                console.log(err);
                
            });
        

 
      }



    const auth = async () => {
        console.log('trying to auth');
        try {
          const res = await axios.get('/api/clear', { auth: { username: 'admin', password: '123' } });
          console.log(res.data);
        } catch (e) {
          console.log(e);
        }
      };

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" 
            onChange={handleUserChange}
            value={user}
            />
      </label>
      <label>
        <p>Password</p>
        <input type="password"
            onChange={handlePassChange}
            value={pass}
            />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
      
  )

  
}