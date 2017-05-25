/*
    This is the JavaScript code for 
    "Lab 5: Record Set Processing" 
    File: /unit4/labs/lab05recordSetProcessing.html
*/
function lab05recordSetProcessing() {
    
    // Declare Variables
    var currentNumber;
    var currentDescription;
    var currentStockAmount;
    var totalRecords;
    var toralItems;
    
    var itemRecords;
    
    // Set initial values
    var totalRecords = 0;
    var totalItems = 0;
    
    // Open the Inventory Items Records and make them 
    // available to the script
    itemRecords = openInventoryItemsRecords();
    
    document.write("The Inventory Items Record Set:<br /><br />");
    
    // Read the next record, test to see if there 
    // is a next record and then output it
    while (itemRecords.readNextRecord()) {
        currentNumber      = itemRecords.getItemNumber();
        currentDescription = itemRecords.getItemDescription();
        currentStockAmount = itemRecords.getItemStockAmount();
        
        totalRecords++;
        totalItems += currentStockAmount;
        
        document.write(currentNumber + "\t" + currentDescription 
                + "\t" + currentStockAmount + "<br />");
    }
    
    document.write("\nTotal Inventory Records: " + totalRecords
        + "\nTotal Amount of Items in Inventory: " + totalItems);
     
}