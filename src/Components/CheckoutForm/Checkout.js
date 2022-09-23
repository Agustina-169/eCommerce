import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';

export const Checkout = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component='h1' variant='h4' align='center' > 
        checkout
        </Typography>
      </Paper>
      </main>
    </>
    
  )
}

export default Checkout;
