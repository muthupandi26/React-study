import React, { useState } from 'react'

const initialState = ['just', 'check'];

function ArrayUseState() {
    
    const [persons, setPersons] =useState(initialState);

    const handleClick = () => {
        // persons.push('muthu')
        // persons.push('pandi')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push("muthu")
        newPersons.push("pandi")
        setPersons(newPersons)
    }

    console.log("objectUseState Render");

  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {persons.map((person) => (
            <div key={person}>{person}</div>
        ))}
    </div>
  )
}

export default ArrayUseState