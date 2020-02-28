import React from 'react'
import DriverStandingsTable from './DriverStandingsTable'
import ConstructorsStandingsTable from './ConstructorsStandingsTable'
import ScheduleTable from './ScheduleTable'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    columnAreaStyle: {
        width: "33%"
    },
    titleStyle: {
        margin: 15
    }
})

const StandingsArea = (props) => {

    const driverStandingsData = props.driverStandingsData
    const constructorStandingsData = props.constructorStandingsData
    const scheduleData = props.scheduleData
    const classes = useStyles()

    return(
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <div className={classes.columnAreaStyle}>                    
                    <ConstructorsStandingsTable constructorStandingsData={constructorStandingsData}/>
                </div>
                <div className={classes.columnAreaStyle}>
                    <DriverStandingsTable driverStandingsData={driverStandingsData} />
                </div>
                
                <div className={classes.columnAreaStyle}>
                    <ScheduleTable scheduleData={scheduleData} />
                </div>            
            </Grid>      
        </>    
    )
}


export default StandingsArea