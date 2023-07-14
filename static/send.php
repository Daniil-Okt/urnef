<?php 
   $site = 'URNEFP';
   $name = $_POST['name'];
   $phone = $_POST['tel'];
   $mail = $_POST['mail'];
   $radioStatus = $_POST['radioStatus'];
   $radioСontract = $_POST['radioСontract'];
   $radioDocument = $_POST['radioDocument'];
   $textSum = $_POST['textSum'];
   $radioRegistration = $_POST['radioRegistration'];
   $textCompany1 = $_POST['textCompany1'];
   $textCompany2 = $_POST['textCompany2'];
   $checkboxConnect1 = $_POST['checkboxConnect1'];
   $checkboxConnect2 = $_POST['checkboxConnect2'];
   $checkboxConnect3 = $_POST['checkboxConnect3'];
  
   //Отправка в Telegram
  
   $token = "6175032800:AAEjE6ZY2gFttQ6RC4peVyi7mou72IHciA4";
   
   $chat_id = "-862719183";
   
  
   // Формирование текста сообщения
  $message = "Заявка с сайта: $site\n";
  $message .= "Имя пользователя: $name\n";
  $message .= "Телефон: $phone\n";
  $message .= "E-mail: $mail\n";
  $message .= "__ОТВЕТЫ НА ВОПРОССЫ КВИЗА:__";
  $message .= "Статус дела: $radioStatus\n";
  $message .= "Между сторонами заключен договор: $radioСontract\n";
  $message .= "Закрывающие документы: $radioDocument\n";
  $message .= "Сумма задолженности: $textSum\n";
  $message .= "Компания зарегистрирована: $radioRegistration\n";
  $message .= "ИНН компании: $textCompany1\n";
  $message .= "ИНН компании контрагента: $textCompany2\n";
  $message .= "Хочу что бы со мной связались: $checkboxConnect1, $checkboxConnect2, $checkboxConnect3";
  // Добавьте еще необходимые поля в сообщение, если нужно
  
  // Отправка запроса в Телеграм
  $url = "https://api.telegram.org/bot$token/sendMessage";
  $data = array(
      'chat_id' => $chat_id,
      'text' => $message
  );
  
  $options = array(
      'http' => array(
          'method' => 'POST',
          'header' => "Content-Type:application/x-www-form-urlencoded\r\n",
          'content' => http_build_query($data)
      )
  );
  
  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
  
  if ($result === false) {
    // Обработка ошибки
    echo "Ошибка при отправке заявки в Телеграм.";
  } else {
    // Успешная отправка
    echo "Заявка успешно отправлена в Телеграм.";
  }


// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);

if ($sendToTelegram) {$result = "success";} 
else {$result = "error";}
?>