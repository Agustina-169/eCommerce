import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

export const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Shipping address', 'Payment details'];
  const nextStep = () => setActiveStep((prevActiveStep)=> prevActiveStep +1);
  const backStep = () => setActiveStep((prevActiveStep)=> prevActiveStep -1);

  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep}/>  : <PaymentForm/>

  return (
      <main className={classes.layout} >
      <Paper className={classes.paper}>
        <Typography component='h1' variant='h4' align='center' > 
        checkout
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(step =>(
            <Step key={step}>
              <StepLabel>
                {step}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Form/>
        </Paper>
      </main>
     
  )
}

export default Checkout;
