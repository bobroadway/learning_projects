<?php require_once('authorize.php');?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  
<head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>The Blog! - Administration</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
    
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

</head>

<body>
    <h2>The Blog! - Administration</h2>
    <p>Use this page to remove posts as needed.</p>
    <hr />

<?php
    require_once('connectvars.php');
  
    // Connect to the database 
    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  
    // Retrieve the blog data from MySQL
    $query = "SELECT * FROM theblog ORDER BY date DESC";
    $result = mysqli_query($dbc, $query);
  
    // Loop through the array of blog data, formatting it as HTML 
    echo '<table class="table table-striped">';
    echo '<tr><th>Title</th><th>Date</th><th>Action</th></tr>';
    while ($row = mysqli_fetch_array($result)) { 
        // Display the blog data
        echo '<tr><td><strong>' . $row['title'] . '</strong></td>';
        echo '<td>' . $row['date'] . '</td>';
        echo '<td><a href="remove_post.php?id=' . $row['id'] . '&amp;date=' . $row['date'] .
          '&amp;title=' . $row['title'] . '">Remove</a>';
        echo '</td></tr>';
    }
    echo '</table>';
  
    mysqli_close($dbc);
?>

</body> 
</html>
