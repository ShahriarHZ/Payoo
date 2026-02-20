document.getElementById("coupon-btn").addEventListener("click", function () {

    const coupon = document.getElementById("coupon-number").value.trim();
    const balanceElement = document.getElementById("balance");
    let balance = Number(balanceElement.innerText);

    if (coupon === "BONUS100") {
        balance += 100;
    } 
    else if (coupon === "BONUS500") {
        balance += 500;
    } 
    else {
        alert("Invalid Coupon");
        return;
    }

    balanceElement.innerText = balance;
    alert("Bonus Added!");
});
