document.getElementById("cashout-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const agentNumber = document.getElementById("cashout-number").value.trim();
    const amount = Number(document.getElementById("cashout-amount").value);
    const balanceElement = document.getElementById("balance");

    const balance = Number(balanceElement.innerText);
    const newBalance = balance - amount;

    if (!/^\d{11}$/.test(agentNumber)) {
        alert("Agent number must be 11 digits");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    if (newBalance < 0) {
        alert("Insufficient balance");
        return;
    }

    const pin = document.getElementById("cashout-pin").value;

    if (pin !== "1234") {
        alert("Invalid PIN");
        return;
    }

    balanceElement.innerText = newBalance;
    alert("Cashout successful");

    // Optional UX cleanup
    document.getElementById("cashout-number").value = "";
    document.getElementById("cashout-amount").value = "";
    document.getElementById("cashout-pin").value = "";
});
