<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmins="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Project 1 - Madlib</title>
</head>
<body>
  <p>Enter a word in each field below to receive your carrraaazy story!</p>
	
<?php
  $mysqli = mysqli_connect("localhost", "root", "", "project1");
  $query = "SELECT story FROM madlib ORDER BY id DESC;";
  $result = mysqli_query($mysqli, $query);
  if (!$result) {
    exit("Database query [[query]] error:" . mysql_error($mysqli));
  }



  if (isset($_POST['submit'])) {
    $noun = $_POST['noun'];
    $verb = $_POST['verb'];
    $adjective = $_POST['adjective'];
    $adverb = $_POST['adverb'];
    $story = 'The ' . $adjective . ' ' . $noun . ' likes to ' . $verb . ' ' . $adverb . '!';
  
    if (empty($noun) || empty($verb) || empty($adjective) || empty($adverb)) {
	  echo 'Please fill in every field.<br />';
    }
  }
  
  if (!empty($noun) && !empty($verb) && !empty($adjective) && !empty($adverb)) {
	$dbc = mysqli_connect("localhost", "root", "", "project1")
	  or die('Error connecting to MySQL server.');
	  
	$query = "INSERT INTO madlib (noun, verb, adjective, adverb, story) VALUES('$noun', '$verb', '$adjective', '$adverb', '$story')";
	mysqli_query($dbc, $query)
	  or die('Data not inserted.');
	
	mysqli_close($dbc);
	
	header('Location: madlib.php');
  }
?>

  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="noun">Noun:</label>
	<input type="text" id="noun" name="noun" /><br />
	<label for="verb">Verb:</label>
	<input type="text" id="verb" name="verb" /><br />
	<label for="adjective">Adjective:</label>
	<input type="text" id="adjective" name="adjective" /><br />
	<label for="adverb">Adverb:</label>
	<input type="text" id="adverb" name="adverb" /><br />
	<input type="submit" name="submit" value="Submit" />
  </form>
  
<?php
  while ($record = mysqli_fetch_assoc($result)) { ?>
            <div>
                <p>
                    <?= $record["story"] ?>
                </p>
                <hr>
            </div>
<?php
  }
?>

</body>
</html>