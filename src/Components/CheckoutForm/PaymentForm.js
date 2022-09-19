import React from "react";
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core";
import Checkbox from "@material-ui/core";

export default function PaymentForm(){
    return(
        <React.Fragment>
            <Typography variant='h6' gutterBottom>
             Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id='cardName' label='Name on card' fullWidth autoComplete="cc-name"/>
                </Grid>
                <Grid item xs={12} ms={6}>
                  <TextField
                  required
                  id='cardNumber'
                  label='Card number'
                  fullWidth
                  autoComplete='cc-number'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                    required
                    id='cvv'
                    label='CVV'
                    helperText='Last three digits on signature strip'
                    fullWidth
                    autoComplete="cc-csc"
                    />
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                control={<Checkbox color=''secondary name='saveCard' value='yes'/>}
                label='Remember credit card details for text time'
                />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}