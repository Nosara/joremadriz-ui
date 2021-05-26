import React from 'react';
import Grid from '@material-ui/core/Grid';
import TimeSection from '../components/TimeSection'
import json from '../timeline.json'
import Typography from '@material-ui/core/Typography';

function Timeline() {


    console.log(json.data)

    return (
      <div className="App">
        <body className="App-header">
          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
            {json && json.data.map(
                (e) => <TimeSection line={e}/>
            )}
            </ Grid>
        </body>
      </div>
    );
}

export default Timeline