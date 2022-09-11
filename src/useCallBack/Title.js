import React from 'react'

function Title() {

  console.log("i am title")
  return (
    <div>I am title of use call back</div>
  )
}

export default React.memo(Title)