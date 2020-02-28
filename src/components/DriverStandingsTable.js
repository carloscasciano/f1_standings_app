import React from 'react';
import formatLongNames from '../code_logic/formatLongNames'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import GradeIcon from '@material-ui/icons/Grade';
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useMediaQuery } from 'react-responsive'


const useStyles = makeStyles({
  paperStyle: {
    maxWidth: 320,
    minWidth: 320,
    minHeight: 120,
    marginBottom: 10,
    margimTop: 5,
    display: "grid",
    gridGap: 5,
    overflow: "hidden"
  },
  driverAvatarStyle: {
    gridColumn: "3/4",
    gridRow: "1/4",
    display: "grid",
    alignItems: "end"
  },
  infoIconsStyle:{
    gridColumn: "1/3",
    gridRow: "3",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingBottom: 10
  },
  driverConstructorStyle: {
    gridColumn: "1/3",
    gridRow: "2",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flexStart",
    paddingBottom: 15
  },
  driverNameStyle: {
    gridColumn: "1/3",
    gridRow: "1",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flexStart",
    paddingLeft: 15,
    paddingTop: 15
  },
  constructorIconStyle: {
    height: 35,
    width: 35,
    paddingLeft: 10,
    paddingRight: 10,
  },
  driverIconStyle: {
    height: 140,
    width: 140,
  },
  miniIconGroupStyle: {
    display: "flex"
  },
  gridStyle: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "start"
  },
  paperTitleStyle: {
    marginBottom: 10,
    margimTop: 10,
    maxWidth: 320,
    minWidth: 320
  }
})

const DriverStandingsTable = (props) => {
  const driversRows = props.driverStandingsData
  const classes = useStyles()

  //media queries
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1000px)'})

  //render
  if (typeof driversRows === 'string') {
    return (
      <CircularProgress />
    )
  } else {
    return (
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
              <Typography variant="h5" className={classes.titleStyle}>Drivers</Typography>
            </Paper>
          }

          {driversRows.map(driverData => (
            <Paper
              key={driverData.position}
              className={classes.paperStyle}
              elevation={5}
            >
              <div className={classes.driverNameStyle}>
                <Typography 
                  variant="h6"
                  align="left"
                  noWrap={true}
                >
                  <b>{formatLongNames(driverData.name)}</b>
                </Typography>
              </div>

              <div className={classes.driverConstructorStyle}>
                <img src={`http://localhost:3001/constructors_imgs/${driverData.constructor}.png`} 
                            className={classes.constructorIconStyle} 
                            alt={driverData.constructor}
                            onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/constructors_imgs/dummy_f1.png`}}
                />
                <Typography variant="body2"> {driverData.constructor} </Typography>
              </div>

              <div className={classes.driverAvatarStyle}>
                <img src={`http://localhost:3001/drivers_imgs/${driverData.name}.png`} 
                      className={classes.driverIconStyle}
                      alt={driverData.name} 
                      onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/drivers_imgs/dummy.png`}} />
              </div>

              <div className={classes.infoIconsStyle}>
                <div className={classes.miniIconGroupStyle} >      
                  <Tooltip title="position" placement="top" arrow>
                    <EqualizerIcon />    
                  </Tooltip>                  
                  <Typography> {driverData.position}º </Typography> 
                </div>

                <div className={classes.miniIconGroupStyle}>
                  <Tooltip title="wins" placement="top" arrow>
                    <EmojiEventsIcon />     
                  </Tooltip> 
                  <Typography> {driverData.wins} </Typography> 
                </div>

                <div className={classes.miniIconGroupStyle}>
                  <Tooltip title="points" placement="top" arrow>
                    <GradeIcon />    
                  </Tooltip> 
                  <Typography> {driverData.points} </Typography>
                </div>

              </div>   
            </Paper>
        ))}
        </Grid>
      </>
    )
  }      
}


export default DriverStandingsTable

