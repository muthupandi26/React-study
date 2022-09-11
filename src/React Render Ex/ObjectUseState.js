import React, {useState} from 'react'

const initialState = {
    fname : 'Bruce',
    lname : 'Wayne',
}

function ObjectUseState() {

    const [person, setPerson] = useState(initialState)

    const changeName = () =>  {
        // person.fname ='muthu'
        // person.lname = 'pandi'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = "muthu";
        newPerson.lname = "pandi";
        setPerson(newPerson)
    }
    console.log("ObjectUseState render");

  return (
    <div>
        <button onClick={changeName}> {person.fname} {person.lname} </button>
    </div>
  )
}

export default ObjectUseState