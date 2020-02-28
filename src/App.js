import React from 'react';
import './App.css';
import {useState} from 'react'
import { useMediaQuery } from 'react-responsive'


// axios calls
import getDriversStandingsData from './f1_data_calls/getDriversStandings'
import getConstructorStandingsData from './f1_data_calls/getConstructorStandings'
import getScheduleData from './f1_data_calls/getSchedule'


// components
import TopMenu from './components/TopMenu'
import StandingsArea from './components/StandingsArea'
import StandingsAreaSmall from './components/StandingsAreaSmall'



function App() {

  // states

const [driverStandingsData, setDriverStandingsData] = useState("")
const [constructorStandingsData, setConstructorStandingsData] = useState("")
const [scheduleData, setScheduleData] = useState("")

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
  setDriverStandingsData("")
  setConstructorStandingsData("")
  setScheduleData("")
  let currentYear = Number(optionYear)
  primarySetDriversStandingsData(currentYear)
  primarySetConstructorsStandingsData(currentYear)
  primarySetScheduleData(currentYear)
}

// media queries

const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1000px)'})
const isTabletOrMobile = useMediaQuery({query: '(max-width: 1000px)'})

// App:

  return (

    <div className="App">

      {isDesktopOrLaptop && 
        <>
        <TopMenu handleAPICalls={handleAPICalls} />
        <StandingsArea 
          driverStandingsData={driverStandingsData}
          constructorStandingsData={constructorStandingsData}
          scheduleData={scheduleData}
        />
        </>
      }

      {isTabletOrMobile &&
        <>
          <TopMenu handleAPICalls={handleAPICalls} />
          <StandingsAreaSmall 
          driverStandingsData={driverStandingsData}
          constructorStandingsData={constructorStandingsData}
          scheduleData={scheduleData}
        />
        </>
      }

    </div>

  )
}



export default App



/* 



*/
