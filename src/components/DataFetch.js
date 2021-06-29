import React, { useState, useEffect } from 'react';

const DataFetch = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums').then(resp => resp.json())
            .then(mahdi => setTodos(mahdi)).catch(err => console.log(err))
    })
    return(
        <div style={{textAlign: 'center'}}>
            {
               todos && todos.length > 0 
               ?
               todos.map((item, index) => {
                return <div key={index}>{item.title}</div>
               })
               :
               <h4>Loading Todos....</h4>
            }
        </div>
    )
}

export default DataFetch