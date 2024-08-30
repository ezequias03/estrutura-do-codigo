const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "É impossível diminuir a desigualdade econômica causada pela falta de desemprego?",
        alternativas: [
            {
                texto: "Uma possível solução seria o investimento para apoiar as micro empresas que são as que mais sofrem, por falta de incentivo nas crises.",
                afirmacao: "O investimento  nos microempreendedores  incentiva os comércio mesmo que seja microempresas com contratações pequenas mais em quantidade massiva contrataria muito seguindo o plano de oferta e demanda"
            },
            {
                texto: "Outra excelente alternativa é a ação de inclusão social Fortalecimento de políticas de acesso à saúde, moradia, saneamento básico e outros serviços públicos essenciais.",
                afirmacao: "a inclusão social pode dar a o cidadão jogo de cintura para lidar com a situação dificil, mais claro que por um certo tempo para evitar encostos que ficaram as mamas do governo"
            }
        ]
    },
    {
        enunciado: "o Brasil nao tem valorizado os profissionais, causando muitos desempregos, o que fazer sobre isso?",
        alternativas: [
            {
                texto: "se tivesse emprego haveria profissionais",
                afirmacao: "arrumando mais empregos paras os profissionais, ajudando o Brasil melhorar na economia"
            },
            {
                texto: "O Governo Federal gastou todo o dinheiro, levando os outros para as Olimpíadas em Paris França.",
                afirmacao: "O dinheiro que foi gasto para levar o povo para Olimpíadas poderia ter sido usado para abrir novas empresas gerando emprego para os profissionais."
            }
        ]
    },
    {
        enunciado: "Como podemos impulsionar o crescimento econômico no próximos  anos?",
        alternativas: [
            {
                texto: "investir em infraestrutura e inovação.",
                afirmacao: "por meio de fundos públicos e incentivos privados."
            },
            {
                texto: "Reduzir a carga tributária para empresas.",
                afirmacao: "por meio de reformas fiscais  que simplifiquem o sistema e promovam a competitividade."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
