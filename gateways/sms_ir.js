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

    //devide auth to api_key and security_code
    let api_key = auth['api_key'];
    let security_code = auth['security_code']


    try {

        let token = await get_token(api_key, security_code);
        let sent_result = await send(messages, numbers, token, sender);
        callback({ result: 'successfully sent message', status: 200 });

    } catch (error) {

        callback('Error in getting and passing data')

    }
}


const getInfo=async (auth,callback)=>{

    let api_key =auth['api_key'];
    let security_code = auth['security_code'];
    let token=await get_token(api_key, security_code);
    
    axios({
        
        method:'get',
        url:'http://RestfulSms.com/api/credit',
        headers:{'x-sms-ir-secure-token':token}

    })
    .then(result=>{

        return result.data
    })
    .then((data)=>{

        if(data['IsSuccessful']){
            callback({ status: 200, 'result': `${data['Credit']} عدد` }) 
        }else{
            callback({ status: 401, result: 'error in getting data successfully' })
        }

    })
    .catch(err=>{

        callback('Error in getting and passing data')
    })
    
}


module.exports = {

    sendSms,
    getInfo
}



