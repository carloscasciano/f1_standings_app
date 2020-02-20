import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ScheduleTable = (props) => {
    
    const scheduleRows = props.scheduleData

    if (typeof scheduleRows === 'string') {
        return (
            <p>No schedule data to render</p>
        )
    } else {
        return(
            <>
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
            </>
        )
    }

    
}

export default ScheduleTable

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
