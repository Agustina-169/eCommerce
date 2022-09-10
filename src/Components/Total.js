import React from "react";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'20vh'
       
    },

   button:{
    marginTop:"2rem"
   },
}))

const Total =() =>{
    const classes= useStyles()
    return(
        <div className={classes.root}>
            <h5>Total items: 3</h5>
            <h5>{accounting.formatMoney(6000, 'AR')}</h5>
            <Button className={classes.button} variant='contained' color='secondary'> Check out</Button>
        </div>
    )
}
export default Total;