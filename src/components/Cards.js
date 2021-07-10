import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Icons from "./Icons";


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
      <div className = "cards-container" style={{alignItems: "center", justifySelf: "center"}}>
      <Carousel activeIndicatorIconButtonProps={{
        style: {
            backgroundColor: '#f54d3b' 
        }
    }}>
    <Card className={classes.root} style={{alignItems: "center", justifySelf: "center", gridColumn: '2/3'}}>
      <CardActionArea href="https://brewdog-frontend.netlify.app/" target="_blank" rel="noreferrer" >
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/kisspng-beer-brewing-grains-malts-india-pale-ale-bitter-underdog-5b3160d5c657c4.2574535915299627098124.jpg'}
          title="BrewDog Logo"
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
          <a href = "https://github.com/rickySONZ/BrewDog_frontend" target = "_blank" rel="noreferrer">GitHub</a>
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea href="https://spotifakeapp.netlify.app/" target="_blank" rel="noreferrer">
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/spotifake_in_circles.jpg'}
          title="Spotifake Logo"
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
          <a href="https://github.com/rickySONZ/spotifake_frontend" target = "_blank" rel="noreferrer">GitHub</a>
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea href = "https://gitjobs2.herokuapp.com/login" target = "_blank" rel="noreferrer">
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/usain_git.png'}
          title="Spotifake Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           GitJobs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Spotifake is a mock version of Spotify's library, allowing users to update their library and play songs. Javascript front end with a Ruby on Rails back end.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/rickySONZ/GitJobs" target = "_blank" rel="noreferrer">GitHub</a>
        </Button>
      </CardActions>
    </Card>
    </Carousel>
    <div id="cards-icons">
    <Icons />
    </div>
    </ div>
  );
}
