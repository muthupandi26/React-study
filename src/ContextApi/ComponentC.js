import React from 'react'
import ComponentD from './ComponentD'

export const userContext = React.createContext()
export const channelContext = React.createContext()

function ComponentC() {
  return (
    <div>
        <userContext.Provider value={'Muthu'}>
            <channelContext.Provider value={'second try'}>
                <ComponentD />
            </channelContext.Provider>
        </userContext.Provider>
    </div>
  )
}

export default ComponentC