import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
    },
    static: {
        borderBottom: "double white 6px"
      }
}))

export default function BottonBar() {
    const classes = useStyles();
  return (
    <AppBar position="static" classes={{
        root: classes.root,
        positionStatic: classes.static
    }}>
      <Toolbar>
        <Typography>
            Don't feel like Satan, but I am to them.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}