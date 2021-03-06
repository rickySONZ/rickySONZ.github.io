import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Icons from "./Icons";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    color: "inherit"
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="cards-container" style={{ alignItems: "center", justifySelf: "center" }}>
      <Carousel activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: '#f54d3b'
        }
      }}>
        <Card className={classes.root} style={{ alignItems: "center", justifySelf: "center", gridColumn: '2/3' }}>
          <CardActionArea href="https://brewdog-frontend.netlify.app/" target="_blank" rel="noreferrer" >
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + 'kisspng-beer-brewing-grains-malts-india-pale-ale-bitter-underdog-5b3160d5c657c4.2574535915299627098124.jpg'}
              title="BrewDog Logo"
              color="inherit"

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                BrewDog
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Meet BrewDog, the best brewery finder online! AKA Man's Best Friend. Search breweries in your city and save them to your favoirtes! ReactJS application, built with Ruby on Rails on the back end and ReduxJS.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://github.com/rickySONZ/BrewDog_frontend" target="_blank" rel="noreferrer">GitHub</a>
            </Button>
          </CardActions>
        </Card>


        <Card className={classes.root} style={{ alignItems: "center", justifySelf: "center", gridColumn: '2/3' }}>
          <CardActionArea href="https://www.loom.com/share/ae32b2c14e004e6cb2c520a508f7362b" target="_blank" rel="noreferrer">
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + '/1200px-International_Pok??mon_logo.svg.png'}
              title="Pokemon Battle Royale"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Pokemon Battle Royale
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Pokemon Battle Royale is an application that allows users to purchase Pokemon and battle an AI. Collaborated with other engineers for this project. Powered by ReactJS, ReduxJS, Ruby On Rails, Google Firebase and more!
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://github.com/Bryanjazo/Pokemon-FrontEnd" target="_blank" rel="noreferrer">GitHub</a>
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root} style={{ alignItems: "center", justifySelf: "center", gridColumn: '2/3' }}>
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
              <a href="https://github.com/rickySONZ/spotifake_frontend" target="_blank" rel="noreferrer">GitHub</a>
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root} style={{ alignItems: "center", justifySelf: "center", gridColumn: '2/3' }}>
          <CardActionArea href="https://gitjobs2.herokuapp.com/login" target="_blank" rel="noreferrer">
            <CardMedia
              className={classes.media}
              image={process.env.PUBLIC_URL + "usain_git.png"}
              title="GitJobs"
              color="inherit"
              display="block"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                GitJobs
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                GitJobs is a job service application that pulls from Github Jobs API. Indicate interest in companies and leave reviews if you have worked there in the past! Built with Ruby on Rails.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://github.com/rickySONZ/GitJobs" target="_blank" rel="noreferrer">GitHub</a>
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
