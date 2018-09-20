/**
	Kavenegar sms gateway
	Author : Saman Baboli
	Company : Raychat.io
**/
const request = require('request');

module.exports.sendSms = (apikey, message, sender, receptor, callback) => {
    request.post({
        url: `https://api.kavenegar.com/v1/${apikey}/sms/send.json`,
        form: {
            receptor: receptor, //required
            message: message, //required
            sender: sender,
        }
    }, function(err, httpResponse, body) {
        if (!err) {
            body = JSON.parse(body);
            body.status = 200;
            callback(body)
        }else{
        	callback(err)
        }

    })
},
module.exports.getInfo = (apikey,callback) => {
    request.post({
        url: `https://api.kavenegar.com/v1/${apikey}/account/info.json`,
    }, function(err, httpResponse, body) {
        if (!err) {
            body = JSON.parse(body);
            body.status = 200;
            callback(body)
        }else{
        	callback(err)
        }

    })
}