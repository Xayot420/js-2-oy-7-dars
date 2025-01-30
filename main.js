const marsForm = document.querySelector("#form");
const marsLogin = document.querySelector("#login");
const marsPassword = document.querySelector("#parol");
const marsKoz = document.querySelector("#eye");
const akkaount = document.querySelector("#wrapper");

console.log(marsForm,marsLogin,marsPassword,marsKoz,akkaount);


marsForm.addEventListener("submit" , (evt)=> {
    evt.preventDefault();
    const login = Number(marsLogin.value.trim());
    const password = Number(marsPassword.value.trim());
    oquvchilar.find(obyektlar => {
       if(obyektlar.login === login && obyektlar.parol === password){
        console.log();
        ("Kirildi!")
        // akkaount.style.display = "block";
       } else{
        console.log();
        ("Kirilmadi!")
       }
    })
})

// console.log("Bot");
