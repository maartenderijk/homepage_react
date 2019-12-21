import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
  },
  heroButtons: {
    marginTop: theme.spacing(1),
  },
}));

function openURL() {
  window.open( 
    "https://github.com/maartenderijk?tab=repositories", "_blank"); 
}

export default function Hero() {
  const classes = useStyles();
  return (

    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          Snapshots
            </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          One picture a day from my Raspberry Pi.
          This site updates automatically.
            </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={openURL}>
                Open Github
              </Button>
             
            </Grid>

          </Grid>
        </div>
      </Container>
    </div>

  )
}