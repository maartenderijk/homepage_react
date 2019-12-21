import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleModal from './PictureView';

const useStyles = makeStyles(theme => ({


  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '70%', 
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
}));


export default function Album() {
  const classes = useStyles();
  const [cards, setCards] = useState([]);

  async function fetchData() {
    const url = "https://maartenderijk.github.io/sitegenerator/snapshots.json";
    const response = await fetch(url);
    const data = await response.json();
    const pictures = data.splice(-24).reverse();
    setCards(pictures);

  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <React.Fragment>

      <Container className={classes.cardGrid} maxWidth="md">

        <Grid container spacing={4}>

          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.Image}
                  title={card.Datestring}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.Datestring}
                  </Typography>
                  <Typography>
                    Time: {card.Timestring} <br />
                    Temperature: {card.Temperature}
                  </Typography>
                </CardContent>
                <CardActions>
                    <SimpleModal img={card.Image} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </React.Fragment>
  );
}
