<?php

    class Tool extends Product {
        private $shipper;
        private $weight;
        
        public function setShipper($shipper) {
            $this->shipper = $shipper;
        }
        public function getShipper() {
            return $this->shipper;
        }
        
        public function setWeight($weight) {
            $this->weight = $weight;
        }
        public function getWeight() {
            return $this->weight;
        }
        
        public function renderForm() {
            $base_form = file_get_contents('forms/generic_form.html');
            $tool_specific = file_get_contents('forms/tool_form.html');
            return $base_form . $tool_specific;
        }
        
        public function postTo() {
            return 'tool.php';
        }
        
        public function productType() {
            return 'Tool';
        }
        
        public function saveTool() {
            $title =  $this->title;
            $description =  $this->description;
            $price =  $this->price;
            $shipper =  $this->title;
            $weight =  $this->description;
            
            $query =  "INSERT INTO Product (title, description, price, shipper, weight)". 
                "VALUES ('$title', '$description', '$price', '$shipper', '$weight')";
            
            
            if ((!empty($title)) && (!empty($description)) && (!empty($price)) && (!empty($shipper)) && (!empty($weight))) {    
                $result = $this->database($query); 
            }
        }
        
    }

?>