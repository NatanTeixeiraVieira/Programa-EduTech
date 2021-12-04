let trocarImagem = true

function mudarTema() {
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')

    header.classList.toggle('dark_header')
    main.classList.toggle('dark_main')
    footer.classList.toggle('dark_footer')

    trocaImagem()
}

function trocaImagem() {
    const logoEdutech = document.getElementById('logo-edutech')
    const logoEdutech2 = document.getElementById('logo-edutech2')
    const logoParana = document.getElementById('logo-parana')

    const imgEdutech1 = document.createElement('img')
    const imgEdutech2 = document.createElement('img')
    const imgParana = document.createElement('img')

    if (trocarImagem == true) {
        logoEdutech.innerHTML = ''
        logoEdutech.appendChild(imgEdutech1).src = 'imagens/logo_edutech_tema_escuro.png'
        imgEdutech1.style.width = '120px'

        logoEdutech2.innerHTML = ''
        logoEdutech2.appendChild(imgEdutech2).src = 'imagens/logo_edutech_tema_escuro.png'
        imgEdutech2.style.width = '120px'

        logoParana.innerHTML = ''
        logoParana.appendChild(imgParana).src = 'imagens/governo_parana_tema_escuro.png'
        imgParana.style.width = '170px'

        trocarImagem = false
    } else {
        logoEdutech.innerHTML = ''
        logoEdutech.appendChild(imgEdutech1).src = 'imagens/logo_edutech.png'
        imgEdutech1.style.width = '120px'

        logoEdutech2.innerHTML = ''
        logoEdutech2.appendChild(imgEdutech2).src = 'imagens/logo_edutech.png'
        imgEdutech2.style.width = '120px'

        logoParana.innerHTML = ''
        logoParana.appendChild(imgParana).src = 'imagens/governo_parana.jpg'
        imgParana.style.width = '170px'

        trocarImagem = true
    }
}