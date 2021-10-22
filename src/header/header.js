import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'roboto',
    margin: 25,
    fontSize: 26,
  },
}));



export default function Header() {
  const classes = useStyles();

  return (
    <div className="header">
        
      <AppBar style={{background: '#30475e'}} >
        <Toolbar>
          <Typography className={classes.title}>
            Tugas Akhir Kelompok 17
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
