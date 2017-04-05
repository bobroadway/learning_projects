<!DOCTYPE html>
  <html>
    <head>
      <title>FizzBuzz Switch</title>
    </head>
    <body>
      <p>
        <?php
          
        for ($i = 1; $i <= 100; $i++) {
            $output = "";
            
            switch (0) {
                case $i%3:
                    $output .= "Fizz";
                    if ($i % 5 == 0) {
                        $output .= "Buzz";
                        break;
                    } else {
                        break;
                    }
                case $i%5:
                    $output .= "Buzz";
                    break;
                default:
                    $output .= $i;
            }
            
            echo $output . "<br />";
        } 

        ?>
      </p>
    </body>
  </html>