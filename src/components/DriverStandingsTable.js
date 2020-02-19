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
  });

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
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Constructor</TableCell>
                    <TableCell align="right">Wins</TableCell>
                    <TableCell align="right">Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {driversRows.map(row => (
                    <TableRow key={row.position}>
                        <TableCell component="th" scope="row">
                            {row.position}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.constructor}</TableCell>
                        <TableCell align="right">{row.wins}</TableCell>
                        <TableCell align="right">{row.points}</TableCell>
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


/* 

{driversRows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}

*/