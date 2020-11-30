const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HswFsFCp7ibaXEOHtC7pPnDWVybnw5aDpusFlciA4lDlJGBx6e91dVFCCgx8W7D5bGTNzCZ2toR1eWHeduit9yj00lWKSL8Wx");

// API

// - App config
const app = express();

// - middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (req, res) => res.status(200).send('This works'));
app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Receieved for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    // OK created
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

