<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
// Обработка полученных данных
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);

$email = urldecode($email);
$phone = urldecode($phone);
$name = urldecode($name);

$email = trim($email);
$name = trim($name);
$phone = trim($phone);

// Отправление данных
if(mail("murzak301@gmail.com","Новая заявка", "
Имя: ".$name."\n       
email: ".$email."\n  
Телефон: ".$phone."\n  

")){
    header('Location:index.html');
} 