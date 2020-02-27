import React from 'react';
import './App.css';
import {useState} from 'react'


// axios calls
import getDriversStandingsData from './f1_data_calls/getDriversStandings'
import getConstructorStandingsData from './f1_data_calls/getConstructorStandings'
import getScheduleData from './f1_data_calls/getSchedule'



// components
import DriverStandingsTable from './components/DriverStandingsTable'
import ConstructorsStandingsTable from './components/ConstructorsStandingsTable'
import ScheduleTable from './components/ScheduleTable'
import TopMenu from './components/TopMenu'
import StandingsArea from './components/StandingsArea'
import TweetsList from './components/TweetsList'


function App() {
// states

const [driverStandingsData, setDriverStandingsData] = useState("driversDataWillComeHere")
const [constructorStandingsData, setConstructorStandingsData] = useState("constructorDataWillComeHere")
const [scheduleData, setScheduleData] = useState("scheduleDataWillComeHere")


// handlers

async function primarySetDriversStandingsData(year) {
  setDriverStandingsData(await getDriversStandingsData(year))
}

async function primarySetConstructorsStandingsData(year) {
  setConstructorStandingsData(await getConstructorStandingsData(year))
}

async function primarySetScheduleData(year) {
  setScheduleData(await getScheduleData(year))
}

const handleAPICalls = (optionYear) => {
  let currentYear = Number(optionYear)
  primarySetDriversStandingsData(currentYear)
  primarySetConstructorsStandingsData(currentYear)
  primarySetScheduleData(currentYear)
}



// App:

  return (

    <div className="App">

      <TopMenu handleAPICalls={handleAPICalls} />
      <StandingsArea 
        driverStandingsData={driverStandingsData}
        constructorStandingsData={constructorStandingsData}
        scheduleData={scheduleData}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          /* alignContent: "flex-start", */
          alignItems: "baseline",
          justifyContent: "space-between"
        }    
      }
      >
          
      </div>

      {/* <div>
          <TweetsList />
        </div> */}

    </div>

  )
}



export default App

