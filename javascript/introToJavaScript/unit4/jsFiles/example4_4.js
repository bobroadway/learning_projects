/*
    This is file /unit4/example4_4.js 
    It contains the JavaScript code for
    
    "Process Inventory Items" File: /unit4/example4_4.html
*/
function example4_4() {

    // Declare Constants
    var ZERO = 0;
    var MINIMUM_STOCK_LIMIT = 20;
    var ROW_START = "<tr><td>";
    var CELL = "</td><td>";
    var ROW_END = "</td></tr>";
    var ROW_START_SPAN = "<tr><td colspan=\"3\">";

    // Declare variables
    var totalLowStockItems = ZERO;
    var currentItemNumber;
    var currentItemDescription;
    var currentStockAmount;
    var heading;
    var formattedItemOutput;
    var footer;
    
    // Open the Inventory Items records
    var records = openInventoryItemsRecords();
    
    // Output a report heading
    heading = "<h5>Low Stock Items</h5>";
    document.write(heading);
    
    // Read through all inventory items
    // looking for low stock items
    while (records.readNextRecord()) {
        
        // check if stock is low for this item
        currentStockAmount = records.getItemStockAmount();
        
        // Compare with the minimum stock limit
        if (currentStockAmount < MINIMUM_STOCK_LIMIT) {
            // output the item with low stock
            currentItemNumber = records.getItemNumber();
            currentItemDescription = records.getItemDescription();
            formattedItemOutput = ROW_START 
                    + currentItemNumber 
                    + CELL
                    + currentItemDescription 
                    + CELL
                    + currentStockAmount
                    + ROW_END;
            document.write(formattedItemOutput);
            totalLowStockItems++;
        }
    }
    
    // Output the total footer
    footer = ROW_START_SPAN
            + "<b>Total Low Stock Items: "
            + totalLowStockItems
            + "</b>"
            + ROW_END;
    document.write(footer);
}