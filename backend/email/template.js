const template = (title, content, name) => `
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head>
  <title>Miaki Notes Plus</title>
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta content="yes" name="apple-mobile-web-app-capable">
  <meta name="x-apple-disable-message-reformatting">
  <meta content="black" name="apple-mobile-web-app-status-bar-style">
  <meta content="telephone=no" name="format-detection">

  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->

<!--[if (gte mso 9)|(IE)]>
<xml>
<o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->

<style type="text/css">
@media screen {
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/zhcz-_WihjSQC0oHJ9TCYBsxEYwM7FgeyaSgU71cLG0.woff) format('woff');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'), url(https://fonts.gstatic.com/s/montserrat/v12/q2OIMsAtXEkOulLQVdSl024H_cQCpNmkmj7HsMzmiiM.woff) format('woff');
  }
  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 500;
    src: local('Gotham Medium'), local('Gotham-Medium'), url(https://robust.email/documentation/assets/fonts/Gotham-Medium.woff) format('woff');
  }
  @font-face {
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 600;
    src: local('Geomanist Bold'), local('Geomanist-Bold'), url(https://robust.email/documentation/assets/fonts/geomanist-bold-webfont.woff) format('woff');
  }
  @font-face {
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 400;
    src: local('Geomanist Regular'), local('Geomanist-Regular'), url(https://robust.email/documentation/assets/fonts/geomanist-regular-webfont.woff) format('woff');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 400;
    src: local('Europa Regular'), local('Europa-Regular'), url(https://robust.email/documentation/assets/fonts/Europa-Regular.woff) format('woff');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 300;
    src: local('Europa Light'), local('Europa-Light'), url(https://robust.email/documentation/assets/fonts/Europa-Light.woff) format('woff');
  }
  @font-face {
    font-family: 'Europa';
    font-style: normal;
    font-weight: 600;
    src: local('Europa Bold'), local('Europa-Bold'), url(https://robust.email/documentation/assets/fonts/Europa-Bold.woff) format('woff');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    src: local('Cabin'), local('Cabin-Regular'), url(https://fonts.gstatic.com/s/cabin/v14/u-4x0qWljRw-Pd8w__s.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 500;
    src: local('Cabin Medium'), local('Cabin-Medium'), url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdfD3Ohluy8.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 600;
    src: local('Cabin SemiBold'), local('Cabin-SemiBold'), url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-Pdfv2-hluy8.woff) format('woff');
  }
  @font-face {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 700;
    src: local('Cabin Bold'), local('Cabin-Bold'), url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdeL2uhluy8.woff) format('woff');
  }
  @font-face {
  font-family: 'Soleil';
  font-style: normal;
  font-weight: 400;
  src: local('Soleil Regular'), local('Soleil-Regular'), url(https://robust.email/documentation/assets/fonts/Soleil-Regular.woff) format('woff');
  }
  @font-face {
  font-family: 'Museo Sans';
  font-style: normal;
  font-weight: 500;
  src: local('MuseoSans 500'), local('MuseoSans-500'), url(https://robust.email/documentation/assets/fonts/MuseoSans_500.woff) format('woff');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/playfairdisplay/v19/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiunDXbtU.woff) format('woff');
  }
  @font-face {
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 400;
    src: local('PT Sans Caption'), local('PTSans-Caption'), url(https://fonts.gstatic.com/s/ptsanscaption/v12/0FlMVP6Hrxmt7-fsUFhlFXNIlpcaeg_3.woff) format('woff');
  }
  @font-face {
    font-family: 'PT Sans Caption';
    font-style: normal;
    font-weight: 700;
    src: local('PT Sans Caption Bold'), local('PTSans-CaptionBold'), url(https://fonts.gstatic.com/s/ptsanscaption/v12/0FlJVP6Hrxmt7-fsUFhlFXNIlpcSwSrkTA-p.woff) format('woff');
  }
}

.ReadMsgBody {width: 100%; background-color: #f2f2f2;}
.ExternalClass {width: 100%; background-color: #f2f2f2;}
body { background-color: #f2f2f2; -webkit-font-smoothing: antialiased; }
table { border-collapse:collapse !important; mso-table-lspace:0pt; mso-table-rspace:0pt; }
img{-ms-interpolation-mode:bicubic;}
p {margin-bottom:0; margin:0}
body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
}

@media screen and (min-width: 601px) {
  .mainCont, 
  *[lang="x-main"] {
    width: 600px !important;
    table-layout: fixed;
  }
  .contenttable, 
  *[lang="x-content"] {
    width: 600px !important;
    table-layout: fixed;
  }
}

@media only screen and (max-width: 480px), (max-device-width: 480px) {
  body[yahoo] .center {
    text-align: center !important;
  }
  
  .two-to-three {
    width: 100%;
    max-width: 300px !important;
  }
  .two-to-two8e {
    width: 100%;
    max-width: 280px !important;
  }
  .textCenter,
  td[lang=x-textCenter] {
    text-align: center !important;
  }
  .hide,
  *[lang=x-hide] {
    height: 0px !important;
    width: 0px !important;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    line-height: 0px;
    display: none !important;
    mso-hide:all;
  }

}

font {
  font-family: 'Museo Sans', 'Montserrat', 'Open Sans', 'Segoe UI','Segoe UI Web Regular','Segoe UI Symbol','Helvetica Neue', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif;
  -webkit-text-size-adjust:100% !important;
  -ms-text-size-adjust:100% !important;
  text-size-adjust:100% !important;
}

</style>
 <link rel="stylesheet" href="/stylesheets/colorpicker.css"><link rel="stylesheet" href="/stylesheets/editable.css"><link rel="stylesheet" href="/stylesheets/fonticons/fonticons.css"></head>
 <body bgcolor="#f2f2f2" yahoo="fix" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: rgb(242, 242, 242); font-family: &quot;Museo Sans&quot;, Montserrat, &quot;Noto Sans&quot;, &quot;Open Sans&quot;, &quot;Segoe UI&quot;, &quot;Segoe UI Web Regular&quot;, &quot;Segoe UI Symbol&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; margin: 40px 0px; padding: 0px; -webkit-font-smoothing: antialiased; text-size-adjust: 100%;">



<div class="center" style="background-color:#f2f2f2;width:100%;">
<!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill type="tile" color="#f2f2f2"/>
</v:background>
<![endif]-->
<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" style="border-collapse:collapse !important;min-width:100% !important;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<tbody>
<tr>
<td align="center" bgcolor="f2f2f2" valign="top" style="background-color:#f2f2f2;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
<!--BackgroundColor Fix Start-->


<!--[if !mso]><!-->
<table bgcolor="333333" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(51, 51, 51); max-width: 600px; min-width: 280px; table-layout: fixed; border-top-left-radius: 5px; border-top-right-radius: 5px; overflow: hidden;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='333333' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" valign="top" background="https://robust.email/files/template_6/images/bg-02.jpg" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; vertical-align: top; font-size: 0px; text-align: right; background-image: url('https://i.ibb.co/tCN3YPg/bg-02.jpg'); background-repeat: no-repeat;">

<!--[if (gte mso 9)|(IE)]>
</td>
<td align='center' width='300' valign='top' style='padding-top:0px;padding-bottom:0px;padding-right:0px;padding-left:0px;vertical-align:top;'>
<![endif]-->


</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="fffffd" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(255, 255, 253); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='fffffd' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" bgcolor="444444" valign="top" background="https://robust.email/files/template_6/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg" style="background-color: #444444; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; vertical-align: top; font-size: 0px; background-image: url('https://robust.email/files/template_6/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg'); background-repeat: no-repeat;">
<!--[if gte mso 9]>
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:365px;">
<v:fill type="tile" src="https://robust.email/files/template_6/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg" color="#333333" />
<v:textbox inset="0,0,0,0">
<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;width: 600px;'>
<![endif]-->
<!--[if !mso]><!-->
<table border="0" width="100%" lang="x-content" cellpadding="0" cellspacing="0" align="center" class="contenttable" style="table-layout: fixed; border-collapse: collapse; max-width: 600px;" cloneordelete="">
<!--<![endif]-->
<tbody>
<tr>
<td valign="middle" height="260" align="left" style="padding: 20px 30px; line-height: 64px; font-family: Europa, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; font-weight: bold; letter-spacing: -4px; font-size: 72px;" editable="">
<font size="6" color="ffffff" style="font-family: 'Europa', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: bold; letter-spacing: -4px; font-size: 72px">
Shared by<br/> ${name}
</font>
</td>
</tr>
<tr>
<td align="center" valign="bottom" style="padding: 0px; line-height: 100%;" editable="">
<img src="https://robust.email/files/template_6/images/Tilted-divider_01.png" width="600" height="65" style="width: 100%; height: 65px; max-width: 600px; min-width: 280px; display: block; border: none;" border="0" alt="">
</td>
</tr>
</tbody>
</table>
<!--[if gte mso 9]>
</v:textbox>
</v:rect>
<![endif]-->
</td>
</tr>
</tbody>
</table>

<!--[if !mso]><!-->
<table bgcolor="fffffd" border="0" width="100%" cellpadding="0" cellspacing="0" align="center" lang="x-main" class="mainCont" style="border-collapse: collapse; width: 100%; background-color: rgb(255, 255, 253); max-width: 600px; min-width: 280px; table-layout: fixed; position: relative;" cloneordelete="">
<!--<![endif]-->
<!--[if (gte mso 9)|(IE)]>
<table bgcolor='fffffd' border='0' width='600' cellpadding='0' cellspacing='0' align='center' style='table-layout: fixed; border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;' >
<![endif]-->
<tbody>
<tr>
<td align="center" style="padding: 0px 20px 10px; line-height: 64px; font-family: &quot;Playfair Display&quot;, Georgia, &quot;Arial Black&quot;, &quot;Times New Roman&quot;, serif; font-size: 48px; color: rgb(0, 0, 0); font-weight: 700; letter-spacing: -3px;" editable="">
<font size="6" color="000000" style="font-family: 'Playfair Display', Georgia, Arial Black, Times New Roman, serif; font-size: 48px; font-weight: 700; letter-spacing: -3px;">
${title}
</font>
</td>
</tr>
<td align="center" style="padding-top: 0px; padding-bottom: 10px; padding-left: 0px; padding-right: 0px; line-height: 100%;">
<table border="0" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="EB5757" width="200" height="50" style="width: 200px; height: 50px; background-color: #EB5757; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; font-size: 18px; color: #ffffff; font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 600; border-radius: 25px" editable="">
<a href="http://miakinotesplus.herokuapp.com/" style="text-decoration: none; color: #ffffff">
<font size="4" color="ffffff" style="font-family: 'Geomanist', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-weight: 600;">
View Now
</font>
</a>
</td>
</tr>
</tbody>
</table>

</td>
</tr>
<tr>
<td align="center" style="padding-top: 20px; padding-bottom: 0px; padding-left: 30px; padding-right: 30px;">
<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
<tbody>
<tr>
<td align="center" bgcolor="333333" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; background-color: #333333; font-size: 1px; color: transparent; height: 2px; line-height: 2px;" height="2">
&nbsp;
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td align="left" style="padding: 20px 30px 30px; font-family: &quot;PT Sans&quot;, &quot;Open Sans&quot;, Helvetica, Arial, Verdana, &quot;Trebuchet MS&quot;, sans-serif; color: rgb(255, 255, 255); line-height: 18px; font-size: 14px;" editable="">
<font size="2" color="333333" style="font-family: 'PT Sans', 'Open Sans', Helvetica, Arial, Verdana, Trebuchet MS, sans-serif; font-size: 14px">

<br><br>
© Copyright Miaki Notes Plus
2021 - All Rights Reserved.
</font>
</td>
</tr>
</tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" class="contenttable" lang="x-content" width="600" style="border-collapse:collapse !important;max-width:500px;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" cloneordelete="">
<tbody>
<tr>
<td align="center" style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; font-size: 1px; color: transparent; height: 20px; line-height: 20px;" height="20">
&nbsp;
</td>
</tr>
</tbody>
</table>
<!--Gmail Font Size Fix Start-->
<div style="display:none;white-space:nowrap;font-style:normal;font-variant:normal;font-weight:normal;font-size:15px;font-family:courier;line-height:normal;color:#eaeaea;">
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
</div>
</div>
</body></html>
`;

export default template;
