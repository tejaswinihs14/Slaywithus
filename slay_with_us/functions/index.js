const functions = require('firebase-functions');
const express = require("express");

const  cors = require('cors');

const stripe = require("stripe")('sk_test_51HYdqlFhBzxwYoEqnUF4Af35uFGgY4anWpSISpcSiDitpYyvUfjRv7Gk1l33ei4sDmHcvb5oC1gfnjYCtmUyulQv005QTPFDEh')



const app = express();
app.use(cors({ origin: true}));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Received!! for this amount>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    });

exports.api = functions.https.onRequest(app);

//(http://localhost:5001/slay-with-us/us-central1/api)