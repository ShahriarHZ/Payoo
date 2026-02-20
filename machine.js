function showOnly(id){
    const addmoney=document.getElementById("add-money");
    const cashout=document.getElementById("cashout");
    const transfer=document.getElementById("transfer-money");
    const coupon=document.getElementById("coupon");
    const pay=document.getElementById("pay-bill");
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    coupon.classList.add("hidden");
    pay.classList.add("hidden");
    const selected=document.getElementById(id);
    selected.classList.remove("hidden");
}