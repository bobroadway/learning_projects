/*
    The purpose of this function is to 
*/

function resetAddressForm() {
    // Declare Variables
    var output;
    var addressForm;
    
    // Get the output and form objects
    output = document.getElementById("formattedAddressOutputId");
    addressForm = document.getElementById("addressFormId");
    
    // Clear out the output
    output.innerHTML = "";
    
    // Clear out the fields
    addressForm.address.value = "";
    addressForm.city.value = "";
    addressForm.state.value = "";
    addressForm.zip.value = "";
    
    // Reset focus
    addressForm.firstName.focus();
    
    // Don't refresh the page
    return false;
}

function displayFormattedAddress() {
    // Declare Variables
    var addressForm;
    var outputAddress;
    var address;
    var city;
    var state;
    var zipCode;
    var formattedAddress;
    
    // Get form and output elements from HTML
    addressForm = document.getElementById("addressFormId");
    outputAddress = document.getElementById("formattedAddressOutputId");
    
    // Get address, city, state, and zip code from form fields
    address = addressForm.address.value;
    city = addressForm.city.value;
    state = addressForm.state.value;
    zipCode = addressForm.zip.value;
    
    // Create formatted address
    formattedAddress = address + "<br />" 
        + city + ", " + state + " " + zipCode;
    
    // Output formatted street address to HTML
    outputAddress.innerHTML = formattedAddress;
    
    // Reset focus
    addressForm.address.focus();
    addressForm.address.select();
    
    // Don't refresh the page
    return false;
}