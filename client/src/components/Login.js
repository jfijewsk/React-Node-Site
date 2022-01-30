import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css'

export default function Login() {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()


  const handleUserChange = event => {
    setUser(event.target.value)
  };

  const handlePassChange = event => {
    setPass(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/authenticate', { user: user, pass: pass })
      .then((result) => {
        console.log(result.status);
        if (result.status >= 200 && result.status < 300) {
          return navigate('/visitors')

        }

      }).catch(err => {
        console.log(err.response.status);

        if (err.response.status === 401) {
          console.log("wrong credientals");
          setError(<p className="login_error">Invaild credientials.<br />
            You are either not me or I mistyped like a dummy!</p>, { message: error });

        }
        else {
          console.log("Error. Please try again later");
          setError('apiError', { message: error });

        }

      });



  }

  const handleBack = (event) => {
    navigate(-1)
  }


  return (
    <div className="form_body">

      <form onSubmit={handleSubmit}>
        <p className="form_header">Login</p>
        <label>
          <p />
          <input type="text"
            onChange={handleUserChange}
            value={user}
            placeholder="Username"
            className="login_textbox"
            autoComplete="off"
          />
        </label>
        <label>
          <p />
          <input type="password"
            onChange={handlePassChange}
            value={pass}
            placeholder="Password"
            className="login_textbox"
            autoComplete="off"
          />
        </label>
        <p />
        <button type="submit" className="login_btn">Login</button>
      </form>

      <label className="login_status">{error}
      </label>

      <div className="login_message">
        This is for me to view traffic data for the site and to interact with my database. If you are not me, you probably want to go back.
       </div>

       <button className="back_btn" onClick={handleBack}>Back</button>


    </div>
  )


}