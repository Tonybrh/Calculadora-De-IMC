const form = document.querySelector(".calc")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    validatorForm()
})

const validatorForm = () => {
    const res = document.querySelector(".res")
    const user = document.querySelector("#user")
    const high = document.querySelector("#high")
    const weight = document.querySelector("#weight")
    const small1 = document.querySelector("#small1")
    const small2 = document.querySelector("#small2")
    const small3 = document.querySelector("#small3")

    if (user.value === "") {
        small1.classList = 'error'
        small1.innerHTML = "Preencha os dados"
        res.innerHTML = "Preencha todos os dados"
    } else {
        small1.innerHTML = ""
    }

    if (high.value === "") {
        small2.classList = 'error'
        small2.innerHTML = "Preencha os dados"
        res.innerHTML = "Preencha todos os dados"
    } else {
        small2.innerHTML = ""
    }

    if (weight.value === "") {
        small3.classList = 'error'
        small3.innerHTML = "Preencha os dados"
        res.innerHTML = "Preencha todos os dados"
    } else {
        small3.innerHTML = ""
    }
    if( weight.value && high.value && user.value != ""){
        calculaImc()
    function calculaImc(){
        const imc = (weight.value/(high.value**2))
        const imcFixed = imc.toFixed(2)
         res.innerHTML = `Olá ${user.value} seu Índice de Massa Corporal é ${imcFixed}`
}
    }
    
}
