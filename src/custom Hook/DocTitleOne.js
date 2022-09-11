import React, {useState, useEffect} from 'react'
import UseDocTitle from './UseDocTitle';

function DocTitleOne() {

    const [count, setCount] = useState(0)

    UseDocTitle(count);

  return (
    <div>
        <button onClick={() => setCount(count + 1)} > count - {count} </button>
    </div>
  )
}

export default DocTitleOne