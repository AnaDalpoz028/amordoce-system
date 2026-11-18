// ==========================================
// 1. BANCO DE DADOS (Catálogo de Produtos)
// Para trocar fotos: substitua o link em "imagem" pelo
// nome do seu arquivo (ex: "fotos/romantica.jpg")
// ==========================================
const configuracoes = {
    telefoneWhatsApp: "5544999062249",
    taxas: {
        montagemPersonalizada: 25.00
    }
};

const nomesCategorias = {
    cafe: "Café da Manhã",
    aniversario: "Aniversário",
    romantica: "Romântica",
    infantil: "Infantil",
    happyhour: "Happy Hour",
    natal: "Natal"
};

const catalogoCestasProntas = [
    {
        id: 1,
        nome: "Balde Heineken com aperitivo",
        categoria: "happyhour",
        precoBase: 155.00,
        descricao: "Balde Heineken com 4 long necks, Pringles, Ferrero Rocher, amendoim e petiscos.",
        imagem: "fotos/fotobeer1.png"
    },
    {
        id: 2,
        nome: "Balde Heineken com copo",
        categoria: "happyhour",
        precoBase: 125.00,
        descricao: "Balde Heineken com 2 long necks, 1 lata, copo, Pringles e salgadinho.",
        imagem: "fotos/fotobeer2.png"
    },
    {
        id: 3,
        nome: "Balde Heineken com coração",
        categoria: "happyhour",
        precoBase: 110.00,
        descricao: "Balde Heineken com 1 long neck, 1 lata, amendoim e coração de pelúcia.",
        imagem: "fotos/fotobeer3.png"
    },
    {
        id: 4,
        nome: "Balde Budweiser ",
        categoria: "happyhour",
        precoBase: 155.00,
        descricao: "Balde Budweiser com 4 long necks, Pringles, Ferrero Rocher, amendoim e petiscos.",
        imagem: "fotos/fotobeer4.png"
    },
    {
        id: 5,
        nome: "Cesta Especialidades Doces",
        categoria: "romantica",
        precoBase: 190.00,
        descricao: "Cesta decorada com flor contendo caixa Nestlé Especialidades, pote de Nutella, caixa de Ferrero Rocher, caixas de Bis e bombons Ouro Branco.",
        imagem: "fotos/namorados1.png"
    },
    {
        id: 6,
        nome: "Cesta Doce Desejo",
        categoria: "romantica",
        precoBase: 145.00,
        descricao: "Cesta contendo batata Pringles Original, barras Nestlé (Galak, Classic, Chokito, Suflair, Prestígio Branco), bombons Baton e diversos pacotes de balas Fini (Tubes, Amoras e outros).",
        imagem: "fotos/namorados2.png"
    },
    {
        id: 7,
        nome: "Cesta Alegria em Dobro",
        categoria: "romatica",
        precoBase: 125.00,
        descricao: "Cesta recheada com Nescau prontinho, mini bolo Bauducco, Fini Marshmallows, M&M's, barras Trento, Bis Xtra, caixas de Bis, pastilhas Mentos, bombons Sonho de Valsa e Ouro Branco.",
        imagem: "fotos/namorados3.png"
    },
    {
        id: 8,
        nome: "Cesta Laços de Amor",
        categoria: "romantica",
        precoBase: 185.00,
        descricao: "Cesta com ursinho de pelúcia com coração, batata Lay's, barras de chocolate Diamante Negro e Lacta ao Leite, caixas de Bis e variados pacotes de balas Fini.",
        imagem: "fotos/namorados4.png"
    },
    {
        id: 9,
        nome: "Cesta Romântica Amandita",
        categoria: "romantica",
        precoBase: 150.00,
        descricao: "Cesta com coração de pelúcia 'Eu Te Amo', caixa de waffer Amandita, KitKat, barras Galak e Nestlé Classic, chocolates Prestígio e bombons Serenata de Amor.",
        imagem: "fotos/namorados5.png"
    },
    {
        id: 10,
        nome: "Cesta Panettone",
        categoria: "natal",
        precoBase: 180.00,
        descricao: "Cesta clássica contendo vinho tinto Chilano Cabernet Sauvignon, Panettone Bauducco e uma caixa de bombons Ferrero Rocher.",
        imagem: "fotos/natal1.png"
    },
    {
        id: 11,
        nome: "Cesta Papai Noel",
        categoria: "natal",
        precoBase: 125.00,
        descricao: "Cesta recheada com suco de uva integral Casa Madeira, torradas Triunfo, mini Panettone Bauducco, chocolates Planalto e canudos de wafer Look.",
        imagem: "fotos/natal2.png"
    },
    {
        id: 12,
        nome: "Cesta Coração",
        categoria: "natal",
        precoBase: 130.00,
        descricao: "Cesta em cachepô de madeira formato coração com caneca 'Merry Christmas', Pão de Mel Bauducco, barra Ouro Branco e outras barras de chocolate",
        imagem: "fotos/natal3.png"
    },
    {
        id: 13,
        nome: "Bandeja Natalina",
        categoria: "natal",
        precoBase: 130.00,
        descricao: "Bandeja de MDF decorada contendo batata Pringles Original, barras de chocolate Nestlé Classic e Prestígio, chocolates Trento e biscoitos",
        imagem: "fotos/natal4.png"
    },
    {
        id: 14,
        nome: "Cesta festividades",
        categoria: "natal",
        precoBase: 145.00,
        descricao: "Cesta com Panettone Festtone de frutas, refrigerante Coca-Cola em lata, biscoito Oreo, barra Diamante Negro e bombons Ouro Branco.",
        imagem: "fotos/natal5.png"
    },
    {
        id: 15,
        nome: "Cesta comemoração",
        categoria: "natal",
        precoBase: 210.00,
        descricao: "Cesta premium com mini Chocottone Bauducco, caixa de wafer Amandita, caixa Nestlé Especialidades, caneca natalina, barra Lacta e cookies.",
        imagem: "fotos/natal6.png"
    },
    {
        id: 16,
        nome: "Cesta felicidade",
        categoria: "natal",
        precoBase: 135.00,
descricao: "Cesta com plaquinha de MDF 'Feliz Natal', mini Chocottone Bauducco, M&M's, barra Nutella B-ready, cookies e chocolates variados.",
        imagem: "fotos/natal7.png"
    },
    {
        id: 17,
        nome: "Cesta harmonia",
        categoria: "natal",
        precoBase: 125.00,
        descricao: "Cesta contendo mini Chocottone Bauducco, cookie e bolinho duplo chocolate Bauducco, uma cerveja Budweiser em lata e bombons Ouro Branco.",
        imagem: "fotos/natal8.png"
    },
    {
        id: 18,
        nome: "Cesta celebração",
        categoria: "natal",
        precoBase: 210.00,
        descricao: "Cesta elegante com vinho Concha y Toro Reservado, Chocottone Bauducco, caixa de Ferrero Rocher, barra Talento Artesão e mix de aperitivos.",
        imagem: "fotos/natal9.png"
    },
    {
        id: 19,
        nome: "Cesta nobreza",
        categoria: "natal",
        precoBase: 200.00,
        descricao: "Cesta farta com caixa Amandita, caixa de bombons Lacta Favoritos, KitKat, wafer Roll, barras de chocolate Lacta e diversos bombons soltos.",
        imagem: "fotos/natal10.png"
    },
    {
        id: 20,
        nome: "Cesta Laços de Amor",
        categoria: "natal",
        precoBase: 185.00,
        descricao: "Cesta com ursinho de pelúcia com coração, batata Lay's, barras de chocolate Diamante Negro e Lacta ao Leite, caixas de Bis e variados pacotes de balas Fini.",
        imagem: "fotos/natal1.png"
    },
];

const recipientes = [
    { id: 'cesta-m', nome: "Cesta de Vime Média", capacidade: 10, precoExtra: 0.00, icone: "🧺" },
    { id: 'balde', nome: "Balde de Alumínio", capacidade: 6, precoExtra: 15.00, icone: "🪣" },
    { id: 'caixa-mdf', nome: "Caixa MDF Decorada", capacidade: 8, precoExtra: 20.00, icone: "🎁" }
];

const itensAvulsos = [
    { id: 'caneca', nome: "Caneca Personalizada", preco: 35.00, espaco: 2, icone: "☕" },
    { id: 'nutella', nome: "Nutella 140g", preco: 18.00, espaco: 1, icone: "🍫" },
    { id: 'pao-mel', nome: "Pão de Mel Artesanal", preco: 9.00, espaco: 1, icone: "🍯" },
    { id: 'cerveja', nome: "Cerveja Long Neck", preco: 12.00, espaco: 1, icone: "🍺" },
    { id: 'pelucia', nome: "Urso de Pelúcia P", preco: 45.00, espaco: 3, icone: "🧸" }
];

const imagemReserva = "https://placehold.co/600x600/F6CFD3/8A1525?text=Amor+Doce";

function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

// ==========================================
// 2. FUNÇÕES DE RENDERIZAÇÃO
// ==========================================
window.onload = function () {
    renderizarCestasProntas();
    renderizarRecipientes();
    renderizarItensAvulsos();
    atualizarMedidor();
    ativarAnimacoes();
};

function renderizarCestasProntas(categoriaSelecionada = 'todas') {
    const vitrine = document.getElementById('vitrine-cestas');

    const cestasFiltradas = categoriaSelecionada === 'todas'
        ? catalogoCestasProntas
        : catalogoCestasProntas.filter(cesta => cesta.categoria === categoriaSelecionada);

    if (cestasFiltradas.length === 0) {
        vitrine.innerHTML = '<p class="vazio">Novas cestas desta categoria chegarão em breve!</p>';
        return;
    }

    vitrine.innerHTML = cestasFiltradas.map(cesta => `
        <article class="card-elegante reveal">
            <div class="card-foto">
                <img src="${cesta.imagem}" alt="${cesta.nome}" loading="lazy"
                     onerror="this.onerror=null;this.src='${imagemReserva}'">
                <span class="card-tag">${nomesCategorias[cesta.categoria] || ''}</span>
            </div>
            <div class="card-corpo">
                <h3>${cesta.nome}</h3>
                <p>${cesta.descricao}</p>
                <div class="card-footer">
                    <strong>${formatarMoeda(cesta.precoBase)}</strong>
                    <button class="btn-comprar" onclick="pedirCestaPronta('${cesta.nome}', ${cesta.precoBase})">Comprar +</button>
                </div>
            </div>
        </article>
    `).join('');

    ativarAnimacoes();
}

function filtrarCategoria(categoria, botaoClicado) {
    document.querySelectorAll('.filtros-categoria button')
        .forEach(b => b.classList.remove('filtro-ativo'));
    botaoClicado.classList.add('filtro-ativo');
    renderizarCestasProntas(categoria);
}

function renderizarRecipientes() {
    const div = document.getElementById('opcoes-recipiente');

    div.innerHTML = recipientes.map(rec => {
        const textoPreco = rec.precoExtra > 0 ? `+ ${formatarMoeda(rec.precoExtra)}` : 'Incluso';
        return `
            <label class="opcao">
                <input type="radio" name="escolha-recipiente" value="${rec.precoExtra}"
                       data-capacidade="${rec.capacidade}" data-nome="${rec.nome}"
                       onchange="trocarRecipiente()">
                <span class="opcao-esq">
                    <span class="opcao-icone">${rec.icone}</span>
                    <span>
                        <span class="opcao-nome">${rec.nome}</span>
                        <span class="opcao-info">Cabe até ${rec.capacidade} espaços</span>
                    </span>
                </span>
                <span class="opcao-dir">
                    <span class="opcao-preco">${textoPreco}</span>
                    <span class="opcao-check">✓</span>
                </span>
            </label>
        `;
    }).join('');
}

function renderizarItensAvulsos() {
    const div = document.getElementById('itens-avulsos');

    div.innerHTML = itensAvulsos.map(item => `
        <label class="opcao">
            <input type="checkbox" class="item-extra-check" value="${item.preco}"
                   data-espaco="${item.espaco}" data-nome="${item.nome}"
                   onchange="validarEspaco(this)">
            <span class="opcao-esq">
                <span class="opcao-icone">${item.icone}</span>
                <span>
                    <span class="opcao-nome">${item.nome}</span>
                    <span class="opcao-info">Ocupa ${item.espaco} ${item.espaco > 1 ? 'espaços' : 'espaço'}</span>
                </span>
            </span>
            <span class="opcao-dir">
                <span class="opcao-preco">${formatarMoeda(item.preco)}</span>
                <span class="opcao-check">✓</span>
            </span>
        </label>
    `).join('');
}

// ==========================================
// 2.5 REGRAS DE NEGÓCIO (LIMITES FÍSICOS)
// ==========================================
function trocarRecipiente() {
    // Ao trocar a base, desmarca os itens por segurança e recalcula
    document.querySelectorAll('.item-extra-check').forEach(box => box.checked = false);
    calcularTotal();
    atualizarMedidor();
}

function validarEspaco(checkboxClicado) {
    const recipienteEscolhido = document.querySelector('input[name="escolha-recipiente"]:checked');

    if (!recipienteEscolhido) {
        alert("Por favor, escolha a base no Passo 1 antes de adicionar os itens!");
        checkboxClicado.checked = false;
        return;
    }

    const capacidadeMaxima = parseInt(recipienteEscolhido.getAttribute('data-capacidade'));
    let espacoOcupado = 0;
    document.querySelectorAll('.item-extra-check:checked').forEach(item => {
        espacoOcupado += parseInt(item.getAttribute('data-espaco'));
    });

    if (espacoOcupado > capacidadeMaxima) {
        alert(`Limite atingido! A base escolhida comporta apenas ${capacidadeMaxima} espaços. Você já preencheu tudo!`);
        checkboxClicado.checked = false;
    }

    calcularTotal();
    atualizarMedidor();
}

function atualizarMedidor() {
    const valor = document.getElementById('medidor-valor');
    const barra = document.getElementById('medidor-preench');
    if (!valor || !barra) return;

    const recipiente = document.querySelector('input[name="escolha-recipiente"]:checked');
    if (!recipiente) {
        valor.innerText = "escolha a base primeiro";
        barra.style.width = "0%";
        return;
    }

    const capacidade = parseInt(recipiente.getAttribute('data-capacidade'));
    let ocupado = 0;
    document.querySelectorAll('.item-extra-check:checked').forEach(item => {
        ocupado += parseInt(item.getAttribute('data-espaco'));
    });

    valor.innerText = `${ocupado} de ${capacidade} espaços`;
    barra.style.width = `${Math.min(100, (ocupado / capacidade) * 100)}%`;
}

// ==========================================
// 3. NAVEGAÇÃO E ANIMAÇÕES
// ==========================================
function mudarAba(abaDestino) {
    const secaoProntas = document.getElementById('secao-prontas');
    const secaoMontar = document.getElementById('secao-montar');
    const botoes = document.querySelectorAll('#menu-categorias button');
    const barra = document.getElementById('barra-inferior');

    botoes.forEach(botao => botao.classList.remove('aba-ativa'));

    if (abaDestino === 'prontas') {
        secaoProntas.style.display = 'block';
        secaoMontar.style.display = 'none';
        botoes[0].classList.add('aba-ativa');
        barra.classList.add('barra-oculta');
        document.body.classList.remove('com-barra');
    } else if (abaDestino === 'montar') {
        secaoProntas.style.display = 'none';
        secaoMontar.style.display = 'block';
        botoes[1].classList.add('aba-ativa');
        barra.classList.remove('barra-oculta');
        document.body.classList.add('com-barra');
    }

    calcularTotal();
    ativarAnimacoes();
}

// Efeito de aparecer suavemente ao rolar a página
function ativarAnimacoes() {
    const elementos = document.querySelectorAll('.reveal:not(.visivel)');

    if (!('IntersectionObserver' in window)) {
        elementos.forEach(el => el.classList.add('visivel'));
        return;
    }

    const observador = new IntersectionObserver((entradas, obs) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                obs.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.12 });

    elementos.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 80}ms`;
        observador.observe(el);
    });
}

// ==========================================
// 4. A CALCULADORA INTELIGENTE
// ==========================================
function calcularTotal() {
    let total = 0;
    const secaoMontar = document.getElementById('secao-montar');

    if (secaoMontar.style.display === 'block') {
        total += configuracoes.taxas.montagemPersonalizada;

        const recipienteEscolhido = document.querySelector('input[name="escolha-recipiente"]:checked');
        if (recipienteEscolhido) {
            total += parseFloat(recipienteEscolhido.value);
        }

        document.querySelectorAll('.item-extra-check:checked').forEach(item => {
            total += parseFloat(item.value);
        });
    }

    document.getElementById('valor-total').innerText = formatarMoeda(total);
}

// ==========================================
// 5. INTEGRAÇÃO COM WHATSAPP
// ==========================================
function pedirCestaPronta(nome, preco) {
    const telefone = configuracoes.telefoneWhatsApp;
    let texto = `Olá! Gostaria de encomendar a cesta pronta:\n\n`;
    texto += `🎁 *${nome}*\n`;
    texto += `💰 *Valor:* ${formatarMoeda(preco)}`;

    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`, '_blank');
}

function enviarPedidoPersonalizado() {
    const secaoMontar = document.getElementById('secao-montar');

    if (secaoMontar.style.display === 'none') {
        alert("Para comprar uma cesta pronta, clique no botão 'Comprar +' no cartão dela!");
        return;
    }

    const recipiente = document.querySelector('input[name="escolha-recipiente"]:checked');
    if (!recipiente) {
        alert("Por favor, escolha a base no Passo 1!");
        return;
    }

    const itensMarcados = document.querySelectorAll('.item-extra-check:checked');
    if (itensMarcados.length === 0) {
        alert("Por favor, escolha pelo menos um item no Passo 2!");
        return;
    }

    const nomeRecipiente = recipiente.getAttribute('data-nome');
    const listaItens = [];
    itensMarcados.forEach(item => {
        listaItens.push(`- ${item.getAttribute('data-nome')}`);
    });

    const cartinha = document.querySelector('textarea').value;
    const total = document.getElementById('valor-total').innerText;
    const telefone = configuracoes.telefoneWhatsApp;

    let texto = `Olá! Montei uma Cesta Personalizada no site:\n\n`;
    texto += `🧺 *Recipiente:* ${nomeRecipiente}\n`;
    texto += `🍫 *Itens:*\n${listaItens.join('\n')}\n\n`;

    if (cartinha.trim() !== "") {
        texto += `💌 *Cartinha:* "${cartinha}"\n\n`;
    }

    texto += `💰 *Total da Encomenda:* ${total}\n`;
    texto += `*(Inclui taxa de montagem de ${formatarMoeda(configuracoes.taxas.montagemPersonalizada)})*`;

    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`, '_blank');
}
