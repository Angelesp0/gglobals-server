const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sistemascuu@gglobals.com.mx', // Cambialo por tu email
            pass: 'A12345678' // Cambialo por tu password
        }
    });
    const cliente = {
        from: `AppGlobals 👻 <${formulario.email}>`,
        to: `${formulario.email}`, // Cambia esta parte por el destinatario
        subject: 'Datos Para facturacion (AppGlobals)',
        html: `
        <body style="margin: 0; padding: 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">	
            <tr>
                <td style="padding: 10px 0 30px 0;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                        <tr>
                            <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                               
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                            <b>Bienvenido a Gestoria Empresarial Global Service!</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                            Hemos registrado sus datos para ofrecerle el mejor servicio y Notificarle sobre posibles apoyos de gobierno, proyectos, entre otros
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                            &reg; Copyright © 2020 Global Service<br/>
                                        </td>
                                        <td align="right" width="25%">
                                            <table border="0" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                        <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                        </a>
                                                    </td>
                                                    <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                                    <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                        <a href="http://www.twitter.com/" style="color: #ffffff;">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
        `,
        attachments: [{
                filename: 'Contrato.pdf',
                path: `http://192.168.137.1:3000/files/${formulario.contrato}`
            },
            {
                filename: 'Recibo.pdf',
                path: `http://192.168.137.1:3000/files/${formulario.recibo}`
            }
        ]
    };

    const factura = {
        from: `AppGlobals 👻 <${formulario.email}>`,
        to: 'sistemascuu@gglobals.com.mx', // Cambia esta parte por el destinatario
        subject: 'Datos Para facturacion (AppGlobals)',
        html: `
            <strong>Razón Social:</strong> ${formulario.razon} <br/>
            <strong>RFC:</strong> ${formulario.rfc} <br/>
            <strong>Servicio:</strong> ${formulario.servicio} <br/>
            <strong>Uso CFDI:</strong> Gastos en general <br/>
            <strong>Forma de Pago:</strong> ${formulario.fpago} <br/>
            <strong>Cuenta de Pago:</strong> ${formulario.pago} <br/>
            <strong>Calle:</strong> ${formulario.calle} <br/>
            <strong>No Exterior:</strong> ${formulario.exterior} <br/>
            <strong>No Interior:</strong> ${formulario.interior} <br/>
            <strong>Colonia:</strong> ${formulario.colonia} <br/>
            <strong>Ciudad:</strong> ${formulario.ciudad} <br/>
            <strong>Estado:</strong> ${formulario.estado} <br/>
            <strong>Codigo Postal:</strong> ${formulario.cp} <br/>
            <strong>E-mail:</strong> ${formulario.email} 
        `
    };

    transporter.sendMail(cliente, function(err, info) {
        if (err)
            console.log(err)
        else
            transporter.sendMail(factura, function(err, info) {
                if (err)
                    console.log(err)
                else
                    console.log(info);
            });
    });
}