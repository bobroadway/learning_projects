/*
    This is the JavaScript code for 
    "Lab 1: Working With innerHTML" 
    File: /unit5/labs/lab01innerHTML.html
*/
function lab01innerHTML() {
    // Your code goes in here.
    
    // Declare Variables
    var myTable;
    var someRows;
    
    // Assign
    myTable = document.getElementById("myTable");
    someRows = "<tr>"
        + "<td>Row 1, Cell1</td>"
        + "<td>Row 1, Cell2</td>"
        + "<td>Row 1, Cell3</td>" + "</tr>";
    someRows += "<tr>"
        + "<td>Row 2, Cell1</td>"
        + "<td>Row 2, Cell2</td>"
        + "<td>Row 2, Cell3</td>" + "</tr>";
    someRows += "<tr>"
        + "<td>Row 3, Cell1</td>"
        + "<td>Row 3, Cell2</td>"
        + "<td>Row 3, Cell3</td>" + "</tr>";
    someRows += "<tr>"
        + "<td>Row 4, Cell1</td>"
        + "<td>Row 4, Cell2</td>"
        + "<td>Row 4, Cell3</td>" + "</tr>";
    
    // Modify HTML
    myTable.innerHTML += someRows;
}