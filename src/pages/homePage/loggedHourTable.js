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
    minWidth: 250,
  },
});

function createData(SiteName, SiteLocation, SiteCorridinator) {
  return { SiteName, SiteLocation, SiteCorridinator };
}

export default function DenseTable(currentHourData) {
  const classes = useStyles();
  
  const createDataSet = function() {
    const rows = [
        // createData('Collegiate', '1547 S Theresa Ave, St. Louis, MO 63104', 'ybekirov@csmb-stl.org')
    ];
    for (var i=1; i <= currentHourData.totalLogged; i++) {
        console.log(i)
        console.log(currentHourData.hourslogged[i].siteName, currentHourData.hourslogged[i].siteAddress, currentHourData.hourslogged[i].siteCoordinatorEmail)
        rows[i] = (createData(currentHourData.hourslogged[i].siteName, currentHourData.hourslogged[i].siteAddress, currentHourData.hourslogged[i].siteCoordinatorEmail))
    } 
    return rows;
  }

  const currentDataSet = createDataSet();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Site Location</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Site Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentDataSet.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.SiteName}
              </TableCell>
              <TableCell align="center">{row.SiteLocation}</TableCell>
              <TableCell align="center">{row.SiteCorridinator}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}