<?php

$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$surname = htmlspecialchars($surname);
$email = htmlspecialchars($email);

$name = urldecode($name);
$surname = urldecode($surname);
$email = urldecode($email);

mail("fjord.melikhova@yandex.ru
", "Сообщение с сайта", "ФИО:".$name.",".$surname.". E-mail: ".$email ,"From: fjord.melikhova@yandex.ru
\r\n");

if (mail("fjord.melikhova@yandex.ru
", "Сообщение с сайта", "ФИО:".$name.",".$surname.". E-mail: ".$email ,"From: fjord.melikhova@yandex.ru \r\n"))
{
   echo "сообщение успешно отправлено";
} else {
   echo "при отправке сообщения возникли ошибки";
}
?>