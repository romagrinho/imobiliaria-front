
// Seleciona minha classe steps1
document.addEventListener('DOMContentLoaded', function () {
    const steps1 = document.querySelectorby('.steps1');
    /* Adiciona um evento que verifica se o mouse esta dentro da classe adicionando o
    efeito hover em todos que estiver com essa classe */
    steps1.addEventListener('mouseover', function () {
        this.classList.add('hovered');
    });
    /* Adiciona um evento que verifica se o mouse esta fora da classe removendo o
        efeito hover em todos que estiver com essa classe */
    steps1.addEventListener('mouseout', function () {
        this.classList.remove('hovered');
    });
});

/* mesma função acima, porem servindo apenas para verificar se o mouse esta dentro
se o mouse estiver, ele ira remover o hover */

document.addEventListener('DOMContentLoaded', function () {
    const stepscontent = document.querySelector('.stepscontent');

    stepscontent.addEventListener('mouseover', function () {
        this.classList.remove('hovered');
    });
});

// Seleciona minha classe steps2
document.addEventListener('DOMContentLoaded', function () {
    const crescer = document.querySelector('.steps2');
    /* Adiciona um evento que verifica se o mouse esta dentro da classe adicionando o
    efeito hover em todos que estiver com essa classe */
    crescer.addEventListener('mouseover', function () {
        this.classList.add('hovered');
    });
    /* Adiciona um evento que verifica se o mouse esta fora da classe removendo o
    efeito hover em todos que estiver com essa classe */
    crescer.addEventListener('mouseout', function () {
        this.classList.remove('hovered');
    });
});

//Pega o elemento com id calculate e adiciona um evento de click
//Após cria as variaveis
document.getElementById('calculate').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    /* Condição para verificar se alguns dos inputs n estão com valor nulo, caso esteja
    no elemento que estiver com o ID result ele ira retornar a mensagem */
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num1) === 0) {
        document.getElementById('result').textContent = "Sem valor";
        return;
    }
    /* Faz o calculo da regra de 3 e verifica se o valor é int para não colocar casas decimais
    caso tenha casas decimais ele ira adicionar até 2 casas */
    let result = (num3 * num2) / num1;
    if (Number.isInteger(result)) {
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = result.toFixed(2).replace('.', ',');
    }
});

function TirarPrint() {
    html2canvas(document.querySelector("#img1")).then(canvas => {
        // Cria um elemento div para a sobreposição
        var overlay = document.createElement("div");
        overlay.classList.add("overlay"); // Adiciona uma classe para estilização
        overlay.appendChild(canvas);

        var downloadButton = document.createElement("a");
        downloadButton.innerText = "Download";
        downloadButton.classList.add("download-button");
        downloadButton.download = "casaSantanadeparnaiba.png"; // Define o nome do arquivo a ser baixado
        downloadButton.href = canvas.toDataURL("/img/casa1.jpg"); // Define o link para baixar a imagem
        overlay.appendChild(downloadButton);

        // Adiciona um botão de fechar
        var closeButton = document.createElement("button-overlay");
        closeButton.innerText = "Fechar";
        closeButton.classList.add("close-button");
        closeButton.onclick = function () {
            document.body.removeChild(overlay); // Remove a sobreposição ao clicar no botão de fechar
        };
        overlay.appendChild(closeButton);

 // Ajusta a largura e a altura do canvas para aumentar a imagem
        if(innerWidth < 768){ //Verifica se a largura da tela é menor do que 768 pixels
            canvas.style.width = "90%";// Define a largura do canvas como 90% do tamanho da tela
        }else {
            canvas.style.width = "50%";// Define a largura do canvas como 50% do tamanho da tela
        };
        canvas.style.height = "auto"; // Mantém a proporção da altura automaticamente

        // Adiciona a sobreposição ao corpo do documento
        document.body.appendChild(overlay);
    });
};

function TirarPrint2() {
    html2canvas(document.querySelector("#img2")).then(canvas => {

        var overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.appendChild(canvas);

        var downloadButton = document.createElement("a");
        downloadButton.innerText = "Download";
        downloadButton.classList.add("download-button");
        downloadButton.download = "casaBarueri.png";
        downloadButton.href = canvas.toDataURL("/img/casa2.jpg");
        overlay.appendChild(downloadButton);


        var closeButton = document.createElement("button-overlay");
        closeButton.innerText = "Fechar";
        closeButton.classList.add("close-button");
        closeButton.onclick = function () {
            document.body.removeChild(overlay);
        };
        overlay.appendChild(closeButton);

        if(innerWidth < 768){
            canvas.style.width = "90%";
        }else {
            canvas.style.width = "50%";
        };

        document.body.appendChild(overlay);
    });
};

function TirarPrint3() {
    html2canvas(document.querySelector("#img3")).then(canvas => {

        var overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.appendChild(canvas);

        var downloadButton = document.createElement("a");
        downloadButton.innerText = "Download";
        downloadButton.classList.add("download-button");
        downloadButton.download = "casaOsasco.png";
        downloadButton.href = canvas.toDataURL("/img/casa3.jpg");
        overlay.appendChild(downloadButton);


        var closeButton = document.createElement("button-overlay");
        closeButton.innerText = "Fechar";
        closeButton.classList.add("close-button");
        closeButton.onclick = function () {
            document.body.removeChild(overlay);
        };
        overlay.appendChild(closeButton);
        if(innerWidth < 768){
            canvas.style.width = "90%";
        }else {
            canvas.style.width = "50%";
        };

        
        canvas.style.height = "auto";

        document.body.appendChild(overlay);
    });
};

document.getElementById('cpf').addEventListener('input', function (e) {
    var cpf = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Adiciona os pontos e o traço conforme necessário
    cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

    e.target.value = cpf; // Define o valor formatado de volta ao campo de entrada
});

document.getElementById('telefone').addEventListener('input', function (e) {
    var telefone = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Adiciona a máscara de telefone
    telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2');
    telefone = telefone.replace(/^(\d{2})\s(\d{5})(\d)/, '($1) $2-$3');
    telefone = telefone.replace(/^(\d{2})\s(\d{5})-(\d{4}).*/, '($1) $2-$3');

    e.target.value = telefone; // Define o valor formatado de volta ao campo de entrada
});

document.getElementById('telefoneinvisivel').addEventListener('click', function () {
    var spanVisivel = document.getElementById('telefonevisivel');
    if (spanVisivel.style.display === 'none') {
        spanVisivel.style.display = 'block'; // Mostra o segundo span
    } else {
        spanVisivel.style.display = 'none'; // Oculta o segundo span
    }
});

document.getElementById('telefoneinvisivel2').addEventListener('click', function () {
    var spanVisivel = document.getElementById('telefonevisivel2');
    if (spanVisivel.style.display === 'none') {
        spanVisivel.style.display = 'block'; // Mostra o segundo span
    } else {
        spanVisivel.style.display = 'none'; // Oculta o segundo span
    }
});

/* Quando clica no botão enviar, primeiro ele faz uma verificação se algum dos campos 
estão nulos, se estiver ira dar um alert pedindo para preenhcer, se não estiver, ira dizer que a mensagem 
foi enviada */
document.getElementById('btn-message').addEventListener('click', function (event) {
    /* Nativamente o forms tend a dar um refrehs na pagina, isso deixa como default 
    mantendo oque havia sido digitado */
    event.preventDefault();
    const cpf = String(document.getElementById('cpf').value);
    const tel = String(document.getElementById('telefone').value);
    const message = String(document.getElementById('message').value);

    if (cpf === "" || tel === "" || message === "") {
        alert("Preencha todos os campos");
    } else {
        alert("Mensagem enviada");
    }
});

window.addEventListener('resize', function () {
    // Verifica a largura da tela quando o tamanho da janela é alterado
    if (window.innerWidth < 768) {
        // Se a largura da tela for menor que 768px, oculta o header padrão e mostra o header alternativo
        document.querySelector('header').style.display = 'none';
        document.querySelector('.mobile-header').style.display = 'block';
    } else {
        // Se a largura da tela for maior ou igual a 768px, mostra o header padrão e oculta o header alternativo
        document.querySelector('header').style.display = 'block';
        document.querySelector('.mobile-header').style.display = 'none';
    }
});

class HamburguerMenu {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.2s ease forwards 
            ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
    const hamburguerNavbar = new HamburguerMenu(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );
    hamburguerNavbar.init();
