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


Before starting you need an account in twilio, enter this link and register
<a href="https://www.twilio.com">Click Here!!</a>
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

Example: <br>
<img src="https://github.com/xKatooo/Node-SMS/blob/master/Sin%20t%C3%ADtulo.png?raw=true">


After that send a message to your virtual number and update localhost: 3000, if this is your message it means that everything will be fine and the database has been created, now the messages will arrive in real time
