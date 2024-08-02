const nodeMailer=require('nodemailer')


const transport = nodeMailer.createTransport({
  // transport creating a transport to send a mail using host and port

  host:'smtp.gmail.com', //gmail host
  port:587,              // gmail port
  requireTLS:true,//to sent a mail fro transport layer
  secure:false,//it is not a secure metod to send a mail
  auth:{
    user:'nikhilkamble19985@gmail.com',
    pass:'rftd lyok twap hgkn'

  }
})


const mailOption={
  from:'nikhilkamble19985@gmail.com',
  to:'nikhilkamble19985@gmail.com',
  subject:'First Mail From NodeMailer ',
  text:'hellow from node mailer '
}

transport.sendMail(mailOption,function(err,data){
  if(err){
    console.log("Error while sending the mail");
  }
  console.log('Mail send successfully');
})