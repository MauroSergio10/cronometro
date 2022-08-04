import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CronometroScreen from './screens/cronometroScreen'

const Rota = () =>{
    return(
        <BrowserRouter>
            <Routes>    
                <Route exact path = '/' element={<CronometroScreen/>}/>
            </Routes>
        </BrowserRouter>
    )


}

export default Rota;