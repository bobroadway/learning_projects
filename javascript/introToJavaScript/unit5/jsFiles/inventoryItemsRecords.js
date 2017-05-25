/*
    This is the JavaScript code for 
    "Inventory Items Records" File: /unit5/inventoryItemsRecords.html
*/
function inventoryItemsRecords() {
    
    // Variable Declarations
    var currentNumber;
    var currentDescription;
    var currentStockAmount;
    var itemRecords;
    var outputTable;
    
    // Get the HTML output table so we can add rows
    outputTable = document.getElementById('outputTable');
    
    // Open the Inventory Items Records and make them 
    // available to the script
    itemRecords = openInventoryItemsRecords();
    
    // Test to see if there is a next record and then output it
    while (itemRecords.readNextRecord()) {
        
        currentNumber      = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();
        currentStockAmount = currentStockAmount.toFixed(1);

        outputTable.innerHTML += "<tr><td class=\"righttd\">" + currentNumber 
                + "</td><td>" + currentDescription 
                + "</td><td class=\"righttd\">" + currentStockAmount 
                + "</td></tr>";        
    }
}