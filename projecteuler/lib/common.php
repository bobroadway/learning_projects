<?php

/*
  Some common functions that I use while writing euler scripts.
 */

$time_start;

function time_start() {
    global $time_start;

    $time_start = microtime(true);
}

// This wil be completely off if the time is really really small
function time_end() {
    global $time_start;

    $time_end = microtime(true);
    $t = $time_end - $time_start;
    $formatted = format_seconds($t);
    
    echo "\nProcess Time: {$formatted}";
    echo "\n";
}

function format_seconds($t) {
    if ($t <= 60) {
        $formatted = "$t seconds";
    } else if ($t > 60 && $t < 604800) {
        $t = round($t);
        $format = '%02dh %02dm %02ds';
        $formatted = sprintf($format, ($t/3600),($t/60%60), $t%60);
    } else {
        $formatted = "Probably negligable.";
    }
    
    return $formatted;
}

function gridify($grid_string) {
    $exploded = explode("\n", $grid_string);
    $grid = array_slice($exploded, 1, count($exploded) - 2);

    for ($i = 0; $i < count($grid); $i++) {
        $replacements = [];
        foreach (explode(" ", $grid[$i]) as $num) {
            $replacements[] = intval($num);
        }
        array_splice($grid, $i, 1, [$replacements]);
    }
    
    return $grid;
}

function gridval($grid, $x, $y) {
    return $grid[$y][$x];
}