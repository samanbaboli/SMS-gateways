# Sms Gateways
Using this Node.js REST-full API you'll be able to send SMS using multiple services.

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
Some of web services just need a token to authorize and some of them need username and password, you can specify Auth type with this numbers :

| Number  | Type |
| ------------- | ------------- |
| 1  | Token  |
| 2  | User Pass  |
| 3  | Other  |

You can check this types in your client and ask user for token or user pass.

After that:

Add YourWebserviceName.js to './gateways' - it name must be that name what you added to gateways.json file:

 You can use ./gateways/sample.js 
 
 ## How to use?
 
 1. Clone this project
 ```
 git clone https://github.com/samanbaboli/SMS-gateways.git
 ```
2. go to project directory
3. install dependencies 
```
npm install
```
4. and after that
```
node index.js 
```

 * Send SMS
 
```POST /sendSms```
 
 
 | Field  | Type |  * | Description |
| ------------- | ------------- | ------------- | ------------- |
auth | string or object  | required  | your auth data(depends on your web service it can be an object or a string) |
| message  | string  |required  | message  |
|sender  | string  |required  | sender number |
|receptor  | string  |required  | receptor number |
|gateway  | string  |required  | web service name |

 * Get account information
 
```POST /getInfo```
 
 
 | Field  | Type |  * | Description |
| ------------- | ------------- | ------------- | ------------- |
auth | string or object  | required  | your auth data(depends on your web service it can be an object or a string) |
|gateway  | string  |required  | web service name |

