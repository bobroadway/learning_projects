<?php
/**
 * A script to download the problem information from Project Euler, and 
 * output it into a corresponding php file.
 * 
 * This will not overwrite any files unless a -f flag is passed.
 * 
 * Modify the $output variables to control how the file looks.
 * 
 * Example:
 * > php scaffold.php 24
 * 
 * Downloading from [https://projecteuler.net/problem=24]... done.
 * Writing to [../euler024.php]... done.
*/

// This will be relative to the current script location
// Don't forget trailing slash
$output_dir = "../";

//
// Check arguments
//
$usage = 'Usage: scaffold.php <problem_number> [-f]';
if (count($argv) < 2) {
    die("$usage\n");
}

$problem_number = $argv[1];

if (!is_numeric($problem_number)) {
    die("$usage\n");
}

if ($problem_number < 1 || $problem_number > 999) {
    die("Invalid problem number. Valid range is 1 - 999\n");
}

//
// Check filename
//

// Ensure filename path is relative to this script.
chdir(dirname(__FILE__));

$filename = sprintf("{$output_dir}euler%03d.php", $problem_number);

if (!in_array('-f', $argv) && file_exists($filename)) {
    die("$filename already exists! I won't overwrite that!\n");
}

//
// Extract information from Project Euler
//
$url = "https://projecteuler.net/problem=$problem_number";

echo "Downloading from [$url]... ";
$html = file_get_contents($url)
    or die("Unable to download from Project Euler.\n");

echo "done.";

$doc = new DOMDocument();
$doc->loadHTML($html);
$xpath = new DOMXpath($doc);

$problem_title = $xpath->query('//h2[1]')->item(0)->nodeValue;
$problem_number = $xpath->query('//h3[1]')->item(0)->nodeValue;

$problem_info = $xpath->query('//div[@id="problem_info"]/span')->item(0)->nodeValue;
$problem_format = '/Published on ([\w,: ]+); Solved by (\d+); Difficulty rating: (\d)%/';
preg_match($problem_format, $problem_info, $matches);

$published_on = DateTime::createFromFormat('l, jS M Y, h:i a', $matches[1]);
$solved_by = $matches[2];
$difficulty_rating = $matches[3];

$problem_content = $xpath->query('//div[@class="problem_content"]/child::*');
$description = '';

foreach ($problem_content as $node) {
    foreach ($node->childNodes as $child) {
        $child->nodeValue = trim($child->nodeValue);
        if ($child->nodeName == 'sub') {
            $child->nodeValue = "[{$child->nodeValue}]";
        } else if ($child->nodeName == 'sup') {
            $child->nodeValue = "^{$child->nodeValue}";
        } else if ($child->nodeName == 'br') {
            $child->nodeValue = "\n";
            if ($node->nodeName == 'blockquote') {
                $child->nodeValue .= '    ';
            }
        }
    }
    
    if ($node->nodeName == 'blockquote') {
        $description .= '    ';
    }
    $description .= trim($node->nodeValue);
    
    if ($node->nodeName == 'blockquote' || $node->nodeName == 'p') {
        $description .= "\n\n";
    }
}

$description = trim($description);

//
// Format some variables for the output
//
$header_width = 73;

$title_line = $problem_title;
$title_line .= str_pad($published_on->format('m/d/Y'),
    $header_width - strlen($title_line), ' ', STR_PAD_LEFT);

$second_line = $problem_number;
$second_line .= str_pad("Solved by $solved_by as of " 
    . (new DateTime())->format('m/d/Y'),
    $header_width - strlen($second_line), ' ', STR_PAD_LEFT);
    
$third_line = "Difficulty: {$difficulty_rating}%";
$third_line .= str_pad($url,
    $header_width - strlen($third_line), ' ', STR_PAD_LEFT);

$description = wordwrap($description, $header_width, "\n");
$description = str_ireplace("\n", "\n    | ", $description);

//
// Create the output string
//
$output = "<?php

require 'lib/common.php';

/*
    |--------------------------------------------------------------------------
    | $title_line
    | $second_line
    | $third_line
    |--------------------------------------------------------------------------
    | $description
*/

// Functions


/*
    |--------------------------------------------------------------------------
    | Main Execution
    |--------------------------------------------------------------------------
*/
 
time_start();

echo \"\\nThe answer is: \";
echo \"\\n => \";

time_end();
";

//
// Write to file.
//
echo "\nWriting to [$filename]... ";
file_put_contents($filename, $output)
    or die("Unable to write to file.\n");
echo "done.";
echo "\n";