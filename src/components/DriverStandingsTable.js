import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    constructorIcon: {
      height: 50,
      width: 50
    }
  });


const DriverStandingsTable = (props) => {
    const driversRows = props.driverStandingsData
    const classes = useStyles()

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
                        <img src={`http://localhost:3001/drivers_imgs/${row.name}.png`} 
                            className={classes.constructorIcon}
                            alt={row.name} 
                            onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/drivers_imgs/dummy.png`}} />
                        <TableCell align="left">
                        <img src={`http://localhost:3001/constructors_imgs/${row.constructor}.png`} 
                         className={classes.constructorIcon} 
                         alt={row.constructor}
                         onError={(e)=>{e.target.onerror = null; e.target.src=`http://localhost:3001/constructors_imgs/dummy_f1.png`}}
                         />
                        </TableCell>
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
