import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js'
import Router from'./routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';
//What is a UUID used for?
// A UUID – that's short for Universally Unique IDentifier, by the way – is a 36-character alphanumeric string that can be used to identify information. It can be used as a primary key
import {v4 as uuid} from 'uuid';
const app=express();

//initialising dotenv
dotenv.config();

//when we handle same data feom two diff ports then cors issue is created 
 app.use(cors());


app.use(bodyParser.json({   extended: true }));
//url needs tobe parsed so that random charcters r not inserted in white spaces of url and url remains intact
// /The extended option is a boolean that determines whether the values in the URL-encoded data can be any data type (true) or only strings (false). By setting extended: true, the values can be of any data type, and the data will be parsed into a JSON-like object where values can be arrays or objects.
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Router);
//making express server
const PORT=8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'sumishrivastava515@gmail.com'
paytmParams['MOBILE_NO'] = '9174070313'
