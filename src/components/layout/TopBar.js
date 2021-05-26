import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SocialLinks from '../SocialLinks';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'black',
    },
    static: {
        borderTop: 'double white 6px'
    },
    socialLinks : {
        marginLeft: 'auto'
    },
    barButton : {
        '&:hover': {
            color: '#777777',
          }
    }
}))

export default function TopBar() {
    const classes = useStyles();
  return (

    <AppBar position="static" classes={{
        root: classes.root,
        positionStatic: classes.static
    }}>
      <Toolbar>
      <Button href='/' className={classes.barButton}>
            Me
        </Button>
        <Button href='/timeline' className={classes.barButton}>
            TIMELINE
        </Button>
        <Button href='/comments' className={classes.barButton}>
            Comments
        </Button>
        <div 
        className={classes.socialLinks}
        >
            <SocialLinks />
        </div>
      </Toolbar>
    </AppBar>
  );
}