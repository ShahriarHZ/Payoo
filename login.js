document.getElementById("login-btn").addEventListener("click",function(){
    const numberInput=document.getElementById("number-input");
    const number=numberInput.value;
    const pinInput=document.getElementById("pin-input");
    const pin=pinInput.value;
    if(number=="01778601903" && pin=="1234"){
        alert("Login success");
        window.location.assign("./home.html");
    }
    else
    {
        alert("Login failed");
        return;
    }
})