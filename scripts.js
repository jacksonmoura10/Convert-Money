// Seleciona o botão de conversão
const convertButton = document.querySelector(".convert-button");

// Seleciona o select de moedas de destino
const currencySelect = document.querySelector(".currency-select");

// Seleciona o select de moedas de origem
const currencyFrom = document.querySelector(".currency-from");

// Função que vai fazer a conversão dos valores
function convertValues() {
    // Pega o valor inserido pelo usuário no campo de input (valor em Real)
    const inputCurrency = document.querySelector(".input-currency").value;

    // Seleciona os elementos onde serão exibidos os valores convertidos
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor em real
    const currencyValueToConvertd = document.querySelector(".currency-value"); // outras moedas

    // Aqui definimos os valores das moedas (cotação de cada uma)
    const dolarToday = 5.25;
    const euroToday = 6.50;
    const bitcoinToday = 0.000026;
    const ethereumToday = 0.00042;

    // Converte o valor de input para número, substituindo a vírgula por ponto, se necessário
    const inputValue = Number(inputCurrency.replace(",", "."));

    // Se a moeda de destino for o Dólar
    if (currencySelect.value == "dolar") {
        // Converte o valor de Real para Dólar e formata como moeda
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday);
    }

    // Se a moeda de destino for o Euro
    if (currencySelect.value == "euro") {
        // Converte o valor de Real para Euro e formata como moeda
        currencyValueToConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday);
    }

    // Se a moeda de destino for o Bitcoin
    if (currencySelect.value == "bitcoin") {
        // Converte o valor de Real para Bitcoin e formata com até 6 casas decimais
        currencyValueToConvertd.innerHTML = (inputValue * bitcoinToday).toFixed(6) + " BTC";
    }

    // Se a moeda de destino for o Ethereum
    if (currencySelect.value == "ethereum") {
        // Converte o valor de Real para Ethereum e formata com até 6 casas decimais
        currencyValueToConvertd.innerHTML = (inputValue * ethereumToday).toFixed(6) + " ETH";
    }

    // Atualiza o valor em Real, formatado como moeda brasileira
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);
}

// Função para atualizar o nome da moeda e a bandeira de acordo com a seleção do usuário
function changeCurrency() {
    // Pega os elementos onde o nome das moedas será exibido
    const currencyNameFrom = document.getElementById("currency-name-from");
    const currencyNameTo = document.getElementById("currency-name-to");

    // Pega as imagens das bandeiras
    const currencyFromImg = document.querySelector(".currency-from-img");
    const currencyImage = document.querySelector(".currency-img");

    // Verifica a moeda de origem selecionada e atualiza o nome e bandeira
    if (currencyFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real";  // Nome da moeda
        currencyFromImg.src = "./assets/real.png";  // Imagem da bandeira
    }

    if (currencyFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar americano";  // Nome da moeda
        currencyFromImg.src = "./assets/usa.png";  // Imagem da bandeira
    }

    if (currencyFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro";  // Nome da moeda
        currencyFromImg.src = "./assets/euro.png";  // Imagem da bandeira
    }

    if (currencyFrom.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin";  // Nome da moeda
        currencyFromImg.src = "./assets/bitcoin.png";  // Imagem da bandeira
    }

    if (currencyFrom.value == "ethereum") {
        currencyNameFrom.innerHTML = "Ethereum";  // Nome da moeda
        currencyFromImg.src = "./assets/ethereum.png";  // Imagem da bandeira
    }

    // Verifica a moeda de destino selecionada e atualiza o nome e bandeira
    if (currencySelect.value == "dolar") {
        currencyImage.src = "./assets/usa.png";  // Imagem da bandeira de destino
        currencyNameTo.innerHTML = "Dólar americano";  // Nome da moeda de destino
    }

    if (currencySelect.value == "euro") {
        currencyImage.src = "./assets/euro.png";  // Imagem da bandeira de destino
        currencyNameTo.innerHTML = "Euro";  // Nome da moeda de destino
    }

    if (currencySelect.value == "bitcoin") {
        currencyImage.src = "./assets/bitcoin.png";  // Imagem da bandeira de destino
        currencyNameTo.innerHTML = "Bitcoin";  // Nome da moeda de destino
    }

    if (currencySelect.value == "ethereum") {
        currencyImage.src = "./assets/ethereum.png";  // Imagem da bandeira de destino
        currencyNameTo.innerHTML = "Ethereum";  // Nome da moeda de destino
    }

    // Chama a função de conversão para atualizar os valores na tela
    convertValues();
}

// Adiciona um evento para quando o select de destino for alterado
currencySelect.addEventListener("change", changeCurrency);

// Adiciona um evento para quando o select de origem for alterado
currencyFrom.addEventListener("change", changeCurrency);  // Adicionado para o primeiro select

// Adiciona um evento para o clique no botão de conversão
convertButton.addEventListener("click", convertValues);
