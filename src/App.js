import React from 'react';
import './App.css';
import {useState} from 'react'
import Button from '@material-ui/core/Button'
// axios calls
import getDriversStandingsData from './f1_data_calls/getDriversStandings'
import getConstructorStandingsData from './f1_data_calls/getConstructorStandings'
import getScheduleData from './f1_data_calls/getSchedule'


// components
import DriverStandingsTable from './components/DriverStandingsTable'
import ConstructorsStandingsTable from './components/ConstructorsStandingsTable'
import ScheduleTable from './components/ScheduleTable'


// primary calls

const dummyButtomStyle = {
  height:"300px",
  width:"300px"
}

function App() {
// states

const [driverStandingsData, setDriverStandingsData] = useState("driversDataWillComeHere")
const [constructorStandingsData, setConstructorStandingsData] = useState("constructorDataWillComeHere")
const [scheduleData, setScheduleData] = useState("scheduleDataWillComeHere")
const [year, setYear] = useState(2011)


// handlers

async function primarySetDriversStandingsData() {
  setDriverStandingsData(await getDriversStandingsData(year))
}

async function primarySetConstructorsStandingsData() {
  setConstructorStandingsData(await getConstructorStandingsData(year))
}

async function primarySetScheduleData() {
  setScheduleData(await getScheduleData(year))
}

// App:

  return (
    <div className="App">
      <Button onClick={primarySetDriversStandingsData} style={dummyButtomStyle} variant="contained">get drivers data</Button>
      <Button onClick={primarySetConstructorsStandingsData} style={dummyButtomStyle} variant="contained">get constructor data</Button>
      <Button onClick={primarySetScheduleData} style={dummyButtomStyle} variant="contained">get schedule data</Button>
      <DriverStandingsTable driverStandingsData={driverStandingsData} />
      <ConstructorsStandingsTable constructorStandingsData={constructorStandingsData} />
      <ScheduleTable scheduleData={scheduleData} />
    </div>
  )
}

export default App

