<?php 
    $name = $_POST['name'];
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $object = $_POST['object'];
    $message = $_POST['message'];

    $formcontent="De: $name + $firstname \n Message: $message";

    $recipient = "lemail@hotmail.fr";

    $subject = "Guillaume Portfolio $object";

    $mailheader = "De $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Erreur!");
    echo "Merci!";
    echo '<h2>Thanks for posting comment</h2>';
?>