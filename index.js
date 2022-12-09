function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }
}