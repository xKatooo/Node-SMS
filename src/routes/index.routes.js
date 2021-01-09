const {Router}= require("express");
const router = Router();
const {indexControler, sendSms, recibirmensaje} =require('../controllers/index.controler')


router.get('/', indexControler);

router.post('/send-sms', sendSms)

router.post('/sms', recibirmensaje)

module.exports= router;