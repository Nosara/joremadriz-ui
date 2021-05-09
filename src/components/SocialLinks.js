import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {makeStyles} from '@material-ui/core/styles';

function pageChangeToInstagram() {
  window.open('https://www.instagram.com/joremadriz');
}

function pageChangeToTwitter() {
  window.open('https://www.twitter.com/joremadriz');
}

const useStyles = makeStyles((theme) => ({
  clickableIcon: {
    'color': 'white',
    '&:hover': {
      color: '#777777',
    },
    'margin': '5px',
  },
}),
);

function SocialLinks() {
  const classes = useStyles();
  return (
    <div >
      <InstagramIcon
        onClick={pageChangeToInstagram}
        className={classes.clickableIcon}/>
      <TwitterIcon
        onClick={pageChangeToTwitter}
        className={classes.clickableIcon}/>
    </div>
  );
}

export default SocialLinks;
