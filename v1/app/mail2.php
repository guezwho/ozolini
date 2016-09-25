<?php

$theme = trim($_POST["theme"]);

$frm_name  = "НОВАЯ ЗАЯВКА OZOLINI";
$recepient = "ozolin.ivan@gmail.com";
$sitename  = "OZOLINI";
$subject   = "$theme";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comments"]);

$message = "
Тема: $theme <br>
<br>
Имя: $name <br>
E-mail: $email <br>
Телефон: $phone <br>

Комментарий: $comment
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

?>
