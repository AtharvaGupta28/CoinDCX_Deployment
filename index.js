import express from "express";
import request from "request";
import crypto from "crypto";
import 'dotenv/config';

const app=express();
const port=3000;
app.use(express.json());

const baseurl = "https://api.coindcx.com"

// Place your API key and secret below. You can generate it from the website.
const key = process.env.API_KEY;
const secret = process.env.API_SECRET;

app.post("/signal",async (req,res)=>{
    console.log(req.body);
    // const signal=req.body.signal;
    // const ticker=req.body.name;
    // const sl=req.body.sl;
    // const tp=req.body.tp;
    // const timeStamp = Math.floor(Date.now());

    // const body = {
    //     "timestamp": timeStamp , // EPOCH timestamp in seconds
    //     "order": {
    //     "side": signal, // buy OR sell
    //     "pair": ticker, // instrument.string
    //     "order_type": "market_order", // market_order OR limit_order 
    //     "stop_price": sl,
    //     "take_profit": tp,
    //     "total_quantity": 0.009,
    //     "leverage": 1,
    //     "notification": "push_notification", // no_notification OR email_notification OR push_notification
    //     "time_in_force": "good_till_cancel", // good_till_cancel OR fill_or_kill OR immediate_or_cancel
    //     "hidden": false,
    //     "post_only": false
    //     }
    // }
        
    // const payload = Buffer.from(JSON.stringify(body)).toString();
    // const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex')
        
    // const options = {
    //     url: baseurl + "/exchange/v1/derivatives/futures/orders/create",
    //     headers: {
    //         'X-AUTH-APIKEY': key,
    //         'X-AUTH-SIGNATURE': signature
    //     },
    //     json: true,
    //     body: body
    // }
    
    // request.post(options, function(error, response, body) {
    //     console.log(body);
    // })
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});