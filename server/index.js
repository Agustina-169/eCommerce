const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const stripe = new Stripe("sk_test_51Lmgb5Kzhzd3hU3yDEN8ByWL6GKpMQX2pFh82wCQKKBhWy3Zp5j4jPObpoh3NtRBB4jIbefSXASiMKEHcPjdEfOS00ivAmTZuC")


const app = express();
//middleware

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json())


app.post('/api/checkout', async(req,res)=>{
    console.log(req.body);
    res.send('recibido');
    const {id, amount} = req.body;

    try {
        const payment = await stripe.paymentItents.create({
            amount,
            currency : "AR",
            description: "Basket of products",
            confirm: true,
        })
        console.log(payment)
        return res.status(2000).json({message : "Succesful payment"})

    } catch (error) {console.log(error)}
})



app.listen(3001,() => {
    console.log('server listening port' ,3001)
})

