import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import TodayIcon from '@material-ui/icons/Today'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Tooltip from '@material-ui/core/Tooltip'



import getCountryCode from '../code_logic/formatCountryCode'


const useStyles = makeStyles({

  countryIcon: {
    height: 64,
    width: 64,
  },
  paperStyle: {
    minWidth: 380,
    minHeight: 120,
    marginBottom: 10,
    margimTop: 5,
    display: "grid",
    gridGap: 0,
  },
  gpNameStyle: {
    gridRow: "1",
    gridColumn: "1/4",
    display: "flex",
    paddingLeft: 10,
    paddingTop: 15
  },
  gpFlagStyle: {
    gridColumn: "3/4",
    gridRow: "2/3"
  },
  gpDateTime: {
    display: "flex",
    gridRow: "2/4",
    gridColumn: "1/3",
    paddingBottom: 10
  },
  gpDetails: {
    gridRow: "3/4",
    gridColumn: "1/3"
  },
  gpWinners: {
    gridRow: "4",
    gridColumn: "1/4",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: 10
  },
  winnersMiniGroup: {
    display: "flex"
  },
  dateGroup: {
    paddingLeft: 30,
    display: "flex",
    alignItems: "center"
  }
})


const ScheduleTable = (props) => {
    
    const scheduleRows = props.scheduleData
    const classes = useStyles()

    if (typeof scheduleRows === 'string') {
        return (
          <>
            <p>No schedule data to render</p>
          </>
        )
    } else {
        return(
            <>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.gridPosition}
              >
                {scheduleRows.map(scheduleData => (
                  <Paper
                    key={scheduleData.gp}
                    className={classes.paperStyle}
                    elevation={5}
                  >
                    <div className={classes.gpNameStyle}>
                      <Typography variant="h6"><b>{scheduleData.circuit}</b></Typography>
                    </div>

                    <div className={classes.gpFlagStyle}>
                      <img src={`https://www.countryflags.io/${getCountryCode(`${scheduleData.country}`)}/flat/64.png`} 
                          className={classes.countryIcon} 
                          alt={scheduleData.gp}
                          onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/constructors_imgs/dummy_f1.png`}}
                          />
                    </div>

                    <div className={classes.gpDateTime}>
                      <div className={classes.dateGroup}>
                        {/* <TodayIcon></TodayIcon> */}
                        <Typography variant="body1"> {scheduleData.date} - {scheduleData.hour}  </Typography>
                        
                      </div>
                      
                    </div>

                    <div className={classes.gpWinners}>

                      <div className={classes.winnersMiniGroup}>

                        <Tooltip title="pole position" placement="top" arrow>
                          <EmojiFlagsIcon />      
                        </Tooltip>
                        <Typography variant="body1"> {scheduleData.polePosition} </Typography>

                       
                      </div>

                      <div className={classes.winnersMiniGroup}>
                        
                      <Tooltip title="race winner" placement="top" arrow>
                        <EmojiEventsIcon />
                      </Tooltip>
                        <Typography variant="body1"> {scheduleData.raceWinner} </Typography>
                      </div>

                      <a href={scheduleData.details} target="blank"><OpenInNewIcon /></a>
                      
                    </div>
                  </Paper>
                ))}
              </Grid>
                
            </>
        )
    }

    
}

export default ScheduleTable



/* 

<>
            <TableContainer component={Paper}>
              <Table  size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="left">Time</TableCell>
                    <TableCell align="left">Grand Prix</TableCell>
                    <TableCell align="left">Circuit</TableCell>
                    <TableCell align="left">Pole Position</TableCell>
                    <TableCell align="left">Winner</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {scheduleRows.map(row => (
                    <TableRow key={row.gp}>
                        <TableCell component="th" scope="row">{row.date}</TableCell>
                        <TableCell align="left">{row.hour}</TableCell>
                        <TableCell align="left">{row.gp}</TableCell>
                        <TableCell align="left">{row.circuit}</TableCell>
                        <TableCell align="left">{row.polePosition}</TableCell>
                        <TableCell align="left">{row.raceWinner}</TableCell>
                    </TableRow>
                ))}  
                </TableBody>
              </Table>
            </TableContainer>
            </>


*/







/* 



  const DriverStandingsTable = (props) => {
    const driversRows = props.driverStandingsData

    if (typeof driversRows === 'string') {
        return (
            <p>No data to render</p>
        )
    } else {
        return (

            <>
            <TableContainer component={Paper}>
              <Table  size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Constructor</TableCell>
                    <TableCell align="left">Wins</TableCell>
                    <TableCell align="left">Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {driversRows.map(row => (
                    <TableRow key={row.position}>
                        <TableCell component="th" scope="row">
                            {row.position}
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.constructor}</TableCell>
                        <TableCell align="left">{row.wins}</TableCell>
                        <TableCell align="left">{row.points}</TableCell>
                    </TableRow>
                ))}  
                </TableBody>
              </Table>
            </TableContainer>
            </>
            
          )
    }
       
}

export default DriverStandingsTable

 */
