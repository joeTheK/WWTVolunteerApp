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
    minWidth: 270,
  },
});

function createData(SiteName, SiteLocation, SiteCorridinator, SiteVerified) {
  return { SiteName, SiteLocation, SiteCorridinator, SiteVerified };
}

export default function DenseTable(currentHourData) {
  const classes = useStyles();
  
  const createDataSet = function() {
    const rows = [
        // createData('Collegiate', '1547 S Theresa Ave, St. Louis, MO 63104', 'ybekirov@csmb-stl.org')
    ];
    for (var i=1; i <= currentHourData.currentHourData.totalLogged; i++) {
      if (currentHourData.currentHourData.hourslogged[i].confirmed) {
        rows[i] = (createData(currentHourData.currentHourData.hourslogged[i].siteName, currentHourData.currentHourData.hourslogged[i].siteAddress, currentHourData.currentHourData.hourslogged[i].siteCoordinatorEmail, 'Confirmed'))
      }
      else {
        rows[i] = (createData(currentHourData.currentHourData.hourslogged[i].siteName, currentHourData.currentHourData.hourslogged[i].siteAddress, currentHourData.currentHourData.hourslogged[i].siteCoordinatorEmail, 'Not Confirmed'))
      }
    } 
    return rows;
  }

  const currentDataSet = createDataSet();

  return (
    <div style={{ overflow: 'auto', height: '150px' }}>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Site Location</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Site Address</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {currentDataSet.map(row => (
            <TableRow key={row.SiteName}>
              <TableCell component="th" scope="row">
                {row.SiteName}
              </TableCell>
              <TableCell align="center">{row.SiteLocation}</TableCell>
              <TableCell align="center">{row.SiteCorridinator}</TableCell>
              <TableCell align="center">{row.SiteVerified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}