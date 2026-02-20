document.getElementById("transfer-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const accountNumber = document.getElementById("transfer-number").value.trim();
    const amount = Number(document.getElementById("transfer-amount").value);
    const balanceElement = document.getElementById("balance");

    const balance = Number(balanceElement.innerText);
    const newBalance = balance - amount;

    // Account number validation
    if (!/^\d{11}$/.test(accountNumber)) {
        alert("Account number must be 11 digits");
        return;
    }

    // Amount validation
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    // Balance check
    if (newBalance < 0) {
        alert("Insufficient balance");
        return;
    }

    // PIN validation
    const pin = document.getElementById("transfer-pin").value;
    if (pin !== "1234") {
        alert("Invalid PIN");
        return;
    }

    // Update balance
    balanceElement.innerText = newBalance;

    alert("Transfer successful");

    // Clear inputs
    document.getElementById("transfer-number").value = "";
    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-pin").value = "";
});
