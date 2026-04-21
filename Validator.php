<?php

class Validator {
    //regex for UK phone numbers I found online
    public static function number($string) {
        $string = str_replace(array('(', ')', ' '), '', $string);
        return preg_match('/(0|\\+44)\\d{9,11}\\#?\\d{3,4}?/', $string) !== false;
    }

    public static function string($value, $min = 1, $max = 255) {
        $value = trim($value);
        return strlen($value) >= $min && strlen($value) <= $max;
    }

    public static function email($value) {
        return filter_var($value, FILTER_VALIDATE_EMAIL);
    }

}

?>