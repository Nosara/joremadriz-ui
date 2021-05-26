import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import CommentService from './service/CommentService';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'monospace',
      },
      h3: {
        fontFamily: 'monospace',
      },
      h5: {
        fontFamily: 'monospace',
      }
     },
    MuiInputBase: {
      input: {
        color: 'white',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: 'white',
          border: '0',
        },
      },
    },
    MuiInputLabel: {
      root: {
        'fontFamily': 'monospace',
        'color': 'white',
        '&$focused': { // increase the specificity for the pseudo class
          color: 'white',
        },
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'monospace',
        color: 'white',
        margin: '10px',
      },
      outlined: {
        borderColor: 'white',
      },
    },
  },
});

function App() {
  const baseUrl = 'https://joremadriz-api.herokuapp.com/comment';
  const service = new CommentService(baseUrl);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes service={service}/>
      </Router>
    </ThemeProvider>

  )
}

export default App;
