import React, { useState } from 'react'
import UseInput from './UseInput'

function UserForm() {

    // const [firstname, setFirstName] = useState(' ') // react hooks
    // const [lastname, setLastName] = useState(' ')  // react hooks

    const [firstname, bindFirstName, resetFirstName] = UseInput('') // custom hook
    const [lastname, bindLastName, resetLastName] = UseInput('') // custom hook 

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstname} and ${lastname} `)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <div>
                <label>First Name</label>
                {/* <input value={firstname} onChange = {e => setFirstName(e.target.value)} type = "text" /> react Hook */}
                <input value={firstname} {...bindFirstName} type = "text" />
            </div>

            <div>
                <label>Last Name</label>
                {/* <input value={lastname} onChange = {e => setLastName(e.target.value)} type = "text" />  react Hook */}
                <input value={lastname} {...bindLastName} type = "text" />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm