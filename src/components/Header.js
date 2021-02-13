import React from 'react'

function Header(){

  const aStyle = {
    borderRadius: "12px"
  }


  return(
    <header>
      <nav style={aStyle} className="nav"> {/*in-line styling. JSX expects an object.For readablility we save the object in a variable and use that variable inside of {} so that it inserts it in JSX */}
        <a  href="http://www.fillmurray.com">Click this</a>
      </nav>
    </header>
  )
}

export default Header
