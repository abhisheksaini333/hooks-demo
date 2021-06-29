import React, { useEffect } from 'react';

const Tick = () => {
    useEffect(() => { 
       // setInterval(() => {
            console.log("I am in componentDidMount")
        //}, 2000)
    });
    return (
        <>
            <h3>Tick</h3>
        </>
    )
}

export default Tick;