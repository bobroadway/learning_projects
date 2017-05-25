// Constants
var ZERO = 0;
var BASIC_USAGE = 60;
var BASIC_RATE = 2.0;
var HIGH_USAGE_RATE = 1.75;
var HIGH_OVER_RATE = 1.5;

// Global Variables
var totalCustomers;
var totalAmountOwed;
var customerNumber;
var customerName;
var address;
var gasUsage;
var amountOwed;
var records;


/*
    Output the totals to the page. Use HTML tags.
*/
function printGasTotals() {

    totalAmountOwed = totalAmountOwed.toFixed(2);
    
    // Add the total to the total display elements
    document.write("<tr><td colspan='5'>&nbsp;</td></tr>");
    document.write("<tr><td colspan='5'>Total Customers: <strong>" 
            + totalCustomers + "</strong></td></tr>");
    document.write("<tr><td colspan='5'>Total Amount Owed: <strong>" 
            + totalAmountOwed + "</strong></td></tr>");
}


/*
    Print one customer record with calculations to the page
    as an HTML table row.
*/
function printCustomerDetails() {
    
    customerNumber  = records.getCustomerNumber();
    customerName    = records.getCustomerName();
    address         = records.getCustomerAddress();
    
    gasUsage        = gasUsage.toFixed(1);
    amountOwed      = amountOwed.toFixed(2);
    
    document.write("<tr><td class=\"righttd\">");
    document.write(customerNumber);
    document.write("</td><td>");
    document.write(customerName);
    document.write("</td><td>");
    document.write(address);
    document.write("</td><td class=\"righttd\">");
    document.write(gasUsage);
    document.write("</td><td class=\"righttd\">");
    document.write(amountOwed);
    document.write("</td></tr>");
                
    totalCustomers++;
}

/*
    Calculate the amount owed by one customer.
*/
function calculateAmountOwed() {
    
    gasUsage = records.getCustomerGasUsage();

    if (gasUsage <= BASIC_USAGE) {
        amountOwed = gasUsage * BASIC_RATE;
    } else {
        amountOwed = (BASIC_USAGE * HIGH_USAGE_RATE) 
                + ((gasUsage - BASIC_USAGE) * HIGH_OVER_RATE);
    }
    totalAmountOwed += amountOwed;
}

/*
    Initialize any variables that need it.
*/
function performInitialProcessing() {

    amountOwed = ZERO;
    totalCustomers = ZERO;
    totalAmountOwed = ZERO;
    
}

/*
    The main controlling function, it all starts here.
*/
function billGasCustomers() {

    performInitialProcessing();
    
    records = openCustomerGasUsageRecords();
    
    while (records.readNextRecord()) {
        calculateAmountOwed();
        printCustomerDetails();
    }
    
    printGasTotals();
}
