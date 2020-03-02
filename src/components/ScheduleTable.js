import React from 'react'
import formatLongNames from '../code_logic/formatLongNames'
import getCountryCode from '../code_logic/formatCountryCode'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from 'react-responsive'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography"
import Tooltip from '@material-ui/core/Tooltip'
import CircularProgress from '@material-ui/core/CircularProgress'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles({
  countryIcon: {
    height: 64,
    width: 64
  },
  paperStyle: {
    maxWidth: 320,
    minWidth: 320,
    minHeight: 120,
    marginBottom: 10,
    margimTop: 5,
    display: "grid",
    gridGap: 0
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
    paddingBottom: 10,
    justifyContent: "flex-start"
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
    paddingLeft: 10,
    display: "flex",
    alignItems: "center"
  },
  gridStyle: {
  },
  paperTitleStyle: {
    marginBottom: 10,
    margimTop: 10,
    maxWidth: 320,
    minWidth: 320
  }
})

const ScheduleTable = (props) => {
    
  const scheduleRows = props.scheduleData
  const classes = useStyles()

  //media queries
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1000px)'})

  //render
    if (typeof scheduleRows === 'string') {
      return (
        <>
          <CircularProgress />
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
              className={classes.gridStyle}
            >
              {isDesktopOrLaptop &&        
                <Paper
                  className={classes.paperTitleStyle}
                  elevation={5}
                >
                  <Typography variant="h5" className={classes.titleStyle}>Schedule</Typography>
                </Paper>
              }
              {scheduleRows.map(scheduleData => (
                <Paper
                  key={scheduleData.gp}
                  className={classes.paperStyle}
                  elevation={5}
                >
                  <div className={classes.gpNameStyle}>
                    <Tooltip title={scheduleData.gp} placement="top-start">
                      <Typography variant="h6"><b>{formatLongNames(scheduleData.circuit, 28)}</b></Typography>
                    </Tooltip>
                  </div>

                  <div className={classes.gpFlagStyle}>
                    <Tooltip title={scheduleData.country}>
                      <img src={`https://www.countryflags.io/${getCountryCode(`${scheduleData.country}`)}/flat/64.png`} 
                          className={classes.countryIcon} 
                          alt={scheduleData.gp}
                          onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/constructors_imgs/dummy_f1.png`}}
                          />
                    </Tooltip> 
                  </div>

                  <div className={classes.gpDateTime}>
                    <div className={classes.dateGroup}>
                      <Typography variant="body1">
                        {scheduleData.date} - {scheduleData.hour}
                      </Typography>  
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