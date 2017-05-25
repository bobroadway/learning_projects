/*
    This is the JavaScript code for 
    "Inventory Items Records" 
    File: /unit4/inventoryItemsRecords.html
*/
function inventoryItemsRecords() {
    var currentNumber;
    var currentDescription;
    var currentStockAmount;
    
    var itemRecords;
    
    // Open the Inventory Items Records and make them 
    // available to the script
    itemRecords = openInventoryItemsRecords();
        
    // Read the next record, test to see if there 
    // is a next record and then output it
    while (itemRecords.readNextRecord()) {
        currentNumber      = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();

        document.write(currentNumber + "\t" + currentDescription 
                + "\t" + currentStockAmount  + "<br />");
        
    }
}