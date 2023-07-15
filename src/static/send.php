<?php 
   $site = 'URNEFP';
   $phone = $_POST['tel'];
   $mail = $_POST['mail'];
   $text = $_POST['text'];
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
   $textNumberDocum = $_POST['textNumberDocum'];
   $radioReason = $_POST['radioReason'];
   $textSpor = $_POST['textSpor'];
   $radioClaim = $_POST['radioClaim'];
   $textRequir = $_POST['textRequir'];
   
   $textNumberDocum = $_POST['textNumberDocum'];
   $textNumberDocum = $_POST['textNumberDocum'];
   $textNumberDocum = $_POST['textNumberDocum'];
   $textNumberDocum = $_POST['textNumberDocum'];
   $textNumberDocum = $_POST['textNumberDocum'];
   $textNumberDocum = $_POST['textNumberDocum'];
   $textNumberDocum = $_POST['textNumberDocum'];
   $textNumberDocum = $_POST['textNumberDocum'];

  
   //Отправка в Telegram
  
   $token = "5993704145:AAFFkIdkwV2VznoZIY7Lhwaf_stBfE1Do0A";
   
   $chat_id = "-1001902841040";
   
  
   // Формирование текста сообщения
  $message = "Заявка с сайта: $site\n";
  if ($phone != '') {
    $message .= "Телефон: $phone\n";
  }
  if ($mail != '') {
    $message .= "E-mail: $mail\n";
  }
  if ($text != '') {
    $message .= "Комментарий: $text\n";
  }
  $message .= "------------------------------------------\n";
  $message .= "__ОТВЕТЫ НА ВОПРОССЫ КВИЗА:__\n";
if ($radioStatus != '') {
  $message .= "Статус дела: $radioStatus\n";
}
if ($textNumberDocum != '') {
  $message .= "Номер дела: $textNumberDocum\n";
}
if ($radioReason != '') {
  $message .= "Причина обращения: $radioReason\n";
}
if ($textSpor != '') {
  $message .= "Предмет спора: $textSpor\n";
}
if ($radioClaim != '') {
  $message .= "Присылали ли притензии: $radioClaim\n";
}
if ($textRequir != '') {
  $message .= "Сумма требования: $textRequir\n";
}

if ($textNumberDocum != '') {
  $message .= "Номер дела: $textNumberDocum\n";
}
if ($textNumberDocum != '') {
  $message .= "Номер дела: $textNumberDocum\n";
}


if ($radioСontract != '') {
  $message .= "Между сторонами заключен договор: $radioСontract\n";
}
if ($radioDocument != '') {
  $message .= "Закрывающие документы: $radioDocument\n";
}
if ($textSum != '') {
  $message .= "Сумма задолженности: $textSum\n";
}
if ($radioRegistration != '') {
  $message .= "Компания зарегистрирована: $radioRegistration\n";
}
if ($textCompany1 != '') {
  $message .= "ИНН компании: $textCompany1\n";
}
if ($textCompany2 != '') {
  $message .= "ИНН компании контрагента: $textCompany2\n";
}
if ($checkboxConnect1 != '' || $checkboxConnect2 != ''|| $checkboxConnect3 ) {
  $message .= "Хочу что бы со мной связались: $checkboxConnect1, $checkboxConnect2, $checkboxConnect3";
}
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