import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider }  from 'react-hook-form'
import { Link } from 'react-router-dom';
import Addressinput from './Addressinput';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';


export const AddressForm = ({nextStep}) => {
  const methods = useForm();
  const[{shippingData}, dispatch] = useStateValue();

  return (
    <>
    <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data =>{
         dispatch({
          type: actionTypes.SET_SHIPPINGDATA,
          shippingData: data,
         }); 
          nextStep();
        })}>
        <Grid container spacing={3} >
          <Addressinput required name='fistName'  label='First Name'/>
          <Addressinput required name='lastName'  label='Last Name'/>
          <Addressinput required name='address1'  label='Address'/>
          <Addressinput required name='email'  label='Email'/>
          <Addressinput required name='city'  label='City'/>
          <Addressinput required name='postCode'  label='Post Code'/>
        </Grid>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:'2rem'} }>
          <Button component={Link} to='checkout-page' variant='contained'color='primary' >Back</Button>
          <Button type='submit' variant='contained' color='primary'>Next</Button>
        </div>
        </form>
      </FormProvider>
     
    </>
  )
}

export default AddressForm;