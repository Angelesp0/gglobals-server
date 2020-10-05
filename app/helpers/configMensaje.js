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
        subject: 'Bienvenido a Gestoria Empresarial Global Service',
        html: `
        
<body style="width:100%;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#F6F6F6">
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
                <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                            <td class="es-adaptive es-info-area" align="center" style="padding:0;Margin:0">
                                <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:10px;Margin:0">
                                            <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:280px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td class="es-infoblock es-m-txt-c" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#CCCCCC">
                                                                        <font style="vertical-align:inherit">
                                                                            <font style="vertical-align:inherit">Pon tu texto de preencabezado aquí</font>
                                                                        </font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:280px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="right" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#CCCCCC">
                                                                        <a href="https://viewstripo.email" target="_blank" class="view" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC">
                                                                            <font style="vertical-align:inherit">
                                                                                <font style="vertical-align:inherit">Ver en el navegador</font>
                                                                            </font>
                                                                        </a>
                                                                    </p>
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
                    <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                            <td align="center" bgcolor="transparent" style="padding:0;Margin:0;background-color:transparent">
                                <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0;background-position:center top">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:167px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="Margin:0;padding-bottom:10px;padding-top:15px;padding-left:15px;padding-right:15px;font-size:0px">
                                                                    <a target="_blank" href="https://gglobals.com.mx/" class="rollover" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#84A5CA">
                                                                        <img src="cid:log@kreata.ee" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="137" class="rollover-first">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:257px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center top" role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td style="padding:0;Margin:0">
                                                                    <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr class="links" style="border-collapse:collapse">
                                                                            <td align="center" valign="top" width="50%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:21px;padding-bottom:21px;border:0" bgcolor="transparent"><a target="_blank" href="https://gglobals.com.mx/contabilidad/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:none;display:block;color:#0B5394;font-weight:normal">CONTABILIDAD</a></td>
                                                                            <td align="center" valign="top" width="50%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:21px;padding-bottom:21px;border:0" bgcolor="transparent"><a target="_blank" href="https://gglobals.com.mx/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:none;display:block;color:#0B5394;font-weight:normal">APP (GGLOBALS)</a></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:176px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fece00" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FECE00" role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" bgcolor="#333333" style="Margin:0;padding-top:10px;padding-left:10px;padding-right:10px;padding-bottom:15px"><span class="es-button-border es-button-border-4" style="border-style:solid;border-color:#002240;background:#3D85C6;border-width:0px;display:block;border-radius:4px;width:auto"><a href="https://gglobals.com.mx/" class="es-button es-button-3" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'merriweather sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;color:#FFFFFF;border-style:solid;border-color:#3D85C6;border-width:10px 15px;display:block;background:#3D85C6;border-radius:4px;font-weight:bold;font-style:italic;line-height:14px;width:auto;text-align:center">CONOCE Y DESCARGA NUESTRA APLICACION (GGLOBALS)</a></span></td>
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
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                            <td align="center" background="images/90581598042970589.jpg" style="padding:0;Margin:0;background-image:url(images/90581598042970589.jpg);background-repeat:repeat;background-position:left top">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;position:relative"><img class="adapt-img" src="cid:separador@kreata.ee" alt="indefinido" title="indefinido" width="100%" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" background="cid:log@kreata.ee" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-image:url(cid:log@kreata.ee);background-repeat:no-repeat;background-position:center top">
                                            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" height="0" style="padding:0;Margin:0"></td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-bottom:15px">
                                                                    <h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#002240">
                                                                        <font style="vertical-align:inherit">BIENVENIDO AL DEPARTAMENTO DE CONTABILIDAD DE GESTORIA EMPRESARIAL GLOBAL SERVICE SC
                                                                        </font>
                                                                    </h2>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-bottom:10px">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#0B5394">
                                                                        <font style="vertical-align:inherit">
                                                                            Impulsamos el desarrollo y competitividad de nuestras empresas, somos concientes del gran impacto que generan para nuestra economía nacional, es por ello que Gestoría Empresarial los impulsa a seguir adelante pese a cualquier circunstancia.en departamento implementado con el profesionalismo que nos caracteriza, con profesionales encargados de elaborar sus declaraciones de impuestos a la medida y siempre pensando en los intereses de cada uno de nuestros clientes.
                                                                        </font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><span class="es-button-border" style="border-style:solid;border-color:#002240;background:#002240;border-width:0px;display:inline-block;border-radius:5px;width:auto"><a href="https://gglobals.com.mx/directorio/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;color:#FFFFFF;border-style:solid;border-color:#002240;border-width:10px 20px 10px 20px;display:inline-block;background:#002240;border-radius:5px;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center"><font style="vertical-align:inherit"><font style="vertical-align:inherit">REVISA NUESTRO TUTORIAL DE MANEJO A NUESTRA APLICACION (GGLOBALS)</font></font></a></span>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                <a target="_blank" href="https://i.ytimg.com/an_webp/nHs9Htukl8c/mqdefault_6s_480x270.webp?du=3000&sqp=CLrtj_oF&rs=AOn4CLCdkmWaG-JWnWlcs-LrE_ODYhcXWA" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#002240" class="esd-frame-element esd-hover-element esdev-disable-select"><img class="adapt-img" src="cid:unique@kreata.ee" alt="Crea una blacklist con números dados de baja" width="530" title="Crea una blacklist con números dados de baja" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                </a>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" height="0" style="padding:0;Margin:0"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:260px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="cid:cont@kreata.ee" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="260">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" class="es-m-p20r es-m-p20l" style="padding:0;Margin:0;width:335px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;padding-right:20px">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#3D85C6"><strong><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">Bienvenido a Gestorial Empresarial</font></font></font></font></font></font></strong>
                                                                        <span data-cke-bookmark="1" style="display:none">&nbsp;</span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" class="es-m-txt-l" style="padding:0;Margin:0;padding-bottom:5px;padding-right:20px">
                                                                    <h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#002240"><span style="font-size:22px"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">DEPARTAMENTO A TU MEDIDA</font></font></font></font></font></font></span>
                                                                        <span data-cke-bookmark="1" style="display:none">&nbsp;</span>
                                                                    </h2>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-right:20px">
                                                                    <font style="vertical-align:inherit">Entendemos que tu mente está ocupada en operar tu empresa, afortunadamente nuestro servicio integral de elaboración de expresiones efectuadas el trabajo por ti.
                                                                    </font>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" bgcolor="#fafafa" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#FAFAFA">
                                            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-bottom:10px">
                                                                    <h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:bold;color:#002240">
                                                                            <font style="vertical-align:inherit">BENEFICIOS</font>
                                                                    </h2>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="Margin:0;padding-bottom:5px;padding-top:10px;padding-left:20px;padding-right:20px;background-color:#FAFAFA" bgcolor="#fafafa">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:272px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:1px;border-style:solid;border-color:#EFEFEF;background-color:#FFFFFF" bgcolor="#ffffff" role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;font-size:0px">
                                                                    <a target="_blank" href="https://telemart.ua/products/inno3d-geforce-rtx-2070-ichill-x3-jekyll-8192mb-c20703-08d6x-1790va16/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#002240"><img class="adapt-img img-1" src="cid:seguridad@kreata.ee" alt="Mejor renovación de casa" title="Mejor renovación de casa" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;background:url(cid:seguridad@kreata.ee) 50% center no-repeat #F9F9F9;box-shadow:#EEEEEE 0px 0px 0px 1px inset"
                                                                            width="270">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px">
                                                                    <h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#002240">
                                                                        <font style="vertical-align:inherit">SEGURIDAD</font>
                                                                    </h4>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="product-description" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p class="product-description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">
                                                                        <font style="vertical-align:inherit">Tu información es muy valiosa, por eso, para protegerla, aplicamos estándares de seguridad y utilizamos una herramienta diseñada para ti.
                                                                        </font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:23px;color:#002240"><strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:15px;text-decoration:none;color:#002240" href="https://gglobals.com.mx/contabilidad/"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">LEER MÁS ➟</font></font></font></font></font></font></a></strong>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:273px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:1px;border-style:solid;border-color:#EFEFEF;background-color:#FFFFFF" bgcolor="#ffffff" role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;font-size:0px">
                                                                    <a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#002240"><img class="adapt-img img-1" src="cid:asesoria@kreata.ee" alt="El trabajo en equipo eficaz" title="El trabajo en equipo eficaz" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;background:url(https://stripo.email/static//assets/img/default-img-back.png) 50% center no-repeat #F9F9F9;box-shadow:#EEEEEE 0px 0px 0px 1px inset"
                                                                            width="270">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px">
                                                                    <h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#002240">
                                                                        <font style="vertical-align:inherit">ASESORÍA INTEGRAL</font>
                                                                    </h4>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="product-description" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p class="product-description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">
                                                                        <font style="vertical-align:inherit">A cualquier hora nuestros estarán pendientes para asesorarte sobre cualquier tema relacionado con tus declaraciones.
                                                                        </font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:23px;color:#002240"><strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:15px;text-decoration:none;color:#002240" href="https://gglobals.com.mx/contabilidad/"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">LEER MÁS ➟</font></font></font></font></font></font></a></strong>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#FAFAFA" bgcolor="#fafafa">
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:272px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:1px;border-style:solid;border-color:#EFEFEF;background-color:#FFFFFF" bgcolor="#ffffff" role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;font-size:0px">
                                                                    <a target="_blank" href="https://telemart.ua/products/inno3d-geforce-rtx-2070-ichill-x3-jekyll-8192mb-c20703-08d6x-1790va16/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#002240"><img class="adapt-img img-1" src="cid:equipo@kreata.ee" alt="Profesión de la salud universitaria" title="Profesión de la salud universitaria" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;background:url(https://stripo.email/static//assets/img/default-img-back.png) 50% center no-repeat #F9F9F9;box-shadow:#EEEEEE 0px 0px 0px 1px inset"
                                                                            width="270">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px">
                                                                    <h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#002240">
                                                                        <font style="vertical-align:inherit">EQUIPO DE PROFESIONALES</font>
                                                                    </h4>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="product-description" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p class="product-description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">
                                                                        <font style="vertical-align:inherit">Ten la certeza que tus declaraciones están en manos de un equipo de profesionales.
                                                                        </font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:23px;color:#002240"><strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:15px;text-decoration:none;color:#002240" href="https://gglobals.com.mx/contabilidad/"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">LEER MÁS ➟</font></font></font></font></font></font></a></strong>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:273px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:1px;border-style:solid;border-color:#EFEFEF;background-color:#FFFFFF" bgcolor="#ffffff" role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;font-size:0px">
                                                                    <a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:#002240"><img class="adapt-img img-1" src="cid:tu@kreata.ee" alt="Reparación de mantenimiento " title="Reparación de mantenimiento " style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;background:url(https://stripo.email/static//assets/img/default-img-back.png) 50% center no-repeat #F9F9F9;box-shadow:#EEEEEE 0px 0px 0px 1px inset"
                                                                            width="270">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-left:15px;padding-right:15px">
                                                                    <h4 style="Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#002240">
                                                                        <font style="vertical-align:inherit">TÚ</font>
                                                                    </h4>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="product-description" style="Margin:0;padding-top:5px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p class="product-description" style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">
                                                                        <font style="vertical-align:inherit">Lo más importante para nosotros eres tú.</font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:15px;padding-right:15px">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:23px;color:#002240"><strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:15px;text-decoration:none;color:#002240" href="https://gglobals.com.mx/contabilidad/"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">LEER MÁS ➟</font></font></font></font></font></font></a></strong>
                                                                    </p>
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
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                            <td class="es-info-area" align="center" style="padding:0;Margin:0">
                                <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FECE00;width:600px" cellspacing="0" cellpadding="0" bgcolor="#fece00" align="center">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#9FC5E8" bgcolor="#9fc5e8">
                                            <table cellpadding="0" cellspacing="0" align="left" class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td class="es-m-p20b" align="center" valign="top" style="padding:0;Margin:0;width:30px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><img src="cid:call@kreata.ee" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="30"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="es-hidden" style="padding:0;Margin:0;width:5px"></td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:149px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="es-m-txt-c es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#002240"><strong><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:none;color:#333333" href="tel:(614)415-00-74"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">(614) 415-00-74&nbsp; </font></font><br><font style="vertical-align:inherit"><font style="vertical-align:inherit">(800) 002-15-96</font></font></font></font></font></font></a></strong>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="es-m-txt-c es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#002240">
                                                                        <font style="vertical-align:inherit">Lunes-Viernes. </font>
                                                                        <font style="vertical-align:inherit">8 am 6 pm</font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="es-hidden" style="padding:0;Margin:0;width:5px"></td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:30px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><img src="cid:email@kreata.ee" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="30">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="es-hidden" style="padding:0;Margin:0;width:5px"></td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:148px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="es-m-txt-c es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#002240"><strong><a target="_blank" href="mailto:your@mail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:none;color:#002240"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit"><font style="vertical-align:inherit">gestoriaempresarial@gglobals.com.mx</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></a></strong>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="es-m-txt-c es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#002240"><br>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="es-hidden" style="padding:0;Margin:0;width:5px"></td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:30px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" class="es-infoblock" style="padding:0;Margin:0;line-height:120%;font-size:0;color:#CCCCCC"><img src="cid:pub@kreata.ee" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="30"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr style="border-collapse:collapse">
                                                    <td align="left" style="padding:0;Margin:0;width:148px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left" class="es-m-txt-c es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#333333">
                                                                        <font style="vertical-align:inherit">Av. Cantera No. 9301, Piso No. 3, Suite C, Las Misiones, Chihuahua.
                                                                        </font>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td align="left" bgcolor="#0b5394" style="padding:0;Margin:0;padding-right:15px;padding-left:20px;background-color:#0B5394">
                                            <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" valign="top" style="padding:0;Margin:0;width:565px">
                                                        <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" class="es-infoblock" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;line-height:120%;font-size:0;color:#CCCCCC">
                                                                    <table border="0" width="75%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td style="padding:0;Margin:0;border-bottom:3px solid #002240;background:none;height:1px;width:100%;margin:0px"></td>
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
                                    <tr style="border-collapse:collapse">
                                        <td align="left" bgcolor="#9fc5e8" style="padding:0;Margin:0;padding-bottom:15px;padding-left:20px;padding-right:20px;background-color:#9FC5E8">
                                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td class="es-infoblock" align="center" style="padding:0;Margin:0;padding-bottom:10px;line-height:0px;font-size:0px;color:#CCCCCC">
                                                                    <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px">
                                                                            <a target="_blank" href="https://www.facebook.com/gglobals/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC" class="esd-frame-element esd-hover-element esdev-disable-select"><img title="Facebook" src="cid:facebook@kreata.ee" alt="Pensión completa" width="64" height="64" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                            </a>
                                                                            </td>
                                                                            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px">
                                                                            <a target="_blank" href="https://www.youtube.com/channel/UCNiHv2DhBQ6ICHHTQLLVMnw" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC" class="esd-frame-element esd-hover-element esdev-disable-select"><img title="Youtube" src="cid:instagram@kreata.ee" alt="Yt" width="64" height="64" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                            </a>
                                                                            </td>
                                                                            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px">
                                                                            <a target="_blank" href="https://www.instagram.com/gestoriaempresarial/?hl=es-la" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC" class="esd-frame-element esd-hover-element esdev-disable-select"><img title="Instagram" src="cid:web@kreata.ee" alt="Yo G" width="64" height="64" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                            </a>
                                                                            </td>
                                                                            <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px">
                                                                            <a target="_blank" href="https://web.whatsapp.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC" class="esd-frame-element esd-hover-element esdev-disable-select"><img title="Whatsapp" src="cid:whatsapp@kreata.ee" alt="Whatsapp" width="64" height="64" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                            </a>
                                                                            </td>
                                                                            <td valign="top" align="center" style="padding:0;Margin:0">
                                                                            <a target="_blank" href="https://gglobals.com.mx/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC" class="esd-frame-element esd-hover-element esdev-disable-select"><img title="Sitio web" src="cid:youtube@kreata.ee" alt="Sitio web" width="64" height="64" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                                                            </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" class="es-infoblock" style="padding:0;Margin:0;padding-top:5px;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                    <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:13px;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;line-height:16px;color:#002240">
                                                                        <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:13px;text-decoration:underline;color:#002240"
                                                                            href="https://gglobals.com.mx/aviso-de-privacidad/">
                                                                            <font style="vertical-align:inherit">Privacidad</font>
                                                                        </a>
                                                                        <font style="vertical-align:inherit">&nbsp;</font>
                                                                    </p>
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
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td class="es-infoblock made_with" align="center" style="padding:0;Margin:0;line-height:0px;font-size:0px;color:#CCCCCC">
                                                                    <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=construction3&utm_content=labor_day" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:roboto, 'helvetica neue', helvetica, arial, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC" class="esd-frame-element esd-hover-element esdev-disable-select">
                                                                        <img src="cid:log@kreata.ee" alt width="125" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
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
                </td>
            </tr>
        </table>
    </div>
</body>
        `,
        attachments: [{
                filename: 'Contrato.pdf',
                path: `http://192.168.137.1:3000/files/${formulario.contrato}`
            },
            {
                filename: 'Recibo.pdf',
                path: `http://192.168.137.1:3000/files/${formulario.recibo}`
            },
            {
                filename: 'Acuse.pdf',
                path: `http://192.168.137.1:3000/files/${formulario.acuse}`
            },
            {
                path: './public/images/a.png',
                cid: 'unique@kreata.ee'
            },
            {
                path: './public/images/facebook-circle-colored.png',
                cid: 'facebook@kreata.ee'
            },
            {
                path: './public/images/instagram-circle-colored.png',
                cid: 'instagram@kreata.ee'
            },
            {
                path: './public/images/link-circle-colored.png',
                cid: 'web@kreata.ee'
            },
            {
                path: './public/images/whatsapp-circle-colored.png',
                cid: 'whatsapp@kreata.ee'
            },
            {
                path: './public/images/youtube-circle-colored.png',
                cid: 'youtube@kreata.ee'
            },
            {
                path: './public/images/83361598030798632.png',
                cid: 'separador@kreata.ee'
            },
            {
                path: './public/images/30641598042313758.jpg',
                cid: 'cont@kreata.ee'
            },
            {
                path: './public/images/70551598032636609.jpg',
                cid: 'seguridad@kreata.ee'
            },
            {
                path: './public/images/90961598041905422.jpg',
                cid: 'asesoria@kreata.ee'
            },
            {
                path: './public/images/34781598043528521.jpg',
                cid: 'equipo@kreata.ee'
            },
            {
                path: './public/images/67631598032808214.jpg',
                cid: 'tu@kreata.ee'
            },
            {
                path: './public/images/85151561111018969.png',
                cid: 'call@kreata.ee'
            },
            {
                path: './public/images/97201561111196609.png',
                cid: 'email@kreata.ee'
            },
            {
                path: './public/images/64381561111477081.png',
                cid: 'pub@kreata.ee'
            },
            {
                path: './public/images/64561598030035877.png',
                cid: 'log@kreata.ee'
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
            <strong>Cantidad del pago:</strong> ${formulario.pago} <br/>
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