import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons'
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
    marginTop: "1rem",
  },
  media:{
    height:0,
    paddingTop: "56.25%",
  },
  expand:{
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform",{
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen:{
    transform:"rotate(180deg)",
  },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       
        action={
          <Typography
          className={classes.action}
          variant='h5'
          color='textSecondary'
          >
            {accounting.formatMoney(17000 , "AR")}
          </Typography>
        }
        title="Shoes"
        subheader="in stock"
      />
      <CardMedia
        className={classes.media}
        image="https://http2.mlstatic.com/D_NQ_NP_970947-MLA45992360097_052021-W.jpg"
        title="Nike shoes"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Running shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" >
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        <IconButton aria-label="share">
          {Array(4) //(rating)
          .fill()
          .map((_, i )=> 
           <p>&#11088;</p>
          )
          }
        </IconButton>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          
          <Typography paragraph>
            Las zapatillas Nike Air Max 90 son la nueva generación del ícono. 
            Diseñada con líneas impecables, versátiles y atemporales, mantienen 
            la misma suela icónica, revestimientos cosidos y detalles clásicos que iniciaron la revolución
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
