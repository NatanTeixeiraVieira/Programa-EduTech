function aparecerTrilhas() {
    const trilhasTitulo = document.getElementById('trilhas_titulo')
    const trilhas = document.getElementById('trilhas_fieldset')

    const ano6º = document.getElementById('6ºano')
    const ano7º = document.getElementById('7ºano')
    const ano8º = document.getElementById('8ºano')
    const ano9º = document.getElementById('9ºano')
    const serie1º = document.getElementById('1ºserie')
    const serie2º = document.getElementById('2ºserie')
    const serie3º = document.getElementById('3ºserie')
    const serie4º = document.getElementById('4ºserie-tecnico')

    const h2 = document.createElement('h2')
    h2.innerHTML = 'Trilhas'
    h2.classList = 'trilhas_h2'

    trilhasTitulo.innerHTML = ''
    trilhasTitulo.appendChild(h2)

    if(ano6º.checked || ano7º.checked) {
        const legend = document.createElement('legend')
        const p = document.createElement('p')

        trilhas.innerHTML = ''
        trilhas.appendChild(legend).innerHTML = 'Você está se inscrevendo para a trilha:'
        trilhas.appendChild(p).innerHTML = 'Games e Animações - Nível 1'
    } 
    
    else if(ano8º.checked || ano9º.checked) {
        const legend = document.createElement('legend')
        const p = document.createElement('p')

        trilhas.innerHTML = ''
        trilhas.appendChild(legend).innerHTML = 'Você está se inscrevendo para a trilha:'
        trilhas.appendChild(p).innerHTML = 'Games e Animações - Nível 2'
    } 
    
    else if(serie1º.checked) {
        const legend = document.createElement('legend')
        const p = document.createElement('p')

        trilhas.innerHTML = ''
        trilhas.appendChild(legend).innerHTML = 'Você está se inscrevendo para a trilha:'
        trilhas.appendChild(p).innerHTML = 'FRONT-END com HTML e CSS'
    } 
    
    else if(serie2º.checked) {
        const legend = document.createElement('legend')
        const labelMobile = document.createElement('label')
        const inputMobile = document.createElement('input')

        const labelDataScience = document.createElement('label')
        const inputDataScience = document.createElement('input')

        const div = document.createElement('div')

        labelMobile.setAttribute('for', 'mobile')

        labelDataScience.setAttribute('for', 'dataScience')

        inputMobile.setAttribute('type', 'radio')
        inputMobile.name = 'trilha'
        inputMobile.id = 'mobile'
        inputMobile.required = 'true'

        inputDataScience.setAttribute('type', 'radio')
        inputDataScience.name = 'trilha'
        inputDataScience.id = 'dataScience'

        trilhas.innerHTML = ''

        trilhas.appendChild(legend).innerHTML = 'Escolha qual trilha você deseja fazer:'
        trilhas.appendChild(div)

        div.appendChild(inputMobile)
        div.appendChild(labelMobile).innerHTML = 'Desenvolvimento de MOBILE baseado em JavaScript'

        trilhas.appendChild(inputDataScience)
        trilhas.appendChild(labelDataScience).innerHTML = 'Data Science (Ciência de Dados)'
    }

    else if(serie3º.checked || serie4º.checked) {
        const legend = document.createElement('legend')
        const labelJava = document.createElement('label')
        const inputJava = document.createElement('input')

        const labelPython = document.createElement('label')
        const inputPython = document.createElement('input')

        const div = document.createElement('div')

        labelJava.setAttribute('for', 'java')

        labelPython.setAttribute('for', 'python')

        inputJava.setAttribute('type', 'radio')
        inputJava.name = 'trilha'
        inputJava.id = 'java'
        inputJava.required = 'true'

        inputPython.setAttribute('type', 'radio')
        inputPython.name = 'trilha'
        inputPython.id = 'python'

        trilhas.innerHTML = ''

        trilhas.appendChild(legend).innerHTML = 'Escolha qual trilha você deseja fazer:'
        trilhas.appendChild(div)

        div.appendChild(inputJava)
        div.appendChild(labelJava).innerHTML = 'Programação em JAVA'

        trilhas.appendChild(inputPython)
        trilhas.appendChild(labelPython).innerHTML = 'Programação em Python'
    }

}