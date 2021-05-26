import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function TimeSection(props) {
    const {line} = props
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
                <Typography variant='h5' align='left' style={{
                    color: 'Grey'
                }}>
            {line.year}
            </Typography>

           {line.things.map((elemnt) => (
             <Typography align='left'>{elemnt.descrip}</Typography>
           ))}
    </Grid>

  );
}

export default TimeSection;