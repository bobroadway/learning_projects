<?php require_once('authorize.php');?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>The Blog! - Remove a Post</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
    
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
</head>
<body>
    <div class="container">
        <h2>The Blog! - Remove a Post</h2>
    
        <?php
            require_once('connectvars.php');
          
            if (isset($_GET['id']) && isset($_GET['title']) && isset($_GET['date'])) {
                // Grab the blog data from the GET
                $id = $_GET['id'];
                $title = $_GET['title'];
                $date = $_GET['date'];
            }
            else if (isset($_POST['id']) && isset($_POST['title']) && isset($_POST['date'])) {
                // Grab the score data from the POST
                $id = $_POST['id'];
                $title = $_POST['title'];
                $date = $_POST['date'];
            }
            else {
               echo '<p class="error">Sorry, no post was specified for removal.</p>';
            }
          
            if (isset($_POST['submit'])) {
                if ($_POST['confirm'] == 'Yes') {
                    // Connect to the database
                    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME); 
              
                    // Delete the blog data from the database
                    $query = "DELETE FROM theblog WHERE id = $id LIMIT 1";
                    mysqli_query($dbc, $query);
                    mysqli_close($dbc);
              
                    // Confirm success with the user
                    echo '<p>The blog post titled: "' . $title . '" from ' . $date . ' was successfully removed.';
              }
              else {
                  echo '<p class="error">The post was not removed.</p>';
              }
            }
            else if (isset($id) && isset($title) && isset($date)) {
                echo '<p>Are you sure you want to delete the following post?</p>';
                echo '<p><strong>Title: </strong>' . $title . '<br /><strong>Date: </strong>' . $date . '</p>';
                echo '<form method="post" action="remove_post.php">';
                echo '<input type="radio" name="confirm" value="Yes" /> Yes ';
                echo '<input type="radio" name="confirm" value="No" checked="checked" /> No <br />';
                echo '<input type="submit" value="Submit" name="submit" />';
                echo '<input type="hidden" name="id" value="' . $id . '" />';
                echo '<input type="hidden" name="title" value="' . $title . '" />';
                echo '<input type="hidden" name="date" value="' . $date . '" />';
                echo '</form>';
            }
          
            echo '<p><a href="admin.php">&lt;&lt; Back to admin page</a></p>';
        ?>
    </div>
</body> 
</html>
