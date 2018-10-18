const request = require('request');
const expect = require('chai').expect;


let api_key = '21c69aca3a1e46feb189aca';
let security_code = '##@##';
let auth = {
    api_key,
    security_code
}
let messages = ['salam test sms_ir'];
let sender = '50002015832245';
let numbers = ['09227112462']
let gateway = 'sms_ir'


describe('TEST SMS_IR SMS SERVICE', () => {

    it('test sending sms', (done) => {

        request.post({

            url: 'http://localhost:3000/sendSms',
            form: {

                auth,
                message:messages,
                sender,
                receptor: numbers,
                gateway

            }

        }, (err, res, body) => {

            if(err){

                throw Error('eroor')
                done()

            }else{

                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
                
            }
        })

    })

    it('test getting info', (done) => {

        request.post({

            url: 'http://localhost:3000/getInfo',
            form: {

                auth,
                gateway
            }
        }, (err, res, body) => {

            if(err){

                throw Error('eroor')
                done()

            }else{
                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
            }


        })
    })

})