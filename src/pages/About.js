import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

function About() {
    return (
        <div className="App">
        <body className="App-header">
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography align='right'>
                Hi!, my name is
            </Typography>
            <Typography variant='h3' align='right'>
                Jore Madriz
            </Typography>
            <br/>
            <Typography variant='h3' align='right' style={{
                    color: 'Grey'
                }}>
            I craft things to solve problems. 
            </Typography>
            <br/>
            <Typography align='right'>
                I'm a Costa Rican-based software engineer who specializes in problem 
                solving through building software.
                Currently, I'm an engineer at <Link href="https://gorillalogic.com/" style={{
                    color: 'Grey'
                }}>
                Gorilla Logic
  </Link> mainly building accessible back-end products.
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src="https://lh3.googleusercontent.com/TLtAymUPb4Yu-6CdHSvAACskVt2sfwRDXGyA6OcOnkSZUCOcYzHNKFZEabvhHPTufgMFk6YTMZLQP6T7JSbTTrrrEYAOexjAK3P6YNR0aTuyQEPnNXKByFAL0sw8Ye0QqWxGrLlXh10=w300" />
            </Grid>
            </ Grid>

        </body>
        </div>
    );
}

export default About