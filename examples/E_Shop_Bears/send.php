<?php
$name = $_GET['name'];
$email = $_GET['email'];
$message = $_GET['message'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);
//if (mail("example@mail.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email.". Message: ".$message,"From: example@mail.ru \r\n"))
// {     echo "сообщение успешно отправлено"; 
//} else { 
//    echo "при отправке сообщения возникли ошибки";
//}?>