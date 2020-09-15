import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const User = (props) => {
    const {id,title,body,userId} = props.user;
    const classes = useStyles();
    return (
     
        <Box m={1} p={2}>
        <Card className={classes.root} >
            <CardActionArea>
                <h3> Id : {id}</h3>
                <h4>User Id : {userId}</h4>
                <CardMedia
                    className={classes.media}
                    image="https://iili.io/2BZmKv.jpg"
                    title="Contemplative Reptile"
                />
               <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                    <Link to ={`/${id}`}>
                     <Button variant="contained" color="primary">
                        SEE DETAIL 
                     </Button>
                     </Link>
                 
            </CardActions>
        </Card>
        </Box>
      
        
    );
};

export default User;