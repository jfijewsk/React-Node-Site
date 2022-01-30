import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Visitors() {

    const [visits, setVisits] = useState();


    const clearDatabase = async () => {
        await axios.get('/api/clear')
            .then(res => {
                return <>Database cleared!</>
            })
        refreshPage()
    }

    function FormatData({ visit }) {
        return (
            <>
                {visit.map(visit => (
                    <li key={visit._id}>{visit.ip} {visit.org} {visit.date}</li>

                ))}
            </>
        );
    }

    function GetData() {

        // Data does't start loading
        // until *after* getData is mounted

        // Counter for only calling when something changed
        useEffect(() => {
            if (!visits) {
                fetch("/api/visitors")
                    .then(res => res.json())
                    .then(data => setVisits(data));
            }
        }, []);

        return (
            <div>
                <div>
                    {visits && <FormatData visit={visits} />}
                </div>
            </div>

        )
    }

    function refreshPage() {
        window.location.reload(false);
    }


    return (
        <div>

            <button onClick={clearDatabase}>
                Clear Database
            </button>
            <button onClick={refreshPage}>
                Refresh
            </button>
            <br />

            <div>
                <GetData />
            </div>



        </div>
    )

}