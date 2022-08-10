import React, { useState } from "react"

const initialState = {
  hours: 0,
  minute: 0,
  seconds: 0  
}

const Cronometro = () => {
  const [time, setTime] = useState(initialState) 

  const handleClick = (e) => {
    setInterval(() => {

      var updateMinute = {}
      var updateSeconds = {}
      var seconds = (e.target.value)
      
      if (seconds > 5){
        seconds = 0;  
        updateMinute = {minute: time.minute + 1}
        updateSeconds = {seconds: 0}
        e.target = 0
        setTime(time => ({
          ...time,
          ...updateMinute,
          ...updateSeconds
        }));
      }else{ 
        updateSeconds = {seconds: e.target.value++}
        setTime(time => ({
          ...time,
          ...updateSeconds
        }));
      }
    },1000);
  }

  /*setInterval(() => {
    setTime(time.times.seconds + 1)
  }, 1000)}*/

  const textoTime = time.hours + ":" + time.minute + ":" + time.seconds;
  return(
    <div>
      <h1>{textoTime}</h1>
      <button type="button" onClick={e => handleClick(e)}>Start</button>
    </div>
  )

}

export default Cronometro