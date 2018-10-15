const axios = require('axios')
const get_token = (api_key, security_code) => {

    return new Promise((resolve, reject) => {

        axios({
            method: 'post',
            url: 'http://RestfulSms.com/api/Token',
            data: {
                "UserApiKey": api_key,
                "SecretKey": security_code
            },
            headers: { 'Content-Type': 'application/json' }
        })
            .then((result) => {

                if (result.data['IsSuccessful']) {
                    resolve(result.data['TokenKey'])
                } else {
                    reject(result.data['Message'])
                }
            })
            .catch((error) => {
                reject('Error in getting or passing data')
            })
    })
}

const send = (messages, numbers, token, sender) => {
    return new Promise((resolve, reject) => {

        axios({

            method: 'post',
            url: 'http://RestfulSms.com/api/MessageSend',
            data: {
                "Messages": messages,
                "MobileNumbers": numbers,
                "LineNumber": sender,
                "SendDateTime": "",
                "CanContinueInCaseOfError": "false",
            },
            headers: { 'Content-Type': 'application/json', 'x-sms-ir-secure-token': token }
        })
            .then((result) => {

                if (result.data['IsSuccessful']) {

                    resolve(result.data['Message'])
                } else {

                    reject(result.data['Message'])
                }

            })
            .catch((error) => {

                reject('Error in getting or passing Token')

            })

    })
}

const sendSms = async (auth, messages, sender, numbers, callback) => {



    //parsing data
    /*let parsed_auth = JSON.parse(auth)
    let parsed_message = JSON.parse(messages)     //want to test with postman
    let parsed_sender = JSON.parse(sender);
    let parsed_numbers = JSON.parse(numbers)*/
    //end

    let parsed_auth = (auth)
    let parsed_message = (messages)     //want to send data with application
    let parsed_sender = (sender);
    let parsed_numbers = (numbers)



    //devide auth to api_key and security_code
    const api_key = parsed_auth['api_key'];
    const security_code = parsed_auth['security_code']


    try {

        let token = await get_token(api_key, security_code);
        let sent_result = await send(parsed_message, parsed_numbers, token, parsed_sender);
        callback({ result: sent_result, status: 200 });

    } catch (error) {

        callback(error)

    }
}



const getInfo = async (auth, callback) => {


    //let parsed_auth=JSON.parse(auth)  /* if you want to test with postman uncomment this line and comment next */
    let parsed_auth = (auth);
    let from = parsed_auth['from'];
    let to = parsed_auth['to'];
    let pages_number = parsed_auth['pages_number'];
    let page_number = parsed_auth['page_number'];
    let token = await get_token('21c69aca3a1e46feb189aca', '##@##')

    axios({

        method: 'post',
        url: `http://ws.sms.ir/api/MessageSend?Shamsi_FromDate=${from}&Shamsi_ToDate=${to}&RowsPerPage=${pages_number}&RequestedPageNumber=${pages_number}`,

        headers: {

            'Content-Type': 'application/json',
            'x-sms-ir-secure-token': token

        }
    })
        .then((result) => {

            if (result.data['IsSuccessful']) {
                callback({ result: result.data['Message'], status: 200 })
            } else {
                callback(result.data['Message'])
            }
        })
        .catch((err) => {
            callback('Error in gettting or passing data')
        })


}



module.exports = {

    sendSms,
    getInfo
}



