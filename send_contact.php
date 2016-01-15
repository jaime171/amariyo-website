<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$cita = $_POST['cita'];



$mail_send = mail('amariyoideas@gmail.com','Mensaje_sitio_web', "Nombre: $nombre\r\nTelefono: $telefono\r\nCorreo: $correo\r\nCita: $cita");

if($mail_send){
	header("Location: /send_mail/correcto.html");
	exit;
}else{
	header("Location: /send_mail/error.html");
 	exit;
}



?>