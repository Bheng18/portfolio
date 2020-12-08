import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import { white } from 'ansi-colors';

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  paperImg:{
    height: 620,
    backgroundImage: `url(${"images/bgImg3.png"})`,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    maxWidth: 1923,   
  },
  media: {
    height: 720,
  },
}));

export default function MediaCard() {
  const classes = useStyles();
  
  return (
    <div id="dashboard">
    <>
      <CssBaseline />
        <Card className={classes.content} >
            <CardMedia className={classes.paperImg} >      
                <CardContent>
                    <Typography component="p" variant="h5" align="center" style={{color: '#FFF', marginTop: 160}}>
                    Hi, I'm <span style={{color: '#42a5f5'}}>Joebert</span>
                    </Typography>
                    <br /><br />
                    <Typography component="p" variant="h3" align="center" style={{color: '#FFF', }}>
                         Junior <span style={{color: '#42a5f5'}}>Application</span>
                    </Typography>
                    <Typography component="p" variant="h3" align="center" style={{color: '#42a5f5'}}>
                         Developer
                    </Typography>
                    <Typography component="p" variant="h6" align="center" style={{color: '#FFF'}}>
                         with passion for learning
                    </Typography>
                </CardContent>
            </CardMedia>
        </Card>
    </>
    </div>
  );
}
