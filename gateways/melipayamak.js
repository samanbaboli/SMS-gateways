const axios = require('axios');
const request=require('request')


const getInfo = (auth, callback) => {

    let username = auth.username;
    let password = auth.password;
    axios({
        method: 'post',
        url: 'https://rest.payamak-panel.com/api/SendSMS/GetCredit',
        data: {
            username,
            password
        }
    })
        .then((result) => { return result.data })
        .then((result) => {

            if (result.Value !== null && result.RetStatus === 1 && result.StrRetStatus === 'Ok') {
                callback({ status: 200, 'result': result.Value })
            } else {
                callback({ status: 401, result: 'error in getting data successfully' })
            }
        })
        .catch((err) => {
            callback('Error in sending and getting data')
        })
}


/*
const sendSms=(auth, message, sender, receptor, callback)=>{

    let username=auth.username;
    let password=auth.password;
    


    axios({

        method: 'post',
        url: 'https://rest.payamak-panel.com/api/SendSMS/SendSMS',
        data: {
            username,
            password,
            sender,
            receptor,
            message
        }
    })
    .then((result)=>{

        let data=result.data;
        

        if(data['RetStatus'] == 1 && data['StrRetStatus']=='Ok'){
            callback({ status: 200, message: 'successfully sent message',data:'data' })
        }else{
            callback({ status: 401, message: 'error in sending...',data })
        }
    })
    .catch(err=>{
        callback('Error in getting and passing data')
    })

}

*/

const sendSms=(auth, message, sender, receptor, callback)=>{

    let username=auth.username;
    let password=auth.password;
    request.post({

        
        url:'https://rest.payamak-panel.com/api/SendSMS/SendSMS',
        form:{
            username,
            password,
            sender,
            receptor,
            message
        }


    },(err,res,body)=>{

        if(err){
            console.log('Errrr')
           
        }else{
            console.log('JSON.parse(body)');
            
        return;

        }

        

        //callback(body)

    })


}


module.exports = {
    sendSms,
    getInfo
}