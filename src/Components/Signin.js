import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link as RouteLink, useHistory} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) =>({
    paper:{
        marginTop: theme.spacing(8),
        display:'flex',
        flexDirection:'colum',
        alignItems:'center',
    },
    avatar:{
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        
    },

    form:{
        whidth:' 100%', 
        marginTop:theme.spacing(3),

    },
    submit:{
        margin: theme.spacing(3 , 0 ,2),
    }
}));


    export default function SignIn() {
  const classes = useStyles();


  return (
    
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

        {/*<Avatar className={classes.avatar}>
             <LockOutlinedIcon/>
         </Avatar>
          
            <Typography component='h1' variant='h5'>
                    Sign in
  </Typography>*/}

        <form className={classes.form} noValidate>
            <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            />
        
          <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          id= 'password'
          autoComplete='current-password'
          />
        <FormControlLabel
        control={<Checkbox value='remember ' color='primary'/>}
        label='Remember me'
        />
        <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
        >
            Sign in
        </Button>
        <Grid container>
            
            <Grid item xs>
                
                <Link href='#' variant='body2'>
                    Forgot Password?
                </Link>
                    
               </Grid>
               <Grid>
               <RouteLink to='signup'>
                { "Don't have an account ? Sign Up"}
               </RouteLink>
           
               </Grid>
        </Grid>
        </form>
        </div>
        <Box mt={8}>
        <Copyright/>
        </Box>
      </Container>
    
  );
  
};

