<?php 

const BASE_PATH = __DIR__ . '/';

require BASE_PATH . ('core/functions.php');
require base_path('core/routes.php');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (!array_key_exists($uri, $routes)) {
    http_response_code(404);
    echo "Page not found";
    exit;
}

require $routes[$uri];

?>