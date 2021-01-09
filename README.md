# Node-SMS
Send and receive SMS with node


Created with :
* Node.js
* Twilio
* Express 
* Express-Handlebars
* Socket.io
* Morgan 
* timeago.js
* MongoDB 

Requirements:
* Node.js
* MongoDB
* Ngrok

### Instalation:
`git clone https://github.com/xKatooo/Node-SMS.git`

`npm install`

### Run:


Before starting you need an account in twilio, enter this link and register, with which you receive 10 USD for you
<a href="www.twilio.com/referral/LmJFbK">Click Here!!</a>
once registered get a virtual number
then write the respective data in the .env file
after that run the following commands

`mongo`<br>
`npm start`<br>
`ngrok http 3000`<br>


(this step will have to be repeated every time you make a new ngrok tunnel)
then in : https://www.twilio.com/console/phone-numbers/incoming
click on your phone number
and in the webhook Messaging section write your ngrok link with "/sms" at the end
