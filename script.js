const loginDiv = document.getElementById('login')
const signUpDiv = document.getElementById('sign_up')
const popUpDiv = document.getElementById('pop_up')


const goSignUpLink = document.getElementById('go_sign_up')
const goLoginLink = document.getElementById('go_login')


function showpopUp(message) {
    popUpDiv.style.display = 'block'

    const popUpmessage = popUpDiv.querySelector('.mensagem')
    popUpmessage.textContent = message

    setTimeout(() => {
        popUpDiv.style.display = 'none'
        loginDiv.style.display = ' block'
    }, 3000)
}

goSignUpLink.addEventListener('click', (e) =>{
    e.preventDefault()
    loginDiv.style.display = 'none'
    signUpDiv.style.display = 'block'
})

goLoginLink.addEventListener('click', (e) => {
    e.preventDefault()
    signUpDiv.style.display = 'none'
    loginDiv.style.display = 'block'
})

let registeredEmail = ''
let registeredPassword = ''


const registerButton = signUpDiv.querySelector('.botão')
registerButton.addEventListener('click', (e) => {
    e.preventDefault()

    let nomeSignUp = document.getElementById('nome').value 
    let emailSignUp = document.getElementById('emailSignUp').value 
    let senhaSignUp = document.getElementById('passwordSignUp').value 

    let messageError = document.getElementById('messageError')
    messageError.textContent = ''

    if(nomeSignUp && emailSignUp && senhaSignUp){
        registeredEmail = emailSignUp
        registeredPassword = senhaSignUp

        signUpDiv.style.display = 'none'
        showpopUp('Registrado com sucesso!')
    } else {
        messageError.textContent = 'Preencha todos os campos!'
    }

})    

const enterButton = loginDiv.querySelector('.botão')
enterButton.addEventListener('click', (e) => {
    e.preventDefault()

    let emailLogin = document.getElementById('emailLogin').value
    let senhaLogin = document.getElementById('passwordLogin').value

    let emailError = document.getElementById('emailError')
    let passwordError = document.getElementById('passwordError')

    emailError.textContent = ''
    passwordError.textContent = ''

    let hasError = false

    if(!emailLogin){
        emailError.textContent = 'Por favor, preencha o E-mail!'
        hasError = true
    }else if(emailLogin !== registeredEmail){
        emailError.textContent ='E-mail não registrado!'
        hasError = true
    }    

    if(!senhaLogin){
      passwordError.textContent = 'Por favor, preencha o campo de senha!'
      hasError = true
    }else if(senhaLogin !== registeredPassword){
        passwordError.textContent = 'Senha incorreta'
        hasError = true
    }if(!hasError){
        loginDiv.style.display = 'none'
        showpopUp('Seja Bem-vindo!')
    }

})
