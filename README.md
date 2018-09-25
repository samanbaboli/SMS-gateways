# sms Gateways
Using this Node.js service you can run a service that it able to send sms using multiple services.

For example if you are a software as a service company maybe your customers want to integrate their sms panel with your platfrom and use it.

Using this service you can add multiple gateways and show them in your panel.

### Add your web service:

Add your web service information to ./gateways/gateways.json

```
"YourWebserviceName" : {
	    	 "name": "YourWebserviceName",
	      	"localName" : "نام وب سرویس شما",
	        "developer": "@yourGithubId",
	        "website": "http://domain.com",
	        "logo": "/logos/YourWebserviceName.png",
	        "country": "IR",
	        "AuthType" : 1 
    	} 
```
Some of web services just need a token to authorize and some of them need username and password, you can specify Auth type with below auth types :
```
Auth Types 
 1 : Token base
 2 : user pass
 3 : other
```

Add yourwebservice.js to './gateways' - it name must be that name what you added to gateways.json file
