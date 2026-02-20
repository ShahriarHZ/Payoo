document.getElementById("pay-btn").addEventListener("click", function () {

    const bank = document.getElementById("pay-bank").value;
    const accountNumber = document.getElementById("pay-number").value.trim();
    const amount = Number(document.getElementById("pay-amount").value);
    const pin = document.getElementById("pay-pin").value;

    const balanceElement = document.getElementById("balance");
    const currentBalance = Number(balanceElement.innerText);

    
    if (bank === "Select Bank") {
        alert("Please select a bank");
        return;
    }

   
    if (!/^\d{11}$/.test(accountNumber)) {
        alert("Account number must be exactly 11 digits");
        return;
    }

    
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid payment amount");
        return;
    }

   
    if (amount > currentBalance) {
        alert("Insufficient balance");
        return;
    }

    if (pin !== "1234") {
        alert("Invalid PIN");
        return;
    }

  
    const newBalance = currentBalance - amount;
    balanceElement.innerText = newBalance;

    alert("Bill paid successfully!");

    
    document.getElementById("pay-number").value = "";
    document.getElementById("pay-amount").value = "";
    document.getElementById("pay-pin").value = "";
    document.getElementById("pay-bank").selectedIndex = 0;
});
