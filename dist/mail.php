<?php
  $nameFirst = $_POST['first-name'];
  $nameLast = $_POST['last-name'];
  $email = $_POST['email'];
  $city = $_POST['city'];
  $zip = $_POST['zip'];
  $service = $_POST['service'];
  $description = $_POST['description'];
  header('Content-Type: application/json');
  if ($nameFirst === '') {
    print json_encode(array('message' => 'First name cannot be empty', 'code' => 0));
    exit();
  }
  if ($nameLast === '') {
    print json_encode(array('message' => 'Last name cannot be empty', 'code' => 0));
    exit();
  }
  if ($email === '') {
    print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
    exit();
  } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
      exit();
    }
  }
  if ($city === '') {
    print json_encode(array('message' => 'City cannot be empty', 'code' => 0));
    exit();
  }
  if ($zip === '') {
    print json_encode(array('message' => 'Zip cannot be empty', 'code' => 0));
    exit();
  }
  if ($service === '') {
    print json_encode(array('message' => 'Service cannot be empty', 'code' => 0));
    exit();
  }
  if ($description === '') {
    print json_encode(array('message' => 'Description cannot be empty', 'code' => 0));
    exit();
  }
  $content = "From: $nameFirst $nameLast \nEmail: $email \nCity: $city \nZip: $zip \nService: $service \nDescription: $description";
  $recipient = "brandonleemartin96@gmail.com";
  $mailheader = "From: $email \r\n";
  mail($recipient, $service, $content, $mailheader) or die("Error!");
  print json_encode(array('message' => 'Email successfully sent!', 'code' => 1));
  exit();
?>
