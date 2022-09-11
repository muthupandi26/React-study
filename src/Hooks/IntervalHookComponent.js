import React, {useEffect, useState} from 'react'

function IntervalHookComponent() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count+1);
        // setCount(prevCount => prevCount + 1) //if we go on this method we need not to give an depedency as empty "count"
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () =>{
            clearInterval(interval);
        }

    }, [count])

  return (
    <div> {count} </div>
  )
}

export default IntervalHookComponent