import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import post from '../../../assets/img/post.png'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Post = ({ author, title, desc, createdAt, updatedAt }) => {
  console.log({ author, title, desc, createdAt, updatedAt })
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleDelete = () => {

  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography color="textSecondary">
          {createdAt.substring(0, 10)}
        </Typography>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post