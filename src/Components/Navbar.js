import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/patito3.png'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '7rem',
  },
  appBar: {
   backgroundColor:'whitesmoke',
   boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button:{
    marginLeft: theme.spacing(2),
  },
  image:{
    marginRight: '10px',
    height: '5rem'
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const[{basket, user}, dispatch] = useStateValue();

  const handleAuth = ()=>{
    if(user){
      auth.signOut();
        dispatch({
          type: actionTypes.EMPTY_BASKET,
          basket: [],

        })
        dispatch({
          type: actionTypes.SET_USER,
          user: null,

        })
        history.push('/')
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          
        <Link to='/'>
        <IconButton >
            <img 
            src={logo} 
            alt='Commerce.js'
            height='25px'
            className={classes.image}/>
          </IconButton>
        </Link>
          <div className={classes.grow}/>

          <Typography variant="h5" color='textPrimary' component='parrafo'>
            Hello {user ? user.email : 'Guest'}
          </Typography>

          <div className={classes.button}>
          <Link to='signin'>
            <Button variant='outlined' onClick={handleAuth}>
            <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
            </Button>
            </Link>
            
            <Link to='checkout-page'>
            <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={basket.length} color='secondary'>
            <ShoppingCart fontSize='large' color='primary'/>
            </Badge>
            </IconButton>

            </Link>
           
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}