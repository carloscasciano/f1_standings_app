import React from 'react'
import DriverStandingsTable from './DriverStandingsTable'
import ConstructorsStandingsTable from './ConstructorsStandingsTable'
import ScheduleTable from './ScheduleTable'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles({
    columnAreaStyle: {    
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "start"
    },
    titleStyle: {
        margin: 15
    },
    tabStyle: {
        marginTop: 10
    },
    summaryStyle: {  
        height: 60
    },
    heading: {
        
    },
    centralizer: {
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "start"
    }
})

const StandingsAreaSmall = (props) => {

    const driverStandingsData = props.driverStandingsData
    const constructorStandingsData = props.constructorStandingsData
    const scheduleData = props.scheduleData
    const classes = useStyles()

    return(
        <>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.summaryStyle}
                >
                    <Typography >Constructors</Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails className={classes.centralizer}>
                    <div className={classes.columnAreaStyle}>   
                        <ConstructorsStandingsTable constructorStandingsData={constructorStandingsData}/>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.summaryStyle}
                >
                    <Typography >Drivers</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.centralizer}>
                    <div className={classes.columnAreaStyle}>   
                        <DriverStandingsTable driverStandingsData={driverStandingsData} />
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.summaryStyle}
                >
                    <Typography >Schedule</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.centralizer}>
                    <div className={classes.columnAreaStyle}>   
                        <ScheduleTable scheduleData={scheduleData} />
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </>    
    )
}

export default StandingsAreaSmall