<?php
  $name = trim(strip_tags($_POST["name"]));
  $email = trim(strip_tags($_POST["email"]));
  $subject = "Новая заяка на сайте raccoonorty.ru";
  $msg = "Данные пользователя:\n" ."Имя: $name\n" ."email: $email\n";
  $headers = "Content-type: text/plain; charset=UTF-8" . "\r\n";
  $headers .= "From: Пользователь <info@raccoonorty.ru>" . "\r\n";
  // $headers .= "Bcc: makeroh77@gmail.com". "\r\n";
  if(!empty($name) && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    mail($email, $subject, $msg, $headers);
    echo "<h1>Спасибо! Вы успешно создали новую заявку.</h1><a href='https://raccoonorty.ru/'>Вернуться на сайт</a>";
    }
?>