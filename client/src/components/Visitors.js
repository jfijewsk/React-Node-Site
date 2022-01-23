import React, { useState} from 'react';
import Login from "./Login";

export default function Visitors() {

    const [token, setToken] = useState();
    const [message, setMessage] = useState();
    //if(!token){
    //    return <Login setToken={setToken}/>
   // }
    const getData = () => {
        fetch("/api/visitors")
        .then(res => res.text())
        .then((res) => setMessage(res))
        .catch(err => console.log(err));

    }

    getData()

    return (
        

        <div>
            {message}
            This is the visitors page

        </div>
    )

}