import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <div className = "cards-container">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           BrewDog
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Meet BrewDog, the best brewery finder online! AKA Man's Best Friend. ReactJS application, built with Ruby on Rails and ReduxJS.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Open Site
        </Button>
        <Button size="small" color="primary">
          GitHub
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           SpotiFake
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Spotifake is a mock version of Spotify's library, allowing users to update their library and play songs. Javascript front end with a Ruby on Rails back end.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Open Site
        </Button>
        <Button size="small" color="primary">
          GitHub
        </Button>
      </CardActions>
    </Card>
    </ div>
  );
}
