import React from 'react';
import './App.css';
import {useState} from 'react'
import Button from '@material-ui/core/Button'
// axios calls
import getDriversStandingsData from './f1_data_calls/getDriversStandings'
// components
import DriverStandingsTable from './components/DriverStandingsTable'


// primary calls

const dummyButtomStyle = {
  height:"800px",
  width:"600px"
}

function App() {
// states

const [driverStandingsData, setDriverStandingsData] = useState("driversDataWillComeHere")

// handlers

async function primarySetDriversStandingsData() {
  setDriverStandingsData(await getDriversStandingsData())
}


// App:

  return (
    <div className="App">
      <Button onClick={primarySetDriversStandingsData} style={dummyButtomStyle} variant="contained">get dummy data</Button>
      <DriverStandingsTable  driverStandingsData={driverStandingsData}/>    
    </div>
  )
}

export default App;
