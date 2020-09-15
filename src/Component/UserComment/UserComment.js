import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography';
import { Box, CardMedia, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserComment = (props) => {
 const {name,email,body} = props.userComment;
 const {download_url} = props.userImg;

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const style={
    width:'70px',
    height:'70px',
    borderRadius:'50%',
    float:'left',
    marginRight:'10px'

  }

  return (
    <Box m={1} p={2}>
    <Card className={classes.root}>
    <CardContent> 
<Paper variant="outlined">
    <img style={style} src={download_url}/>
    <h4> name : {name}</h4>
  
</Paper>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        <p>email : {email}</p>
      </Typography>
      <Typography variant="h5" component="h2">
         <h4>Comment :</h4>
      </Typography>
     
      <Typography variant="body2" component="p">
        <p>{body}</p> 
      </Typography>
    </CardContent>
    
  </Card>
  </Box>
  );
};

export default UserComment;