import React, {useState, useEffect} from 'react'

function HookComponentCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("i am useEffect");
        document.title = `Clicked ${count} times!`;
    }, [count])

  return (
    <div>
        <input type= "text" value={name} onChange = {e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)} > click {count} times </button>
    </div>
  )
}

export default HookComponentCounter