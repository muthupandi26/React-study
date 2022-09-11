import React, { Component } from 'react'
import { userContext, channelContext } from './ComponentC'

class ComponentE extends Component {
  render() {
    return (
      <div>
        <userContext.Consumer>
            {
                user => {
                    return (
                        <channelContext.Consumer>
                            {
                                channel => {
                                    return <div>User Context value {user} {channel} </div>
                                }
                            }
                        </channelContext.Consumer>
                    ) 
                }
            }
        </userContext.Consumer>
      </div>
    )
  }
}

export default ComponentE