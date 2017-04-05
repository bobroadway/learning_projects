<!DOCTYPE html>
  <html>
    <head>
      <title>FizzBuzz Switch</title>
    </head>
    <body>
      <p>
        <?php
          $output = "Begin";
          
          //for ($i = 1; $i <= 100; $i++) {
              switch (0) {
                  case $i%3:
                      $output += "Fizz";
                  case $i%5:
                      $output += "Buzz";
              }
              echo $output + "<br />";
          //}
          echo $output;
          echo "<br />End";
        ?>
      </p>
    </body>
  </html>