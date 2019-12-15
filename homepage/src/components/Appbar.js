import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ComputerIcon from '@material-ui/icons/Computer';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function Appbar() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <AppBar position="fixed">
      <Toolbar>
        <ComputerIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Raspberry Pi Snapshots
          </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar/>
    </React.Fragment>
  )
}