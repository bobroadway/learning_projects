<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmins="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Project 2 - BMI Calculator</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
</head>
<body style="padding:25px">
    <p>Please enter your height and weight below!</p>
    
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="height">Height (in inches): </label>
        <input type="text" id="height" name="height" /><br />
        <label for="weight">Weight (in pounds): </label>
        <input type="text" id="weight" name="weight" /><br />
        <input type="submit" name="submit" value="Submit" />
    </form>
	
<?php
    $overweightMessage = 'You are overweight. Have another donut, tubby.';
    $healthyMessage = 'You are in the correct weight range.';
    $underweightMessage = 'You are underweight. SOMEONE BRING A SANDWICH!';

    if (isset($_POST['submit'])) {
        $height = $_POST['height'];
        $weight = $_POST['weight'];
        
        if (empty($height) || empty($weight)) {
            echo 'Please fill in every field.<br />';
        } else if (!is_numeric($height) || !is_numeric($weight)) {
            echo 'Please enter numbers only.<br />';
        } else {
            $bmi = round(($weight / ($height * $height)) * 703, 2);
        
?>

    <div>
        <p>
            <?= 
                'Your BMI is ' . $bmi . '<br />';
                if ($bmi > 25) {
                    echo $overweightMessage;
                } else if ($bmi < 18.5) {
                    echo $underweightMessage;
                } else {
                    echo $healthyMessage;
                }
            ?>
        </p>
    </div> 
    
<?php  

        }
    }
    
?>

</body>
</html>