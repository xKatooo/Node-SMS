const timeago = require('timeago.js');

const { phone } = require("../config");

module.exports = {

    hideNumber:(phoneNumber = "")=>{
        return phoneNumber.replace(/[0-9]/g, 'x');
    },
    timeago:(date)=>{
        return timeago.format(date);
    }
}