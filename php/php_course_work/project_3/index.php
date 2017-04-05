<?php include('header.php') ?>

<?php
    require_once('connectvars.php');

    $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    $query = "SELECT * FROM theblog ORDER BY id DESC;";
    $result = mysqli_query($dbc, $query);
    if (!$result) {
        exit("Database query [[query]] error:" . mysql_error($dbc));
    }
?>

<div class="row">
    <div class="col-lg-12">
        <h1>The Blog!</h1>
        <p class="lead"><a href="new_post.php">Add New Post</a></p>
    </div>
</div>
    
<?php while ($record = mysqli_fetch_assoc($result)) { ?>
    <div class="col-lg-12">
        <h2>
            <?= $record["title"]?>
        </h2>
        <p>
            <span class="glyphicon glyphicon-time"></span> 
            <?= $record["date"]?>
        </p>
        <p class="lead">
            <?= nl2br($record["body"])?>
        </p>
        <hr>
    </div>
<?php } ?>
        
<?php include('footer.php') ?>
