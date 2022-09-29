import { Button, Divider, Typography } from '@material-ui/core';
import Review from './Review';
import { Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import accounting from 'accounting';

const stripePromise =  loadStripe('pk_test_51Lmgb5Kzhzd3hU3yoOIvw8ibodbVCKUiRQGIeTEbuJF1wXB7Ovy33fnmuTtYcTp3RH8W4Y0KaCyJPcio8HjMMQWu008fPHsOZ7');
const CARD_ELEMENT_OPTIONS ={
  inconStyle:'solid',
  hidePostalCode: true,
  style:{
    base: {
      iconColor: 'rgb(240 , 57 , 122)',
      color:'#333',
      fontSize: '18px',
      '::placeHolder':{
        color:'#ccc',
      },
    },
    invalid:{
      color:'#e5424d',
      ':focus':{
        color:'#303238',
      },
    },
  },
};



const CheckoutForm = ({backStep, nextStep}) => {
  const [{basket, dispatch }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit= async (e) =>{
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if(!error){
      const {id} = paymentMethod;
    }
  }
 
  return(
    <form onSubmit={handleSubmit}>
      
      <CardElement options={CARD_ELEMENT_OPTIONS}/>
    <div style={{display:'flex', justifyContent:'space-between', marginTop:'2rem'} }>
      <Button variant='outlined' 
      color='primary' 
      onClick={backStep}>
        Back
      </Button>

      <Button disabled={false} 
      type='submit' 
      variant='contained'  
      color='primary'>
     {`Pay ${accounting.formatMoney(getBasketTotal(basket),'$' )}`}
      </Button>
      </div>
    </form>
  )
}

const PaymentForm = ({backStep, nextStep}) => {
  return (
    <>
    <Review/>
    <Divider/>
    <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>
      Payment method
      </Typography>
      <Elements stripe={stripePromise} >
        <CheckoutForm backStep={backStep} nextStep={nextStep}/>
      </Elements>
    </>
  )
}

export default PaymentForm