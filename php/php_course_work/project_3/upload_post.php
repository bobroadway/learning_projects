<?php

    require_once('connectvars.php');

    $title = $_POST['title'];
    $body = $_POST['body'];
    
    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
        or die('Error connecting to MySQL server.');

    $query = "INSERT INTO theblog (title, body) VALUES ('$title', '$body');";
    mysqli_query($dbc, $query)
        or die('Post not inserted.');
        
    mysqli_close($dbc);    
    
    // We want them to see their post
    header('Location: index.php');

?>