<?php

require_once 'Validator.php';
require_once "Database.php";

$errors = [];

$name = $_POST['name'] ?? '';
$company = $_POST['company'] ?? '';
$email = $_POST['email'] ?? '';
$number = $_POST['number'] ?? '';
$message  = $_POST['message'] ?? '';

// When a post request is received, it runs the inputs through the validator methods

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!Validator::email($email)) {
        $errors['email'] = 'Please Provide a valid email address';
    }
    if (!Validator::string($message, 1, 1000)) {
        $errors['message'] = 'Message must be between 1 and 10,000 characters';
    }
    if (!Validator::string($name)) {
        $errors['name'] = 'Please provide a name';
    }
    if (!Validator::string($number)) {
        $errors['number'] = 'Please enter a valid phone number';
    }
    if (!Validator::number($number)) {
        $errors['number'] = 'Please enter a valid phone number';
    }
    if (!empty($errors)) {
        require "views/contact-us.view.php";
    } else {
        header('Location: /');
    }
}


require "views/contact-us.view.php";


?>