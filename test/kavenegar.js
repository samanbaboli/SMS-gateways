const chai = require('chai');
const request = require('request');
const expect = chai.expect;


const auth = '6D76526241694E576B2B6452787431446162645645494F6176714D4432496D54';
const gateway = 'kavenegar';
let message = 'salam test kavanegar';
let sender = '';
let receptor = '09227112462';



describe('TEST KAVENEGAR SMS SERVICE', () => {

    it('test getting info', (done) => {

        request.post({

            url: 'http://localhost:3000/getInfo',
            form: {
                auth,
                gateway
            }
        }, (err, res, body) => {

            if (err) {

                throw Error(err)
                done()

            } else {
                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
            }
        })
    })


    it('test sending sms', (done) => {

        request.post({

            url: 'http://localhost:3000/sendSms',
            form: {
                auth,
                gateway,
                message,
                sender,
                receptor
            }
        }, (err, res, body) => {
            
            if (err) {

                throw Error(err)
                done()

            } else {
                expect((JSON.parse(body))['status']).have.to.equal(1);
                done()
            }

        })
    })
})