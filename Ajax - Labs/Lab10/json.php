<?php

$name = $_POST["name"];

$obj = array("id"=>1, "name"=>"$name", "email"=>"bbroadway@madisoncollege.edu");

echo json_encode($obj);

?>