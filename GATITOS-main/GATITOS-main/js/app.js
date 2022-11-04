const nodemailer = require("nodemailer");

enviarMail = async ()=> {

    const config = {
        host : 'smtp.gmai.com',
        port : 587,
        auth : {
            user : 'lapaginadegatitos@gmail.com',
            pass: runcltujjefmoafq
        }
    } 

    const mensaje = {
        from : 'lapaginadegatitos@gmail.com',
        to : '${emailUser}',
        subject : 'Que gatito sos según tu signo!',
        text : 
    }

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);
}

enviarMail();