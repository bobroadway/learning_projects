<?php

    class Person {
        protected $first_name;
        protected $last_name;
        
        function __construct($first, $last){
            $this->first_name = $first;
            $this->last_name = $last;
        }
    
        public function getFirstName() {
            $this->first_name;
        }
        public function getLastName() {
            $this->last_name;
        }
    
    }
    
    class Teacher extends Person {
        public function salary() {
            return 0;
        }
    }
    
    class Student extends Person {
        public function gpa() {
            return 4.0;
        }
    }
    
    $student = new Student('Bart', 'Simpson');
    $teacher = new Teacher('Homer', 'Simpson');
    
    echo $teacher->getFirstName; // Homer
    echo $student->getFirstName; // Bart
    echo $student->salary(); // KABOOOOOOOMMMM
    echo $student->gpa(); // 4.0
    
?>

<?php

    class Person {
        protected $first_name;
        protected $last_name;
    
        public function __construct($first, $last) {
            $this->first_name = $first;
            $this->last_name = $last;
        }
        
        public function fullName() {
            echo "$this->first_name $this->last_name";
        }
        
    }
    
    class Teacher extends Person {
    
        private $title;
        
        public function setTitle($title) {
            $this->title =  $title;
        }
        
        public function fullName() {
            echo "$this->title $this->last_name";
        }
    
    }
    
    class Student extends Person {
        
    }
    
    
    $student = new Student('Bart', 'Simpson');
    $teacher = new Teacher('Homer', 'Simpson');
    $teacher->setTitle('Mr.');
    
    echo $student->fullName(); // Bart Simpson
    echo "<br />";
    echo $teacher->fullName(); // Mr. Simpson

?>

<?php



?>