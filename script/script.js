
// Cor do tema

const check = document.getElementById('check')
const span = document.getElementById('header_span')
const colorText = document.querySelectorAll('.textBlack')


function saveStateTema(estado) {
    localStorage.setItem('estado', JSON.stringify(estado))
}

function loadStateTema() {
    const estadoSalvo = JSON.parse(localStorage.getItem('estado'))
    return estadoSalvo || {}
}

const estadoSalvo = loadStateTema();
console.log(estadoSalvo)

if (estadoSalvo.tema === 'escuro') {
    document.body.classList.remove('white');
    span.innerText = 'Tema Escuro';
    span.style.color = '#535353';
    colorText.forEach(element => {
        element.classList.remove('textBlack');
    });
} else {
    document.body.classList.add('white');
    span.innerText = 'Tema Claro';
    span.style.color = '#535353';
    colorText.forEach(element => {
        element.classList.add('textBlack');
    });
}


check.checked = estadoSalvo.check || false


check.addEventListener('change', () => {
    document.body.classList.toggle('white');
    colorText.forEach(element => {
        element.classList.toggle('textBlack');
    });

    if (span.innerText == 'Tema Escuro') {
        span.style.color = '#535353';
        span.innerText = 'Tema Claro';

    } else {
        span.innerText = 'Tema Escuro';
        span.style.color = '#bbbbbb';

    }

    saveStateTema({
        tema: check.checked ? 'escuro' : 'claro',
        check: check.checked,
        spanColor: span.style.color
    })

});

if (estadoSalvo.spanColor) {
    span.style.color = estadoSalvo.spanColor
}


// Requisição viaCep 

async function consultaCep(cepValue) {
    const url = 'https://viacep.com.br/ws/'
    const cepUrl = `${url}${cepValue}/json/`
    try {
        const response = await fetch(cepUrl)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        erroCep.innerText = 'Digite um Cep válido'
        erroCep.style.opacity = 1;
        console.error('Erro ao consultar o ViaCEP:', error);
        throw error;
    }
}






//Tela Cadastrar

const btnPage1 = document.getElementById('buttonPage1')
const form = document.querySelectorAll('.main_input')
const erroName = document.getElementById('erroName')
const erroEmail = document.getElementById('erroEmail')
const erroCep = document.getElementById('erroCep')
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const main_text = document.querySelector('.main_text')

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}



btnPage1.addEventListener('click', async () => {

    let hasErrors = false;

    form.forEach(element => {

        if (element.value.trim() == '') {
            if (element.id == 'name') {
                erroName.style.opacity = 1
                setTimeout(() => {
                    erroName.style.opacity = 0;
                }, 1500)
            } else if (element.id == 'email') {
                erroEmail.style.opacity = 1
                setTimeout(() => {
                    erroEmail.style.opacity = 0;
                }, 1500)


            } else if (element.id == 'cep') {
                erroCep.style.opacity = 1
                setTimeout(() => {
                    erroCep.style.opacity = 0;
                }, 1500)
            }

            hasErrors = true
        }

    })


    if (!hasErrors) {
        const emailValue = document.getElementById('email').value;
        if (emailValue !== '') {
            if (!isValidEmail(emailValue)) {
                erroEmail.innerText = 'Digite um Email válido';
                erroEmail.style.opacity = 1;
                setTimeout(() => {
                    erroEmail.style.opacity = 0;
                }, 1500);
                hasErrors = true;
            }
        }

    }

    if (!hasErrors) {
        const cepValue = document.getElementById('cep').value;
        console.log(cepValue)
        if (cepValue !== '') {
            try {
                await consultaCep(cepValue);
            } catch (error) {
                // Se houver erro ao consultar o CEP, não permitir avançar para a próxima página
                return;
            }
        }

        page1.style.display = 'none';
        page2.style.display = 'block';
        main_text.innerText = 'Precisa de uma ajudinha com o churrasco? :) Quantas pessoas vão participar?';
    }


})


// Tela escolher quantidade de pessoas 


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelectorAll('.cardPeople')

    form.forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault()
            if (event.target.tagName === 'BUTTON') {
                const input = event.target.closest('.buttons').previousElementSibling;
                const value = parseInt(input.value);

                if (event.target.id.includes('Menos')) {
                    input.value = Math.max(value - 1, 0)
                } else if (event.target.id.includes('Mais')) {
                    input.value = value + 1
                }
            }
        })
    })
})




// Calcular itens do churrasco 

const buttonCalcular = document.getElementById('buttonCalcular')
const buttonNovoCalc = document.getElementById('buttonNovoCalc')



buttonCalcular.addEventListener('click', () => {
    calcItems()
})



buttonNovoCalc.addEventListener('click', () => {
    document.getElementById('page2').style.display = 'block';
    document.getElementById('page3').style.display = 'none';

})



function calcItems() {
    const men = parseInt(document.getElementById('men').value);
    const women = parseInt(document.getElementById('women').value);
    const children = parseInt(document.getElementById('children').value);
    const drinkers = parseInt(document.getElementById('drinkers').value);




    const meatQuantity = 0.4 * men + 0.32 * women + 0.2 * children;
    const garlicBreadQuantity = 2 * (men + women) + 1 * children;
    const charcoalQuantity = 1 * (men + women + children + drinkers);
    const saltQuantity = 0.04 * (men + women + children + drinkers);
    const iceQuantity = 5 * Math.ceil((men + women + children + drinkers) / 10);
    const sodaQuantity = Math.ceil((men + women + children + drinkers) / 5);
    const waterQuantity = Math.ceil((men + women + children + drinkers) / 5);
    const beerQuantity = 3 * drinkers;


    function setPlural(valor, pessoa) {
        if (valor > 1 && pessoa == 'Homem') {
            return 's'
        } else if (valor > 1 && pessoa === 'Mulheres') {
            return 'es'
        } else {
            return ''
        }
    }



    const infosConvidados = document.getElementById('infosConvidados')
    infosConvidados.innerHTML = ` 
     
             <h3 class="page3_h3">${men + women + children} Convidados</h3>
           <div class="div_convidados">
              <span class="div_convidados__span1">${men} Homen${setPlural(men, 'Homem')} </span>
              <span class="div_convidados__span2 ">${women} Mulher${setPlural(women, "Mulheres")}</span>
              <span class="div_convidados__span3 ">${children} Criança${setPlural(children, 'Homem')}</span>
    </div>

`



    const resultTable = document.getElementById('resultTable');
    resultTable.innerHTML = `

    <tr class="table_tr__th ">
        <th> ITEM </th>
        <th> QUANTIDADE</th>
    <tr>
    <tr class="table_tr ">
        <td>Carne</td>
        <td>${meatQuantity.toFixed(2)} KG</td>
    </tr>
    <tr class="table_tr ">
        <td>Pão de Alho</td>
        <td>${garlicBreadQuantity}</td>
    </tr>
    <tr class="table_tr ">
        <td>Carvão</td>
        <td>${charcoalQuantity} KG</td>
    </tr>
    <tr class="table_tr ">
        <td>Sal</td>
        <td>${saltQuantity.toFixed(2)} KG</td>
    </tr>
    <tr class="table_tr ">
        <td>Gelo</td>
        <td>${iceQuantity} KG</td>
    </tr>
    <tr class="table_tr ">
        <td>Refrigerante</td>
        <td>${sodaQuantity} garrafas de 2L</td>
    </tr>
    <tr class="table_tr ">
        <td>Água</td>
        <td>${waterQuantity} garrafas de 1L</td>
    </tr>
    <tr class="table_tr ">
        <td>Cerveja</td>
        <td>${beerQuantity} garrafas de 600ml</td>
    </tr>
    `;





    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
    main_text.innerText = 'Confira a lista para o seu churrasco!'

}



//     // Esconder passo atual e exibir próximo
//     document.getElementById('step2').style.display = 'none';
//     document.getElementById('step3').style.display = 'block';
//     }







