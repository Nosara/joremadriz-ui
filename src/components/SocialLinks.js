import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {makeStyles} from '@material-ui/core/styles';

function pageChangeToInstagram() {
  window.open('https://www.instagram.com/joremadriz');
}

function pageChangeToTwitter() {
  window.open('https://www.twitter.com/joremadriz');
}

function pageChangeToLinkedIn() {
  window.open('https://www.linkedin.com/in/jorge-madriz-25b246156/');
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
      <LinkedInIcon
        onClick={pageChangeToLinkedIn}
        className={classes.clickableIcon}
      />
    </div>
  );
}

export default SocialLinks;
