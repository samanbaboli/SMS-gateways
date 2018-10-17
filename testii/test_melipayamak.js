const request=require('request')

const axios=require('axios');
username='09227112462';
password='9583';

axios({

    method:'post',
    url:'https://rest.payamak-panel.com/api/SendSMS/SendSMS',
    data:{
        username,
        password,
        from:'50001060657620',
        to:'09032112028',
        text:'kakkkkkkk'


    }
})
.then(result=>{

    console.log(result.data)
})
.catch((err)=>{

    console.log(err)
})
/*
request.post({

    url:'http://localhost:3000/sendSms',
    form:{

        auth:{
            username,
            password
        },
        message:'salam',
        sender:'50001060657620',
        receptor:'09032112028',
        gateway:'melipayamak'


    }


},(err,res,body)=>{

    if(err){

        console.log('Errr')

    }else{
        console.log('body')
    }


})
*/


/*
axios({

    method:'post',
    url:'http://localhost:3000/sendSms',
    data:{
        auth:{
            username,
            password
        },
        message:'salam',
        sender:'50001060657620',
        receptor:'09032112028',
        gateway:'melipayamak'
    }
})
.then((result)=>{
    console.log(result.data)
})
.catch((err)=>{
    console.log(err)
})
*/
/*
axios({

    method:'post',
    url:'http://localhost:3000/getInfo',
    data:{
        auth:{
            username,
            password
        },
        gateway:'melipayamak'
    }

})
.then((result)=>{

    console.log(result.data)
})
.catch((err)=>{

    console.log('Error in getting and passing data')
})*/