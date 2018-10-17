const chai = require('chai');
const request = require('request');
const expect = chai.expect;


let username = '09227112462';
let password = '9583';
let message = 'salam';
let sender = '50001060657620';
let receptor = '09032112028';
let gateway = 'melipayamak';

describe('TEST MELLI PAYAMAK SERVICE', () => {

    it('test sending sms', () => {

        request.post({

            url: 'http://localhost:3000/sendSms',
            data: {
                auth: {
                    username,
                    password
                },
                message,
                sender,
                receptor,
                gateway
            }

        }, (err, res, body) => {

            console.log(body)
        })

    })

})