const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAILHOG_HOST,
  port: '1025',
  auth: null
});

transport.sendMail({
  from: 'Uillian Henrique <SEUEMAIL@gmail.com>',
  to: 'Eu mesmo <EMAILQUEQUERIAENVIAR@gmail.com>',
  subject: 'Testando Mailhog',
  html: '<body> <H1>Teste de Envio..</H1> <p>Haha deu certo.. NICE =D</p> </body>'
})