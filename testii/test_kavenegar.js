    const request = require('request');
request.post({
            url: `http://localhost:3000/getInfo`,
            form: {
                auth : "6D76526241694E576B2B6452787431446162645645494F6176714D4432496D54",
                gateway : "kavenegar" 
            }
        }, function(err, httpResponse, body) {
            if (err) {
            	console.log(err)
            } else {
            body = JSON.parse(body);
            	console.log(body)
            }
        })