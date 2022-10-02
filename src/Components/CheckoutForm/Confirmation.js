import { Button, Divider, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = ({message}) => {
    console.log(message)
  return (
    <>
    <Typography variant='h6'>{message}</Typography>
    <Divider/>
    <Typography>
        {message === "Successful Payment" 
        ? "Your booking reference : Rgh8787878lk"
        : "" }
    </Typography>
    <Button component={Link} to='/' variant= 'outlined' type='button' >
        Back to Home Page
    </Button>
    </>
  )
}

export default Confirmation;