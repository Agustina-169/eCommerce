import { Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider }  from 'react-hook-form'
import Addressinput from './Addressinput';


export const AddressForm = () => {
  const methods = useForm();

  return (
    <>
    <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form>
        <Grid container spacing={3}>
          <Addressinput required name='fistName'  label='First Name'/>
        </Grid>
        </form>
      </FormProvider>
     
    </>
  )
}

export default AddressForm;