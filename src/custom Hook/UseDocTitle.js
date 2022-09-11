import {useEffect} from 'react'

function UseDocTitle(count) {
    useEffect(() => {
        document.title =  `count - ${count}`
    }, [count])
}

export default UseDocTitle