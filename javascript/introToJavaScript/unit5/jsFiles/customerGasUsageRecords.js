/*
    This is an example of using the
    Customer Gas Usage Record Set
*/
function customerGasUsageDemo() {
    
    // Variable Declarations
    var customerNumber;
    var customerName;
    var address;
    var gasUsed;
    var outputTable;
    var records;
    
    // Get the HTML output table so we can add rows
    outputTable = document.getElementById('outputTable');
    
    // Open the Customer Gas Usage Records and make them 
    // available to the script
    records = openCustomerGasUsageRecords();
    
    // Test to see if there is a next record and then output it
    while (records.readNextRecord()) {
        customerNumber    = records.getCustomerNumber();
        customerName      = records.getCustomerName();
        address           = records.getCustomerAddress();
        gasUsed           = records.getCustomerGasUsage();
        gasUsed           = gasUsed.toFixed(1);
        
        outputTable.innerHTML += "<tr><td class=\"righttd\">" 
                + customerNumber 
                + "</td><td>" 
                + customerName 
                + "</td><td>" 
                + address 
                + "</td><td class=\"righttd\">" 
                + gasUsed + "</td></tr>";
    }
}
