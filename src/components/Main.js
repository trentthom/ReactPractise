import React from 'react'

function Main() {
  const first = 'Trent'
  const last = 'Thompson'

  const date = new Date()
  const dateNumber = date.getDate()
  const hours = date.getHours() //this variable holds the 24 hour clock
  let timeOfDay
  let dateSuffix

  if (dateNumber == 1){
    dateSuffix = `${dateNumber}st `
  } else if (dateNumber == 2){
      dateSuffix = `${dateNumber}nd`
  } else if (dateNumber == 3){
    dateSuffix = `${dateNumber}rd`
  } else {
    dateSuffix = `${dateNumber}th`
  }


  if (hours < 12){
    timeOfDay = 'Morning'
  } else if (hours >= 12 && hours < 18){
    timeOfDay = '=Afternoon'
  } else {
    timeOfDay = 'Night'
  }

  const h1Style = {
    color: "orange",
    fontFamily: "arial",
    fontWeight: "italic"
  }

  return(
    <div>
      <h1 style={h1Style}>Good {timeOfDay} {first}</h1>
      <h1>{`Feb ${dateSuffix}`}</h1>
      <h1> {`${first} ${last}`}   </h1>
      <h2>
        <ul>
          <li>The</li>
          <li>Davo</li>
          <li>Markets</li>
        </ul>
      </h2>
    </div>
  )
}

export default Main
