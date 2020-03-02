
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from 'react-responsive'
import formatLongNames from '../code_logic/formatLongNames'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import CircularProgress from '@material-ui/core/CircularProgress'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import GradeIcon from '@material-ui/icons/Grade'

const useStyles = makeStyles({
  constructorIcon: {
    height: 120,
    width: 120
  },
  paperStyle: {
    maxWidth: 320,
    minWidth: 320,
    minHeight: 100,
    marginBottom: 10,
    margimTop: 5,
    display: "grid",
    gridGap: 0
  },
  paperStyleMobile: {
    minWidth: 240,
    minHeight: 100,
    marginBottom: 10,
    margimTop: 5,
    display: "grid",
    gridGap: 5
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
  paperTitleStyle: {
    marginBottom: 10,
    margimTop: 10,
    maxWidth: 320,
    minWidth: 320
  }
})

export default function ConstructorsStandingsTable(props) {
  const constructorRows = props.constructorStandingsData
  const classes = useStyles()

  //media queries
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1000px)'})
  
  //render
  if (constructorRows === '') {
    return (
      <>
        <CircularProgress />
      </>
    )
  } else if (constructorRows === 'did not existed until 1958') {
    return (
      <>
        <p>Constructors Championship only existed after 1958</p>
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
      > 
      
        {isDesktopOrLaptop &&        
          <Paper
            className={classes.paperTitleStyle}
            elevation={5}
          >
            <Typography variant="h5" className={classes.titleStyle}>Constructors</Typography>
           </Paper>
        }
        
        {constructorRows.map(constructorData => (
          <Paper
            key={constructorData.position}
            className={classes.paperStyle}
            elevation={5}
          >
            <div className={classes.constructorLogoStyle}>
              <a href={constructorData.details} target="blank">
                <img src={`https://generalassets.herokuapp.com/constructors_imgs/${constructorData.constructor}.png`} 
                      className={classes.constructorIcon} 
                      alt={constructorData.constructor}
                      onError={(e)=>{e.target.onerror = null; e.target.src=process.env.PUBLIC_URL + '/dummy_f1.png'}}
                />
              </a>
            </div>

            <div className={classes.constructorNameStyle}>
              <Typography variant="h6"><b>{formatLongNames(constructorData.constructor, 20)}</b></Typography>
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
