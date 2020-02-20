import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/* const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  }); */

const ConstructorsStandingsTable = (props) => {
    const constructorRows = props.constructorStandingsData

    if (constructorRows === 'did not existed until 1958') {
      return (
        <>
          <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell align="left">Constructor</TableCell>
                    <TableCell align="left">Wins</TableCell>
                    <TableCell align="left">Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                       <TableCell align="left">did not existed until 1958</TableCell>
                    </TableRow>              
                </TableBody>
              </Table>
            </TableContainer>
        </>
      )
  } else if (typeof constructorRows === 'string') {
        return (
            <p>No constructor data to render</p>
        )
    } else {
        return (
            <>
                <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Position</TableCell>
                    <TableCell align="left">Constructor</TableCell>
                    <TableCell align="left">Wins</TableCell>
                    <TableCell align="left">Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {constructorRows.map(row => (
                    <TableRow key={row.position}>
                        <TableCell component="th" scope="row">
                            {row.position}
                        </TableCell>
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

export default ConstructorsStandingsTable



/* 
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
       

*/