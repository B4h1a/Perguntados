
const perguntas = [
    // CATEGORIA 1 — MÚSICA
    {
        categoria: "🎵 Música",
        pergunta: "Quem era conhecido como o Rei do Pop?",
        alternativas: [
            "Elvis Presley",
            "Michael Jackson",
            "Freddie Mercury",
            "Prince"
        ],
        correta: 1
    },
    {
        categoria: "🎵 Música",
        pergunta: "Qual banda brasileira lançou a música Que País É Este?",
        alternativas: [
            "Titãs",
            "Barão Vermelho",
            "Legião Urbana",
            "Paralamas do Sucesso"
        ],
        correta: 2
    },
    {
        categoria: "🎵 Música",
        pergunta: "Qual cantora brasileira ficou conhecida como a Rainha dos Baixinhos?",
        alternativas: [
            "Angélica",
            "Eliana",
            "Mara Maravilha",
            "Xuxa"
        ],
        correta: 3
    },
    {
        categoria: "🎵 Música",
        pergunta: "Qual banda britânica lançou o sucesso Wonderwall, em 1995?",
        alternativas: [
            "Queen",
            "Oasis",
            "The Beatles",
            "The Rolling Stones"
        ],
        correta: 1
    },

    // CATEGORIA 2 — FILMES E TELEVISÃO
    {
        categoria: "📺 Filmes e televisão",
        pergunta: "Qual é o nome do extraterrestre amigo de Elliott no filme lançado em 1982?",
        alternativas: [
            "Alf",
            "E.T.",
            "Yoda",
            "Chewbacca"
        ],
        correta: 1
    },
    {
        categoria: "📺 Filmes e televisão",
        pergunta: "Qual programa infantil brasileiro tinha personagens como Garibaldo e Come-Come?",
        alternativas: [
            "Castelo Rá-Tim-Bum",
            "Sítio do Picapau Amarelo",
            "Vila Sésamo",
            "TV Colosso"
        ],
        correta: 2
    },
    {
        categoria: "📺 Filmes e televisão",
        pergunta: "Qual ator interpretou Marty McFly na trilogia De Volta para o Futuro?",
        alternativas: [
            "Tom Cruise",
            "Keanu Reeves",
            "Michael J. Fox",
            "Jim Carrey"
        ],
        correta: 2
    },
    {
        categoria: "📺 Filmes e televisão",
        pergunta: "Qual série dos anos 90 acompanhava seis amigos que viviam em Nova York?",
        alternativas: [
            "Seinfeld",
            "Friends",
            "Um Maluco no Pedaço",
            "Full House"
        ],
        correta: 1
    },

    // CATEGORIA 3 — JOGOS E TECNOLOGIA
    {
        categoria: "🎮 Jogos e tecnologia",
        pergunta: "Qual personagem de videogame precisa salvar a princesa Peach?",
        alternativas: [
            "Sonic",
            "Donkey Kong",
            "Mario",
            "Pac-Man"
        ],
        correta: 2
    },
    {
        categoria: "🎮 Jogos e tecnologia",
        pergunta: "Qual aparelho era muito utilizado para ouvir fitas cassete enquanto a pessoa caminhava?",
        alternativas: [
            "Discman",
            "Walkman",
            "iPod",
            "MP3 player"
        ],
        correta: 1
    },
    {
        categoria: "🎮 Jogos e tecnologia",
        pergunta: "Qual empresa criou o console Super Nintendo?",
        alternativas: [
            "Sega",
            "Sony",
            "Atari",
            "Nintendo"
        ],
        correta: 3
    },
    {
        categoria: "🎮 Jogos e tecnologia",
        pergunta: "Como era chamado o sistema que permitia acessar comunidades on-line por computador antes da popularização da internet?",
        alternativas: [
            "Bluetooth",
            "BBS",
            "Wi-Fi",
            "GPS"
        ],
        correta: 1
    },

    // CATEGORIA 4 — MODA E COSTUMES
    {
        categoria: "👖 Moda e costumes",
        pergunta: "Qual estilo de calça jeans ficou muito associado à moda dos anos 90, com cintura alta e pernas mais largas?",
        alternativas: [
            "Calça skinny",
            "Calça flare de cintura baixa",
            "Calça mom jeans",
            "Calça social"
        ],
        correta: 2
    },
    {
        categoria: "👖 Moda e costumes",
        pergunta: "Qual acessório de cabelo, muito popular nos anos 80 e 90, tinha dentes grandes e servia para prender os cabelos?",
        alternativas: [
            "Cartola",
            "Piranha de cabelo",
            "Boina",
            "Boné"
        ],
        correta: 1
    },
    {
        categoria: "👖 Moda e costumes",
        pergunta: "Qual detalhe nas roupas, especialmente nos blazers e jaquetas, marcou bastante a moda dos anos 80?",
        alternativas: [
            "Ombreiras",
            "Capuzes enormes",
            "Mangas removíveis",
            "Estampas digitais"
        ],
        correta: 0
    },

    // CATEGORIA 5 — ESPORTES E ACONTECIMENTOS
    {
        categoria: "⚽ Esportes e acontecimentos",
        pergunta: "Em qual país aconteceu a Copa do Mundo de 1994, vencida pelo Brasil?",
        alternativas: [
            "França",
            "Itália",
            "Estados Unidos",
            "México"
        ],
        correta: 2
    },
    {
        categoria: "⚽ Esportes e acontecimentos",
        pergunta: "Qual seleção o Brasil derrotou na final da Copa do Mundo de 1994?",
        alternativas: [
            "Alemanha",
            "Argentina",
            "Itália",
            "Holanda"
        ],
        correta: 2
    },
    {
        categoria: "⚽ Esportes e acontecimentos",
        pergunta: "Qual piloto brasileiro de Fórmula 1 conquistou três títulos mundiais e morreu em 1994?",
        alternativas: [
            "Nelson Piquet",
            "Rubens Barrichello",
            "Emerson Fittipaldi",
            "Ayrton Senna"
        ],
        correta: 3
    },

    // CATEGORIA 6 — CONHECIMENTOS GERAIS
    {
        categoria: "🧠 Conhecimentos gerais",
        pergunta: "Qual moeda passou a ser utilizada no Brasil em 1994, durante o Plano Real?",
        alternativas: [
            "Cruzeiro",
            "Cruzado",
            "Real",
            "Cruzeiro Real"
        ],
        correta: 2
    },
    {
        categoria: "🧠 Conhecimentos gerais",
        pergunta: "Qual aparelho era utilizado para assistir a filmes gravados em fitas de vídeo em casa?",
        alternativas: [
            "DVD player",
            "Videocassete",
            "Blu-ray player",
            "Projetor digital"
        ],
        correta: 1
    },
    {
        categoria: "🧠 Conhecimentos gerais",
        pergunta: "Em que ano caiu o Muro de Berlim, um dos principais símbolos da Guerra Fria?",
        alternativas: [
            "1985",
            "1987",
            "1989",
            "1991"
        ],
        correta: 2
    }
];

// ELEMENTOS DA PÁGINA
const telas = {
    inicio: document.getElementById("startScreen"),
    jogo: document.getElementById("gameScreen"),
    resultado: document.getElementById("resultScreen")
};

const playerName = document.getElementById("playerName");
const startButton = document.getElementById("startButton");
const displayName = document.getElementById("displayName");
const scoreElement = document.getElementById("score");

const questionCounter = document.getElementById("questionCounter");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");
const categoryBadge = document.getElementById("categoryBadge");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const timerElement = document.getElementById("timer");
const timerBox = document.getElementById("timerBox");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const finalScore = document.getElementById("finalScore");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const accuracy = document.getElementById("accuracy");
const restartButton = document.getElementById("restartButton");
const homeButton = document.getElementById("homeButton");

// ESTADO DO JOGO
const TEMPO_POR_PERGUNTA = 15;
const PONTOS_POR_ACERTO = 100;

let indiceAtual = 0;
let pontuacao = 0;
let acertos = 0;
let erros = 0;
let tempoRestante = TEMPO_POR_PERGUNTA;
let intervalo = null;
let respondida = false;
let nomeJogador = "Jogador";

// EMBARALHA AS PERGUNTAS PARA CADA PARTIDA
function embaralharPerguntas(lista) {
    const copia = lista.map(pergunta => ({
        ...pergunta,
        alternativas: [...pergunta.alternativas]
    }));

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

let perguntasDaPartida = [];

// TROCA DE TELAS
function mostrarTela(telaAtiva) {
    Object.values(telas).forEach(tela => {
        tela.hidden = true;
    });

    telas[telaAtiva].hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// INICIA UMA NOVA PARTIDA
function iniciarJogo() {
    nomeJogador = playerName.value.trim() || "Jogador";

    indiceAtual = 0;
    pontuacao = 0;
    acertos = 0;
    erros = 0;

    perguntasDaPartida = embaralharPerguntas(perguntas);

    displayName.textContent = nomeJogador;
    scoreElement.textContent = pontuacao;

    mostrarTela("jogo");
    carregarPergunta();
}

// CARREGA A PERGUNTA ATUAL
function carregarPergunta() {
    pararCronometro();

    if (indiceAtual >= perguntasDaPartida.length) {
        mostrarResultado();
        return;
    }

    respondida = false;

    const pergunta = perguntasDaPartida[indiceAtual];
    const numero = indiceAtual + 1;
    const total = perguntasDaPartida.length;
    const progresso = (numero / total) * 100;

    questionCounter.textContent =
        `PERGUNTA ${numero} DE ${total}`;

    questionNumber.textContent =
        `QUESTÃO ${String(numero).padStart(2, "0")}`;

    progressPercent.textContent =
        `${Math.round(progresso)}%`;

    progressBar.style.width = `${progresso}%`;

    categoryBadge.textContent = pergunta.categoria;
    questionText.textContent = pergunta.pergunta;

    feedback.textContent = "";
    feedback.className = "feedback";

    nextButton.hidden = true;

    timerBox.classList.remove("urgent");

    // CRIA AS ALTERNATIVAS
    answersContainer.replaceChildren();

    pergunta.alternativas.forEach((alternativa, indice) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "answer-btn";

        const letra = document.createElement("span");
        letra.className = "answer-letter";
        letra.textContent = String.fromCharCode(65 + indice);

        const texto = document.createElement("span");
        texto.className = "answer-text";
        texto.textContent = alternativa;

        botao.append(letra, texto);

        botao.addEventListener("click", () => {
            verificarResposta(indice, botao);
        });

        answersContainer.appendChild(botao);
    });

    iniciarCronometro();
}

// CRONÔMETRO
function iniciarCronometro() {
    pararCronometro();

    tempoRestante = TEMPO_POR_PERGUNTA;
    atualizarCronometro();

    intervalo = setInterval(() => {
        tempoRestante--;
        atualizarCronometro();

        if (tempoRestante <= 0) {
            pararCronometro();
            encerrarPorTempo();
        }
    }, 1000);
}

function atualizarCronometro() {
    timerElement.textContent = tempoRestante;

    if (tempoRestante <= 5) {
        timerBox.classList.add("urgent");
    } else {
        timerBox.classList.remove("urgent");
    }
}

function pararCronometro() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }
}

// BLOQUEIA AS ALTERNATIVAS APÓS A RESPOSTA
function bloquearAlternativas() {
    const botoes = answersContainer.querySelectorAll("button");

    botoes.forEach(botao => {
        botao.disabled = true;
    });
}

// VERIFICA SE A RESPOSTA ESTÁ CORRETA
function verificarResposta(indiceEscolhido, botaoEscolhido) {
    if (respondida) return;

    respondida = true;
    pararCronometro();
    bloquearAlternativas();

    const pergunta = perguntasDaPartida[indiceAtual];
    const botoes = answersContainer.querySelectorAll(".answer-btn");
    const acertou = indiceEscolhido === pergunta.correta;

    // DESTACA A ALTERNATIVA CORRETA
    botoes[pergunta.correta].classList.add("correct");

    if (acertou) {
        pontuacao += PONTOS_POR_ACERTO;
        acertos++;

        feedback.textContent =
            "✓ RESPOSTA CORRETA! +100 PONTOS";

        feedback.classList.add("success");
    } else {
        erros++;
        botaoEscolhido.classList.add("wrong");

        feedback.textContent =
            `✗ NÃO FOI DESSA VEZ! A resposta correta é: ` +
            pergunta.alternativas[pergunta.correta] + ".";

        feedback.classList.add("error");
    }

    scoreElement.textContent = pontuacao;
    prepararProximaPergunta();
}

// QUANDO O TEMPO ACABA
function encerrarPorTempo() {
    if (respondida) return;

    respondida = true;
    erros++;

    bloquearAlternativas();

    const pergunta = perguntasDaPartida[indiceAtual];
    const botoes = answersContainer.querySelectorAll(".answer-btn");

    botoes[pergunta.correta].classList.add("correct");

    feedback.textContent =
        `⏰ TEMPO ESGOTADO! Resposta correta: ` +
        pergunta.alternativas[pergunta.correta] + ".";

    feedback.classList.add("error");

    prepararProximaPergunta();
}

// PREPARA O BOTÃO PARA AVANÇAR
function prepararProximaPergunta() {
    if (indiceAtual === perguntasDaPartida.length - 1) {
        nextButton.textContent = "VER RESULTADO 🏆";
    } else {
        nextButton.textContent = "PRÓXIMA PERGUNTA →";
    }

    nextButton.hidden = false;
    nextButton.focus();
}

// AVANÇA UMA ÚNICA VEZ
function proximaPergunta() {
    if (!respondida) return;

    indiceAtual++;
    carregarPergunta();
}

// EXIBE O RESULTADO FINAL
function mostrarResultado() {
    pararCronometro();

    const total = perguntasDaPartida.length;
    const aproveitamento = Math.round((acertos / total) * 100);

    finalScore.textContent = pontuacao;
    correctCount.textContent = acertos;
    wrongCount.textContent = erros;
    accuracy.textContent = `${aproveitamento}%`;

    if (aproveitamento === 100) {
        resultIcon.textContent = "🏆";
        resultTitle.textContent = "LENDÁRIO!";
        resultMessage.textContent =
            `Incrível, ${nomeJogador}! Você acertou todas as perguntas. ` +
            "Você é uma verdadeira lenda dos anos 80 e 90!";
    } else if (aproveitamento >= 75) {
        resultIcon.textContent = "🥇";
        resultTitle.textContent = "MANDOU MUITO!";
        resultMessage.textContent =
            `Parabéns, ${nomeJogador}! Você conhece muito bem ` +
            "a cultura dos anos 80 e 90.";
    } else if (aproveitamento >= 50) {
        resultIcon.textContent = "🎮";
        resultTitle.textContent = "BOM JOGO!";
        resultMessage.textContent =
            `Boa, ${nomeJogador}! Você tem uma boa memória retrô. ` +
            "Que tal jogar novamente para melhorar sua pontuação?";
    } else {
        resultIcon.textContent = "🕹️";
        resultTitle.textContent = "CONTINUE JOGANDO!";
        resultMessage.textContent =
            `Não desista, ${nomeJogador}! Toda partida é uma oportunidade ` +
            "de descobrir mais sobre as décadas de 80 e 90.";
    }

    mostrarTela("resultado");
}

// VOLTA PARA O INÍCIO
function voltarInicio() {
    pararCronometro();
    playerName.value = "";
    mostrarTela("inicio");
}

// EVENTOS DOS BOTÕES
startButton.addEventListener("click", iniciarJogo);

playerName.addEventListener("keydown", evento => {
    if (evento.key === "Enter") {
        iniciarJogo();
    }
});

nextButton.addEventListener("click", proximaPergunta);

restartButton.addEventListener("click", iniciarJogo);

homeButton.addEventListener("click", voltarInicio);

// PREVINE PROBLEMAS AO SAIR DA PÁGINA
window.addEventListener("pagehide", pararCronometro);