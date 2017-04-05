<?php include('header.php') ?>

<div class="row">
    <div class="col-lg-12">
        <h1>The Blog!</h1>
        <h2>The world is listening, what do you have to say?</h2>
    </div>
</div>


<div class="row">
    <div class="col-lg-12">
      <form action="upload_post.php" method="post" role="form">
          <div class="form-group">
              <label for="title">Title:</label>
    	      <input type="text" id="title" name="title" />
          </div>
          <div class="form-group">
              Body:
              <textarea name="body" class="form-control" rows="10"></textarea>
          </div>
          <div class="form-group">
              <input type=submit value="Submit"/>
          </div>
      </form>
    </div>
</div>

<?php include('footer.php') ?>