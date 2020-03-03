import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from '../hooks/useToggleState.js';
import EditCard from './EditCard.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default function Flashcard({ card, deleteCard, updateCard }) {
  const [editCard, toggle] = useToggleState(false);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        {editCard ? (
          <EditCard
            card={card}
            updateCard={updateCard}
            toggleForm={toggle}
          />
        )
          : (
            <>
              <CardContent>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/id/1011/200/200"
                />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {card.category}
                </Typography>
                <Typography variant="h5" component="h2">
                  {card.front}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  City, State
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
                <IconButton
                  aria-label="Edit"
                  onClick={toggle}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="Delete"
                  onClick={() => deleteCard(card.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    {card.back}
                  </Typography>
                </CardContent>
              </Collapse>

            </>
          )}
      </Card>
      <Divider />
    </>
  );
}
