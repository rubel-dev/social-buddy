import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 
import UserComment from '../UserComment/UserComment';
import data from '../../data/data.json'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const UserDetail = () => {
    const {userId} = useParams()
    const [userDetail,setUserDetail] = useState([])
    const [userComments, setUserComment] = useState([])
    const [userImg,setUserImg] = useState([])
    
  
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUserDetail(data))
    },[])

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${userId}`
        fetch(url)
        .then(res =>res.json())
        .then(data => setUserComment(data))
    
    },[])
    useEffect(()=>{
        const saveImage = data;
        const image = saveImage.find(img =>img.id ===userId)
       setUserImg(image)
    },[])

    const {id,title,body} = userDetail;
    const classes = useStyles();
    return (
        
        <Card className={classes.root} >
        <CardActionArea>
            <h3> Id : {id}</h3> 
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
             
        </CardActions> 
      {
          userComments.map(comment => <UserComment userComment ={comment} userImg={userImg}></UserComment>)
      }
    </Card>
        
    
    );
};

export default UserDetail;