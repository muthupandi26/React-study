import React, {useContext} from 'react'
import {userContext, channelContext} from './ComponentC'


function ComponentD() {

    const user = useContext(userContext)
    const channel = useContext(channelContext)

  return (
    <div>
        {user} and {channel}
    </div>
  )
}

export default ComponentD