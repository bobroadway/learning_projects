<?php

    class Product {
        protected $title;
        protected $description;
        protected $price;
        
        public function setTitle($title) {
            $this->title = $title;
        }
        public function getTitle() {
            return $this->title;
        }
        
        public function setDescription($description) {
            $this->description = $description;
        }
        public function getDescription() {
            return $this->description;
        }
        
        public function setPrice($price) {
            $this->price = $price;
        }
        public function getPrice() {
            return $this->price;
        }
        
        public function renderForm() {
            return file_get_contents('forms/generic_form.html');
        }
        
        public function postTo() {
            return 'generic.php';
        }
        
        public function productType() {
            return 'Generic';
        }
        
        public function saveProduct() {
            $title =  $this->title;
            $description =  $this->description;
            $price =  $this->price;
            
            $query =  "INSERT INTO Product (title, description, price)". 
                "VALUES ('$title', '$description', '$price')";

            
            if ((!empty($title)) && (!empty($description)) && (!empty($price))) {    
                $result = $this->database($query); 
            }
        }
        
        public function database($query) {
            $dbc = mysqli_connect('localhost', 'root', '', 'lab_10')
            or die('Error connecting to MySQL server.');
            
            $result = mysqli_query($dbc, $query);
            
            return $result;
        
        }
    }

?>