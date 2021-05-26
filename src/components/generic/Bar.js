import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Bar(props) {
    const {value, barStyleClasses}  = props;
  return (
    <AppBar position="static" classes={{
        root: barStyleClasses.root,
        positionStatic: barStyleClasses.static
    }}>
      <Toolbar>
          {value}
      </Toolbar>
    </AppBar>
  );
}