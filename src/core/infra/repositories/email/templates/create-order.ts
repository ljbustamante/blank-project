import { format } from 'date-fns'

import { OrderDetails } from '@core/dtos/OrderDetails'

interface Props {
  order: OrderDetails
}

export const CreateOrderHtml = ({ order }: Props): string => {
  return `
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no">
      <!--[if gte mso 9]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
      <title>Sabbi</title>
      <style type="text/css">
          body {margin: 0;padding: 0;font-family: Arial, Helvetica, sans-serif;color: #333;font-size: 14px }.border-radius-cuadros {border: 1px solid #eee !important;border-radius: 20px 0 20px 0 !important;-webkit-border-radius: 20px 0 20px 0 !important;-moz-border-radius: 20px 0 20px 0 !important;-o-border-radius: 20px 0 20px 0 !important;-ms-border-radius: 20px 0 20px 0 !important }.ReadMsgBody {width: 100% }.ExternalClass {width: 100% }.ExternalClass, .ExternalClass div, .ExternalClass font, .ExternalClass p, .ExternalClass span, .ExternalClass td {line-height: 100% }.yshortcuts a {border-bottom: none !important }.vb-outer {min-width: 0 !important }.ExternalClass, .RMsgBdy {width: 100%;background-color: #3f3f3f }[o365] button {margin: 0 !important }table {mso-table-rspace: 0;mso-table-lspace: 0 }#outlook a {padding: 0 }a {border: 0 !important;}img {outline: 0;text-decoration: none;border: none;-ms-interpolation-mode: bicubic }a img {border: none }.ii a[href] {color: #333 !important }@media only screen and (max-width:480px) {.mobile-w0, td[class=mobile-w0] {width: 0 !important }.mobile-hide, td[class=mobile-hide] {display: none !important }.mobile-textcenter, td[class=mobile-textcenter] {text-align: center !important }.mobile-textleft, td[class=mobile-textleft] {text-align: left !important }.mobile-height-auto {height: auto !important }.lh-1 {line-height: 1.3 !important }.mobile-sinborde {border: 0 !important;border: none !important }.mobile-img-full {width: 100% !important;max-width: 100% !important }.mobile-margen {width: 4% !important }td[class=mobile-margen] {width: 4% !important }.mobile-full {width: 100% !important;max-width: 480px !important;min-width: 100% !important }.mobile-width-20 {width: 30% !important;max-width: 80px !important;alignment: left;float: left }.mobile-width-80 {width: 69% !important;alignment: left;float: left }.mobile-width-35 {width: 35% !important;max-width: 85px !important;float: left }.mobile-width-65 {width: 64% !important;float: left }.mobile-height-70 {height: 70px !important;min-height: 70px !important }.img-55 {width: 75px !important;max-width: 75px !important;height: 75px !important }.mobile-height-65 {height: 75px !important;min-height: 75px !important }table[class=mobile-full] {width: 100% !important;max-width: 480px !important;min-width: 100% !important }.mobile-borde-top {width: 100% !important;max-width: none !important;border-top: 0 !important }.mobile-borde-right {width: 100% !important;max-width: none !important;border-bottom: 0 !important;border-right: 1px solid #e4e4e4 !important }.mobile-borde-bottom {width: 100% !important;max-width: none !important;border-bottom: 0 !important }.textmobile, font[class=textmobile] {font-size: 24px !important;line-height: 35px !important }.cntlogo {height: 20px !important }.ctn-select {height: 72px !important }.logo-Sabbi-ahorro, img[class=logo-Sabbi-ahorro] {width: 229px !important }.logo-zeta, img[class=logo-zeta] {width: 122px !important }.lgorespSabbi, img[class=lgorespSabbi] {width: 98px !important }.lgorespbenefit, img[class=lgorespbenefit] {width: 158px !important }.lgorespselect, img[class=lgorespselect] {width: 90px !important }.imghero, img[class=imghero] {width: 212px !important }.titulohero {font-size: 18px !important;line-height: 26px !important }.pasos-responsive {max-width: 100% !important;width: 100% !important }.font-mobile-44 {font-size: 44px !important }.font-mobile-40 {font-size: 40px !important }.font-mobile-30 {font-size: 30px !important }.font-mobile-24 {font-size: 24px !important }.font-mobile-20 {font-size: 20px !important }.font-mobile-18 {font-size: 18px !important }.font-mobile-16 {font-size: 16px !important }.icono-responsive-50 {width: 20px !important;max-width: 20px !important }.icono-responsive-70 {width: 70px !important;max-width: 70px !important }.mobile-height-50 {height: 20px !important }.mobile-table-icono {width: 70px !important;min-width: 70px !important;float: left }.mobile-table-texto {width: auto !important;float: left }.font-mobile-32 {font-size: 32px !important;line-height: 40px !important }.font-mobile-14 {font-size: 14px !important;line-height: 24px !important }.td-mobile-50 {width: 20px !important }.img-mobile-35 {width: 35px !important }.mobile-table-50 {width: 49% !important;max-width: 49% !important;clear: none !important }.font-mobile-12 {font-size: 12px !important }.mobile-table-width-80 {width: 80px !important }.mobile-content-logo {height: 18px !important }.mobile-space-logo {height: 16px !important }.mobile-valign-middle {vertical-align: middle }}
      </style>
  </head>

  <body alink="#00a94f" vlink="#00a94f" bgcolor="#C6D5E4">
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%; width: 100%;">
        <tbody>
            <tr>
                <td height="24" style="height: 24px;"></td>
            </tr>
            <tr>
                <td>
                    <table width="100%" bgcolor="#C6D5E4" cellpadding="0" cellspacing="0" border="0" style="background-color: #C6D5E4;">
                        <tbody>
                            <tr>
                                <td>
                                    <!--[if (gte mso 9)|(lte ie 8)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                    <table align="center" bgcolor="#062239" width="600" border="0" cellpadding="0" cellspacing="0" class="mobile-full" style="width: 600px; max-width: 600px; background-color: #062239;">
                                        <tbody>
                                            <tr>
                                                <td align="left">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; max-width: 100%;">
                                                        <tbody>
                                                            <tr>
                                                                <td width="20" class="mobile-margen" style="font-size: 6px;"></td>
                                                                <td height="25" style="height: 25px; font-size: 6px;"></td>
                                                                <td width="20" class="mobile-margen" style="font-size: 6px;"></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size: 6px;"></td>
                                                                <td valign="top">
                                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; max-width: 100%;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="center"><img alt="Sabbi" border="0" hspace="0" vspace="0" width="75" height="20" src="https://sabbi-media.s3.amazonaws.com/logo-sabbi.png" style="border: 0px; display: block; color: #062239; font-size: 13px; font-family: Helvetica, Arial, sans-serif; height: auto; max-width: 100%; width: 75px;"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td style="font-size: 6px;"></td>
                                                            </tr>
                                                            <tr>
                                                                <td width="20" class="mobile-margen" style="font-size: 6px;"></td>
                                                                <td height="25" style="height: 25px; font-size: 6px;"></td>
                                                                <td width="20" class="mobile-margen" style="font-size: 6px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <!--[if (gte mso 9)|(lte ie 8)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                    <table align="center" width="600" border="0" cellpadding="0" cellspacing="0" class="mobile-full" style="width: 600px; max-width: 600px; background-color: #ffffff;">
                                        <tbody>
                                            <tr>
                                                <td width="50" class="mobile-margen" style="font-size: 6px;"></td>
                                                <td align="left">
                                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="mobile-full" style="width: 100%; max-width: 100%;">
                                                        <tr>
                                                            <td height="30" style="height: 30px; font-size: 6px;"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style="color: #062239; font-size: 18px; font-family: Arial, Helvetica, sans-serif; line-height: 24px; text-align: left; font-weight: bold;">Hola, ${
                                                                  order.investor.names
                                                                }:</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style="height: 15px; font-size: 6px;"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left; font-weight: bold;">¡Felicitaciones! Acabas de generar una orden de inversión.</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style="height: 15px; font-size: 6px;"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;">A continuación, te compartimos los datos de tu orden generada:</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style="height: 15px; font-size: 6px;"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <table bgcolor="#f8f8f8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="mobile-full table-radius" style="width: 100%; max-width: 100%; background-color: #f8f8f8;border-radius: 10px;">
                                                                    <tr>
                                                                        <td width="20"></td>
                                                                        <td height="15"></td>
                                                                        <td width="20"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>
                                                                            <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;"><span class="mobile-block" style="font-weight: bold;">Producto:</span> ${
                                                                              order.product.name
                                                                            }</div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td height="15"></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>
                                                                            <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;"><span class="mobile-block" style="font-weight: bold;">Manager:</span> ${
                                                                              order.product.manager
                                                                            }</div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td height="15"></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>
                                                                            <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;"><span class="mobile-block" style="font-weight: bold;">Asset Class:</span> ${
                                                                              order.product.assetClass.name
                                                                            }</div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td height="15"></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>
                                                                            <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;"><span class="mobile-block" style="font-weight: bold;">Monto Invertido:</span> ${
                                                                              order.product.currency
                                                                            } ${order.amount.toLocaleString()}</div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td height="15"></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>
                                                                            <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;"><span class="mobile-block" style="font-weight: bold;">Fecha de la orden:</span> ${format(
                                                                              new Date(order.createdAt),
                                                                              'dd-MMM-yy',
                                                                            )}</div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td height="15"></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td></td>
                                                                        <td>
                                                                            <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;"><span class="mobile-block" style="font-weight: bold;">Código de la orden:</span> ${
                                                                              order.code
                                                                            }</div>
                                                                        </td>
                                                                        <td></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="20"></td>
                                                                        <td height="15"></td>
                                                                        <td width="20"></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style="height: 15px; font-size: 6px;"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;">Puedes seguir descubriendo los productos de inversión que te ofrece Sabbi en <a href="${
                                                                  process.env.FRONTEND_WEB_BASE_URL
                                                                }" target="_blank" style="color: #097CFA; text-decoration: none; font-weight: bold;">my.sabbi.la</a></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15" style="height: 15px; font-size: 6px;"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;">¡Que disfrutes tu journey!</div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td height="15" style="height: 15px; font-size: 6px;"></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left;">Sinceramente,</div>
                                                                <div style="color: #062239; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 20px; text-align: left; font-weight: bold;">Team Sabbi</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="30" style="height: 30px; font-size: 6px;"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td width="50" class="mobile-margen" style="font-size: 6px;"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <!--[if (gte mso 9)|(lte ie 8)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
                                    <table align="center" bgcolor="#062239" width="600" border="0" cellpadding="0" cellspacing="0" class="mobile-full" style="width: 600px; max-width: 600px; background-color: #062239;">
                                        <tbody>
                                            <tr>
                                                <td align="left">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; max-width: 100%;">
                                                        <tbody>
                                                            <tr>
                                                                <td width="50" class="mobile-margen" style="font-size: 6px;"></td>
                                                                <td height="20" style="height: 20px; font-size: 6px;"></td>
                                                                <td width="50" class="mobile-margen" style="font-size: 6px;"></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size: 6px;"></td>
                                                                <td valign="top">
                                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%; max-width: 100%;">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <div style="color: #ffffff; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: 16px; text-align: center;">Este correo eletrónico fue enviado por Sabbi SAC</div>
                                                                                    <div style="color: #ffffff; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: 16px; text-align: center;">Por favor, no responder este e-mail. Si tienes alguna consulta por favor escribenos a <span style="font-weight: bold;">info@sabbi.la</span></div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td height="30" style="height: 30px;"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left">
                                                                                    <!--[if (gte mso 9)|(lte ie 8)]><table dir='rtl' align='left' border='0' cellpadding='0' cellspacing='0' width='500'><tr><td align='left' valign='top' width='280'> <![endif]-->
                                                                                    <table border="0" cellpadding="0" cellspacing="0" align="right" class="mobile-full" style="width: 280px; max-width: 279px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td valign="middle" class="mobile-height-auto">
                                                                                                    <table dir="ltr" border="0" cellpadding="0" cellspacing="0" width="100%" class="calcular-altura" style="width: 100%; max-width: 100%;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" class="mobile-height-auto">
                                                                                                                    <div class="mobile-textcenter" style="color: #ffffff; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: 16px; text-align: right;">Av. República de Colombia 791, oficina 702, San Isidro</div>
                                                                                                                    <div class="mobile-textcenter" style="color: #ffffff; font-size: 10px; font-family: Arial, Helvetica, sans-serif; line-height: 16px; text-align: right;">©️ 2022 Sabbi. Todos los derechos reservados.</div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <!--[if (gte mso 9)|(lte ie 8)]></td><td align='left' valign='top' width='20'> <![endif]-->
                                                                                    <table border="0" cellpadding="0" cellspacing="0" align="right" class="mobile-full" style="width: 19px; max-width: 19px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td width="20" height="15" style="height: 15px; font-size: 6px;"></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <!--[if (gte mso 9)|(lte ie 8)]></td><td align='left' valign='top' width='200'> <![endif]-->
                                                                                    <table border="0" cellpadding="0" cellspacing="0" align="left" class="mobile-full" style="width: 199px; max-width: 199px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td valign="middle" align="left" class="mobile-textcenter mobile-height-auto" style="text-align: left;">
                                                                                                    <img alt="Sabbi" border="0" hspace="0" vspace="0" width="141" height="21" src="https://sabbi-media.s3.amazonaws.com/sabbi-por-core-capital-claro.png" style="border: 0px; display: inline-block; color: #062239; font-size: 13px; font-family: Helvetica, Arial, sans-serif; height: auto; max-width: 100%; width: 141px;">

                                                                                                    </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <!--[if (gte mso 9)|(lte ie 8)]></td></tr></table> <![endif]-->
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                                <td style="font-size: 6px;"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="20" style="height: 20px;"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="24" style="height: 24px;"></td>
            </tr>
        </tbody>
    </table>
</body>
  </html>
  `
}
