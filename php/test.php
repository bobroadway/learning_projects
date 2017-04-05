<!DOCTYPE html>

<html>
 <head><title>Sample 8</title></head>
 <body>
  <form action="test.php" method="POST">
   <p>
   Enter your name:<br />
   <input type="text" size=50 name="userName" />
   </p><p>
   Enter your phone:<br />
   <input type="text" size=50 name="userPhone" />
   </p><p>
   Enter your email address:<br />
   <input type="text" size=50 name="userEmail" />
   </p><p>
   <input type="hidden" name="formName" value="sample8" />
   <input type="hidden" name="createDate" value="March 2008" />
   <input type=submit name="send" value="submit" />
   <input type=reset value="clear" />
  </form>
    <?php
    if ((!empty($_GET)) ||
        (!isset($_POST['formName'])) ||
        ($_POST['formName'] != 'sample8')) {
      die("Bad input data source<br />");
    }
    $name = $_POST['userName'];
    $phone = $_POST['userPhone'];
    $email = $_POST['userEmail'];
  ?>
  <div align="center">
   <table>
    <tr><td>
    Welcome to PHP, <em><?php echo $name; ?>.</em>
    </td></tr><tr><td>
    Can I call you at <em><?php echo $phone; ?>? </em>
    </td></tr><tr><td>
    Is it OK to send you email at <em><?php echo $email; ?>?</em>
    
    What a great test!
    </td></tr>
   </table>
  </div>
 </body>
</html>