import React, { useState } from 'react';
import './css/App.css'
const axios = require("axios").default;

function App() {
    const [percentage, setPercentage] = useState('');
    // let name = React.createRef()
    // let crushName = React.createRef()
    const [yourName,setName] = useState('')
    const [crush,setCrush] = useState('')

    /**
     * Don't need to change the api call. it's perfeactly works
     * The issue is when in params sname set to name and fname set to
     * crushName.
     * @issue input issue need to be fixed
     */
    function handleClick() {
       
        console.log(yourName)
        console.log(crush)
        let options = {
           
            method: 'GET',
            url: 'https://love-calculator.p.rapidapi.com/getPercentage',
            params: { sname: {yourName}, fname: {crush} }, 
            headers: {
                'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
                'x-rapidapi-key': 'ed794d5443msh73584a3c4a3274ap18cd2bjsn8819a8716de0'
            }
        };

        axios.request(options).then(function (res) {
            
            //cont print percentage though full object are store in res.data !!!!!!!!!!  :'(
            setPercentage(res.data)
            console.log(res.data);
        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <div className='container'>
            {/* <input ref={name} placeholder='Your name' />
            <input ref={crushName} placeholder="Your Crush's  name" /> */}
            <input type="text" onChange={e=>setName(e.target.value)} />
            <input type="text" onChange={e=>setCrush(e.target.value)} />
            <button onClick={handleClick}>Submit</button>

            <div className='show-result'>
                <p>{percentage}</p>
            </div>
        </div>
    );
}

export default App;