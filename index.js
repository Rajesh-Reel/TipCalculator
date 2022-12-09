function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }

    let total = (billAmount * serviceQuality);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2)

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//shows nothing on load
document.getElementById("totalTip").style.display = "none";