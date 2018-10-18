const axios=require('axios');


let username = '09227112462';
let password = '9583';
let message = 'salam test melipayamak';
let sender = '50001060657620';
let receptor = '09032112028';
let gateway = 'melipayamak';
let auth = {
    username,
    password
}


axios({

    method:'post',
    url:'https://rest.payamak-panel.com/api/SendSMS/SendSMS',
    data:{

        username,
        password,
        to:receptor,
        from:sender,
        text:message

    }

})
.then((result)=>{

    console.log(result.data)

})
.catch(err=>{

    console.log(err)
})