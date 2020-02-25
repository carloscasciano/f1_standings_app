import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import GradeIcon from '@material-ui/icons/Grade';
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'


const useStyles = makeStyles({
  paperStyle: {
    minWidth: 350,
    minHeight: 120,
    marginBottom: 10,
    margimTop: 5,
    display: "grid",
    gridGap: 5,
  },
  driverAvatarStyle: {
    gridColumn: "3/4",
    gridRow: "1/4"
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
    height: 150,
    width: 150,
  },
  miniIconGroupStyle: {
    display: "flex"
  }
})

const DriverStandingsTable = (props) => {
  const driversRows = props.driverStandingsData
  const classes = useStyles()

  if (typeof driversRows === 'string') {
    return (
        <p>Loading</p>
    )
    
  } else {
    return (
      <>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"       
        >
          {driversRows.map(driverData => (
            <Paper
              key={driverData.position}
              className={classes.paperStyle}
              elevation={5}
            >
              <div className={classes.driverNameStyle}>
                <Typography variant="h6"><b>{driverData.name}</b></Typography>
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

