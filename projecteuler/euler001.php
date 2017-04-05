<?php

require 'lib/common.php';

/*
  |--------------------------------------------------------------------------
  | Multiples of 3 and 5                                           10/05/2001
  | Problem 1                               Solved by 501631 as of 10/12/2015
  | Difficulty: 5%                         https://projecteuler.net/problem=1
  |--------------------------------------------------------------------------
  | If we list all the natural numbers below 10 that are multiples of 3 or 5,
  | we get 3, 5, 6 and 9. The sum of these multiples is 23.
  | 
  | Find the sum of all the multiples of 3 or 5 below 1000.

*/

// Functions

$grid = gridify("
42 02 03
01 02 03
");

function tell_bo_hello() {
  echo "\nHello, bo";
  echo "\nI added my \"gridify\" function in case you want to use it.";
  echo "\nI also generated this file by typing \"php tools/scaffold.php 1\""
    . " while I was at ~/workspace/projecteuler."
    . "\ne.g. \"cd ~/workspace/projecteuler\"";
  echo "\nAlso notice my \"Process Time\" is completely off.  It does that when "
    . "the time is really low for some reason.";
}

/*
  |------------------------------------------------------------------------------
  | Main Execution
  |------------------------------------------------------------------------------
*/
 
time_start();

echo "\nThe answer is: ";
echo " => " . 42;

tell_bo_hello();
echo "\n" . gridval($grid, 0, 0);

time_end();
