<?php

    class Electronic extends Product {
        private $isRecyclable;
        
        public function setIsRecyclable($isRecyclable) {
            $this->isRecyclable = $isRecyclable;
        }
        public function getIsRecyclable() {
            return $this->isRecyclable;
        }
        
        public function renderForm() {
            $base_form = file_get_contents('forms/generic_form.html');
            $electronic_specific = file_get_contents('forms/electronic_form.html');
            return $base_form . $electronic_specific;
        }
        
        public function postTo() {
            return 'electronic.php';
        }
        
        public function productType() {
            return 'Electronic';
        }
        
        public function saveElectronic() {
            $title =  $this->title;
            $description =  $this->description;
            $price =  $this->price;
            $isRecyclable =  $this->isRecyclable;
            
            $query =  "INSERT INTO Product (title, description, price, is_recyclable)". 
                "VALUES ('$title', '$description', '$price', '$isRecyclable')";
            
            
            if ((!empty($title)) && (!empty($description)) && (!empty($price)) && (!empty($isRecyclable))) {    
                $result = $this->database($query); 
            }
        }
        
    }

?>