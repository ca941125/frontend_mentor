const emailAddress = document.getElementById("emailValue");//
const email = document.getElementById("email");//
const errorMessage = document.getElementById("errorMessage");//
const emailBtn = document.getElementById("emailSubscriptionBtn");//
const containerAccess = document.querySelector(".container-access");//
const containerSuccess = document.querySelector(".container-success");//
    
emailBtn.addEventListener('click', function() {
    if(emailAddress.value.includes("@") && emailAddress.value.includes(".")){
        email.innerHTML = emailAddress.value;
        containerSuccess.style.display = "flex";
        containerAccess.style.display = "none";
    }else{
        errorMessage.style.display = "flex";
        errorMessage.style.color = "rgb(212, 70, 44)"
        emailAddress.style.backgroundColor = "rgb(236, 204, 198)";
        emailAddress.style.color = "rgb(212, 70, 44)";
        emailAddress.style.border = "1px solid rgb(212, 70, 44)";
    }
})
