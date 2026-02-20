document.getElementById("add-money-btn").addEventListener("click", function () {
    const bankInput = document.getElementById("add-money-bank");
    const bankAccount = bankInput.value;

    if (bankAccount === "Select Bank") {
        alert("Please select a bank");
        return;
    }

    const accInput = document.getElementById("add-money-number");
    const account = accInput.value.trim();

    if (!/^\d{11}$/.test(account)) {
        alert("Invalid account number. Must be 11 digits.");
        return;
    }

    const amountInput = document.getElementById("add-money-amount");
    const amount = Number(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    const balanceEl = document.getElementById("balance");
    const currentBalance = Number(balanceEl.innerText);

    const pinInput = document.getElementById("add-money-pin");
    const pin = pinInput.value;

    if (pin !== "1234") {
        alert("Invalid PIN");
        return;
    }

    const newBalance = currentBalance + amount;
    balanceEl.innerText = newBalance;

    alert("Add Money Success");

    // Optional: reset form
    bankInput.value = "Select Bank";
    accInput.value = "";
    amountInput.value = "";
    pinInput.value = "";
});
