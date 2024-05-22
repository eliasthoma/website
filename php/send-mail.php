<?php
    $errors = '';
    $myemail = 'mail@eliasthoma.de'; //<-----Put Your email address here.
    if(empty($_POST['vorname'])  ||
       empty($_POST['nachname'])  ||
       empty($_POST['email']) ||
       empty($_POST['message']))
    {
        $errors .= "\n Fehler: Es werden alle Felder benötigt";
    }
    $name = $_POST['vorname'] . " " . $_POST['nachname'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];
    if (!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email_address))
    {
        $errors .= "\n Fehler: Ungültige E-Mail-Adresse";
    }
    
    if( empty($errors))
    {
    $to = $myemail;
    $subject = "Website Kontaktformular: Nachricht von $name";
    $body = $message;

    $headers = 'From: '. $email_address . "\r\n";
    //$headers .= "Reply-To: $email_address";

    mail($to,$subject,$body,$headers);
    //redirect to the 'thank you' page
    header('Location: index.html#kontakt');

    }
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>