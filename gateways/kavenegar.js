/**
	Kavenegar sms gateway
	Author : Saman Baboli
**/

// for make http or https requests
const request = require('request')

/** 
  @param {string} apikey
  @param {string} message
  @param {string} sender
  @param {string} receptor
  @param {function} callback
**/

module.exports.sendSms = (apikey, message, sender, receptor, callback) => {
        request.post({
            url: `https://api.kavenegar.com/v1/${apikey}/sms/send.json`,
            form: {
                receptor: receptor, // required
                message: message, // required
                sender: sender
            }
        }, function(err, httpResponse, body) {
            if (!err) {
                body = JSON.parse(body)
                body.status = 200
                callback(body)
            } else {
                callback(err)
            }
        })
    },


    /** 
      @param {string} apikey
      @param {function} callback
    **/
    module.exports.getInfo = (apikey, callback) => {
        request.post({
            url: `https://api.kavenegar.com/v1/${apikey}/account/info.json`,
        }, function(err, httpResponse, body) {
            if (!err) {
                body = JSON.parse(body)
                body.status = 200
                callback(body)
            } else {
                callback(err)
            }
        })
    }