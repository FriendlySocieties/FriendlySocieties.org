<?php

$lang = 'en';

if (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
  $http_accept_lang = strtolower(substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2));
  if(file_exists($http_accept_lang.'.html')) {
    $lang = $http_accept_lang;
  }
}

header("Location: $lang.html", true, 302);
die();

?>