import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete'

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
  CardActions:{
    display: 'flex',
    justifyContent:'space-between',
    textAlign: 'center',
  },
  CardRating:{
    display:'flex',
  }
 
}));

export default function CheckoutCard({product : {id, name, productType, price, rating, image, description}}) {
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
            {accounting.formatMoney(price , "AR")}
          </Typography>
        }
        title={name}
        subheader="in stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
     
    <CardActions disableSpacing className={classes.CardActions}>
         <div className={classes.CardRating}>
            {Array(rating) 
          .fill()
          .map((_, i )=> 
           <p>&#11088;</p>
          )
          }
           </div>
           <IconButton>
           <DeleteIcon fontSize='large'/>
           </IconButton>
        </CardActions>
     </Card>
  );
}