import React, { useState } from "react"
import my_song from "../static/Click.mp3"
import styles from "../App.module.css"

const initialState = {
  hours: 0,
  minute: 0,
  seconds: 0,  
  aux: 0
}

const Cronometro = () => {
  const [times, setTimes] = useState(initialState) 
  const [counter, setCounter] = useState({intervalId: 0})
  const [aux, setAux] = useState(0)

  function padLeadingZeros(size) {
    times.seconds = times.seconds + "";
    while (times.seconds.length < size) times.seconds = "0" + times.seconds;
    times.minute = times.minute + "";
    while (times.minute.length < size) times.minute = "0" + times.minute;
    times.hours = times.hours + "";
    while (times.hours.length < size) times.hours = "0" + times.hours;
  }

  const changetimes = () => {
    times.seconds++;
    if(times.seconds > 60){
      times.seconds = 0;
      times.minute++
    }
    if(times.minute > 60){
      times.minute = 0
      times.hours++
    }
  }

  const countTimes = () =>{
    changetimes()
    setTimes({
      ...times,
      seconds: times.seconds,
      minute: times.minute,
      hours: times.hours,
    })
  }
  
  const resetTime = () =>{
    setTimes({
      ...times,
      seconds: 0,
      minute: 0,
      hours: 0
    })
    stop()
  }


  const start = () =>{
    let song = new Audio(my_song)
    song.play()
    setAux(1)
    let intervalId = (setInterval(countTimes, 1000))
    setCounter({intervalId: intervalId})
  }

  const stop = () => {
    clearInterval(counter.intervalId)
    setAux(0)
  }

  padLeadingZeros(2)

  let click
  if(aux === 0){
    click = <button type="button" onClick={() => start()}>Start</button>
  }else{
    click = <button type="button" onClick={() => stop()}>Stop</button>
  }


  const textotimes = times.hours + ":" + times.minute + ":" + times.seconds;
  return(
    <div class = {styles.timer}>
      <h1>{textotimes}</h1>
      <div class = {styles.button}>
        {click}
        <button type="button" onClick={() => resetTime()}>Reset</button>
      </div>
    </div>
  )

}

export default Cronometro