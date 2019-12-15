import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({


  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();
  const [cards, setCards] = useState([]);

  async function fetchData() {
    const url = "https://maartenderijk.github.io/sitegenerator/snapshots.json";
    const res = await fetch(url);

    res
      .json()
      .then(
        function (res) {
          const pictures = (res.splice(-24)).reverse();
          setCards(pictures);
        }
      )
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
                  <Button size="small" color="primary">
                    View
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </React.Fragment>
  );
}
