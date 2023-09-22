/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51NpWshSCeCxhNj7c98eU7xCtqLznC3lf8WZXv0xTexedcDyjYiLMKIsuEGfl6t3JJZxTAwGwFWix4F9BghfmqpKr00PTiRQnoB')

const app = express()

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200, // For legacy browser support
//     methods: "GET, PUT",
// }

app.use(cors({ origin: ["http://localhost:3000", "'http://127.0.0.1:5001/ecommerce-4c692/us-central1/api/payments/create"] }));

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Hello world')
})

app.post('/payments/create', async(req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");


    const total = req.query.total
    
    console.log('payment receive BOOMOMOM , for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total,
        currency : "inr",
    })

    res.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

exports.api = onRequest(app)

//http://127.0.0.1:5001/ecommerce-4c692/us-central1/api
