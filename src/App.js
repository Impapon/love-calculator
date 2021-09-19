import React, { useState } from 'react';
import './css/App.css'
const axios = require("axios").default;

function App() {
    const [percentage, setPercentage] = useState(0);
    let name = React.createRef()
    let crushName = React.createRef()


    /**
     * Don't need to change the api call. it's perfeactly works
     * The issue is when in params sname set to name and fname set to
     * crushName.
     * @issue input issue need to be fixed
     */
    function handleClick() {
        let options = {
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: { sname: 'mahadi', fname: 'hasan' }, 
            headers: {
                'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                'x-rapidapi-key': 'ed794d5443msh73584a3c4a3274ap18cd2bjsn8819a8716de0'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <div className='container'>
            <input ref={name} placeholder='Your name' />
            <input ref={crushName} placeholder="Your Crush's  name" />
            <button onClick={handleClick}>Submit</button>

            <div className='show-result'>
                <p>{percentage}</p>
            </div>
        </div>
    );
}

export default App;