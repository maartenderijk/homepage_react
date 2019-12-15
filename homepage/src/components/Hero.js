import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (

    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Album layout
            </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Opening van de pagina. Test.
            </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
                  </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
                  </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
    
  )
}