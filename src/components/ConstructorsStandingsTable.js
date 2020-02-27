
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import GradeIcon from '@material-ui/icons/Grade';
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import CircularProgress from '@material-ui/core/CircularProgress'



const useStyles = makeStyles({

  constructorIcon: {
    height: 120,
    width: 120
  },
  paperStyle: {
    minWidth: 380,
    minHeight: 120,
    marginBottom: 10,
    margimTop: 5,
    display: "grid",
    gridGap: 5,
  },
  constructorLogoStyle: {
    gridColumn: "4/6",
    gridRow: "1/4",
    alignContent: "center",
    justifyContent: "center"
  },
  constructorNameStyle: {
    gridColumn: "1/4",
    gridRow: "1/3",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flexStart",
    paddingLeft: 15,
    paddingTop: 0
  },
  infoIconsStyle:{
    gridColumn: "1/4",
    gridRow: "3",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingBottom: 0
  },
  miniIconGroupStyle: {
    display: "flex"
  },
  gridStyle: {
    margin: 10
  }
})

export default function ConstructorsStandingsTable(props) {
  const constructorRows = props.constructorStandingsData
  const classes = useStyles()
  
  if (constructorRows === '') {
    return (
      <>
        <CircularProgress />

      </>
    )
  } else if (constructorRows === 'did not existed until 1958') {
    return (
      <>
        <p>Constructor Championship only existed after 1958</p>
      </>
    )
  } 
  else {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.gridStyle}
      > 
        {constructorRows.map(constructorData => (
          <Paper
            key={constructorData.position}
            className={classes.paperStyle}
            elevation={5}
          >
            <div className={classes.constructorLogoStyle}>
              <img src={`http://localhost:3001/constructors_imgs/${constructorData.constructor}.png`} 
                         className={classes.constructorIcon} 
                         alt={constructorData.constructor}
                         onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/constructors_imgs/dummy_f1.png`}}
                         />
            </div>

            <div className={classes.constructorNameStyle}>
              <Typography variant="h6"><b>{constructorData.constructor}</b></Typography>
            </div>

            <div className={classes.infoIconsStyle}>
                <div className={classes.miniIconGroupStyle} >      
                  <Tooltip title="position" placement="top" arrow>
                    <EqualizerIcon />    
                  </Tooltip>                  
                  <Typography> {constructorData.position}º </Typography> 
                </div>

                <div className={classes.miniIconGroupStyle}>
                  <Tooltip title="wins" placement="top" arrow>
                    <EmojiEventsIcon />     
                  </Tooltip> 
                  <Typography> {constructorData.wins} </Typography> 
                </div>

                <div className={classes.miniIconGroupStyle}>
                  <Tooltip title="points" placement="top" arrow>
                    <GradeIcon />    
                  </Tooltip> 
                  <Typography> {constructorData.points} </Typography>
                </div>
            </div>

          </Paper>
      ))}
      </Grid>
    )
  } 
}



/* 

<Card 
              className={classes.root}
              key={row.position}
          >
              <CardContent>
                  <Typography variant="h5" component="h2">
                    {row.position} {row.constructor}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Wins: {row.wins}
                  </Typography>
                    <img src={`http://localhost:3001/constructors_imgs/${row.constructor}.png`} 
                         className={classes.constructorIcon} 
                         alt={row.constructor}
                         onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/constructors_imgs/dummy_f1.png`}}
                         />
                  <Typography variant="body2" component="p">
                      Points: {row.points}
                  </Typography>
                  
              </CardContent>
          </Card>


*/
