# Sms Gateways
Using this Node.js service you'll be able to send SMS using multiple services.

For example if you're a SAAS company maybe your customers want to integrate their sms panel with your platfrom and use it for sending SMS.

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

| Number  | Type |
| ------------- | ------------- |
| 1  | Token  |
| 2  | User Pass  |
| 3  | Other  |

You can check this types in your client and ask user for token or user pass.

After that:

Add YourWebserviceName.js to './gateways' - it name must be that name what you added to gateways.json file:

 You can use ./gateways/sample.js 
