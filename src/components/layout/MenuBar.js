import React from 'react';
import {Outlet} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottonBar from './BottonBar'
import TopBar  from './TopBar'

const useStyles = makeStyles((theme) => ({
    title:{
        flexGrow: 1,
    },
    root: {
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
    wrapper: {
        display:'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    contentContainer: {
        display: 'flex',
        flex:'1 1 auto',
        overflow: 'hidden'
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'hidden'
    }
  }));

function MenuBar() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <TopBar />
    <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
    </div>
    <BottonBar />
  </div>
  )
}

export default MenuBar;