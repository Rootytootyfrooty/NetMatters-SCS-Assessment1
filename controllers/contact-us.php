<?php

require_once 'Validator.php';
require "Database.php";

$errors = [];

$name = $_POST['name'] ?? '';
$company = $_POST['company'] ?? '';
$email = $_POST['email'] ?? '';
$number = $_POST['number'] ?? '';
$message  = $_POST['message'] ?? '';

// When a post request is received, it runs the inputs through the validator methods

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (!Validator::email($email)) {
        $errors['email'] = 'Please provide a valid email address';
    }
    if (!Validator::string($message, 1, 1000)) {
        $errors['message'] = 'Message must be between 1 and 1,000 characters';
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
    if (empty($errors)) {
        $db = new Database();
        $db->queryAll('INSERT INTO enquiries(name, company, email, number, message) VALUES(:name, :company, :email, :number, :message)', [
            'name' => $name,
            'company' => $company,
            'email' => $email,
            'number' => $number,
            'message' => $message
        ]);
        header('Location: /');
        exit();
    }
}


require "views/contact-us.view.php";


?>