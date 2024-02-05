
let submit = document.getElementById("submit")

let passValid =()=>{
    
    submit.addEventListener("click",()=>{
        let password = document.getElementById("password")
        let confPassword = document.getElementById("confpassword")
        if(password.value!==confPassword.value){
            password.setCustomValidity("As senhas não são iguais")
            confPassword.setCustomValidity("As senhas não são iguais")
        }else {
            password.setCustomValidity("");
            confPassword.setCustomValidity("");
            
        }
    })
}
passValid()