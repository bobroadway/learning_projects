<?php require_once 'weather.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Blog Post - Start Bootstrap Template</title>

    <!-- Bootstrap Core CSS -->
    <link href="https://bootswatch.com/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Start Bootstrap</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Page Content -->
    <div class="container">
		
		<div class="row">
			<div class="col-lg-12">
            <h1>Weather App</h1>
			<p>Please fill out the form to get weather info!</p>
		</div>
		
		<div class="row">
			<div class="col-lg-6">
				<div class="row">
					  <form class="form-horizontal" action="<?= $_SERVER['PHP_SELF'] ?>" method="post" role="form">
						<fieldset>
						  <legend>Weather For</legend>
					
						  <div class="form-group">
							<label for="postal_code" class="col-lg-2 control-label">Postal Code:</label>
							<div class="col-lg-10">
							  <input type="text" class="form-control" name="postal_code" id="postal_code" >
							</div>
						  </div>
						  <div class="form-group">
							<div class="col-lg-10 col-lg-offset-2">
							  <button type="submit" name="submit" value="submit" class="btn btn-primary">Submit</button>
							</div>
						  </div>
						</fieldset>
					  </form>
				</div>
			</div>
		</div>
		
		<?php if($decoded_body): ?>
        <div class="row">
            <?php
                function convert_kelvin_to_fahrenheit($kelvin_temperature)
                {
                    return ((((int) $kelvin_temperature - 273.15)* 1.8000) + 32.00);
                }
            ?>

            Current Temperature: <?= convert_kelvin_to_fahrenheit($decoded_body->main->temp) ?> <br />
            Current Humdity: <?= $decoded_body->main->humidity ?>% <br />
            Minimum Temperature: <?= convert_kelvin_to_fahrenheit($decoded_body->main->temp_min) ?> <br />
            Maximum Temperature: <?= convert_kelvin_to_fahrenheit($decoded_body->main->temp_max) ?> <br />
        </div>
        <?php endif ?>
		
        <hr>

        <!-- Footer -->
        <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Your Website 2014</p>
                </div>
            </div>
            <!-- /.row -->
        </footer>

    </div>
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.jss"></script>
</body>

</html>