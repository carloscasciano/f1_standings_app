
import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
//import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    margin: 3
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridPosition: {
    width: "20%"
  },
  constructorIcon: {
    height: 50,
    width: 50
  }
})

export default function ConstructorsStandingsTable(props) {
  const constructorRows = props.constructorStandingsData

  const classes = useStyles()
  
  if (constructorRows === 'constructorDataWillComeHere') {
    return (
      <>
        <p>Unavailable Right Now</p>

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
        className={classes.gridPosition}
      > 
        {constructorRows.map(row => (
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
      ))}
      </Grid>
    )
  }
    
}


