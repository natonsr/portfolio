<?php
$orderId = $_GET['orderId'];
$productId1 = $_GET['productId1'];
$count1 = $_GET['count1'];
$productId2 = $_GET['productId2'];
$count2 = $_GET['count2'];
$productId3 = $_GET['productId3'];
$count3 = $_GET['count3'];
$productId4 = $_GET['productId4'];
$count4 = $_GET['count4'];
$name = $_GET['name'];
$address = $_GET['address'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$delivery = $_GET['delivery'];

//if (mail("example@mail.ru", "Заявка с сайта", 
//"Номер заказа: ".$orderId.". ФИО:".$name.". E-mail: ".$email.". Телефон: ".$phone.". Адрес: ".$address.". Доставка: ".$delivery.". Товар:".$productId1.". Кол: ".$count1.". Товар:".$productId2.". Кол: ".$count2.". Товар:".$productId3.". Кол: ".$count3.". Товар:".$productId4.". Кол: ".$count4 ,
//"From: example@mail.ru \r\n"))
// {     echo "сообщение успешно отправлено"; 
//} else { 
//    echo "при отправке сообщения возникли ошибки";
//}?>