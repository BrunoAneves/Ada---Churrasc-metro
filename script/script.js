
// Cor do tema
 const check = document.getElementById('check')
 const span = document.getElementById('header_span')
 const colorText = document.querySelectorAll('.textBlack')

 check.addEventListener('change', () => {
    document.body.classList.toggle('white')
    

    colorText.forEach( element => {
        element.classList.toggle('textBlack')
    })


    if(span.innerText == 'Tema Escuro') {
        span.style.color = '#535353'
        span.innerText = 'Tema Claro'
        
        
    }else {
        span.innerText = 'Tema Escuro'
        span.style.color = '#bbbbbb'
        
    }
   
 })



//Tela Cadastrar

const btnPage1 = document.getElementById('buttonPage1')
const form = document.querySelectorAll('.main_input')
const erroName = document.getElementById('erroName')
const erroEmail = document.getElementById('erroEmail')
const erroCep = document.getElementById('erroCep')
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')


function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}



btnPage1.addEventListener('click', () => {

    let hasErrors = false;

    form.forEach(element => {
        
        if(element.value.trim() == ''){
            if(element.id == 'name') {
                erroName.style.opacity = 1
                setTimeout(() => {
                    erroName.style.opacity = 0;
                }, 1500)
            }else if(element.id == 'email') {
                erroEmail.style.opacity = 1
                setTimeout(() => {
                    erroEmail.style.opacity = 0;
                }, 1500)
            }else if (element.id == 'cep') {
                erroCep.style.opacity = 1
                setTimeout(() => {
                    erroCep.style.opacity = 0;
                }, 1500)
            }

            hasErrors = true
        } 
        
    })

    if(!hasErrors) {
        page1.style.display = 'none'
        page2.style.display = 'block'
    }
    
})