// ==========================================
// 1. BANCO DE DADOS (Catálogo de Produtos)
// Para trocar fotos: substitua o link em "imagem" pelo
// nome do seu arquivo (ex: "fotos/romantica.jpg")
// ==========================================
const configuracoes = {
    telefoneWhatsApp: "5544999062249",
    taxas: {
        montagemPersonalizada: 60.00
    }
};

const nomesCategorias = {
    cafe: "Café da Manhã",
    aniversario: "Aniversário",
    romantica: "Romântica",
    infantil: "Infantil",
    happyhour: "Happy Hour",
    natal: "Natal",
    diadospais: "Dia dos Pais"
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
        categoria: "romantica",
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
        nome: "Cesta Snack Time",
        categoria: "romantica",
        precoBase: 175.00,
        descricao: "Cesta em caixa preta com laço contendo batata Pringles Original, salgadinho Doritos Queijo Nacho, pote de Nutella, chocolates KitKat e Snickers.",
        imagem: "fotos/namorados6.png"
    },
    {
        id: 21,
        nome: "Cesta Mix de Sabores",
        categoria: "romantica",
        precoBase: 175.00,
        descricao: "Cesta em caixa preta com laço composta por salgadinho Doritos Queijo Nacho, batata Pringles Original, refrigerante Coca-Cola em lata, barra Galak e um pote de Nutella.",
        imagem: "fotos/namorados7.png"
    },
    {
        id: 22,
        nome: "Cesta Ouro e Chocolate",
        categoria: "romantica",
        precoBase: 180.00,
        descricao: "Cesta decorada com rosa vermelha contendo caixa de Ferrero Rocher, caixas de Bis, barras de chocolate Crunch e Lacta, chocolates Trento e diversos bombons Ouro Branco",
        imagem: "fotos/namorados8.png"
    },
    {
        id: 23,
        nome: "Balde Petisco Heineken",
        categoria: "diadospais",
        precoBase: 150.00,
        descricao: "Balde da marca Heineken recheado com 4 cervejas Heineken long neck, salgadinho Torcida Pimenta Mexicana, amendoim Pettiz, biscoitos salgados Elma Chips e chocolates Montevergine e Nestlé.",
        imagem: "fotos/diadospais1.png"
    },
    {
        id: 24,
        nome: "Balde Budweiser & KitKat",
        categoria: "diadospais",
        precoBase: 120.00,
        descricao: "Balde da marca Budweiser acompanhado de 3 cervejas Budweiser long neck, petiscos e chocolates KitKat Nestlé.",
        imagem: "fotos/diadospais2.png"
    },
    {
        id: 25,
        nome: "Cesta Doce & Nutella",
        categoria: "diadospais",
        precoBase: 150.00,
        descricao: "Cesta temática com pote de Nutella, bombons Ferrero Rocher e chocolates Talento.",
        imagem: "fotos/diadospais3.png"
    },
    {
        id: 26,
        nome: "Cesta Clássicos & Cookies",
        categoria: "diadospais",
        precoBase: 175.00,
        descricao: "Cesta recheada com cookies Bauducco, chocolates Talento, barras Prestígio, chocolates Lacta e petiscos.",
        imagem: "fotos/diadospais4.png"
    },
    {
        id: 27,
        nome: "Balde Premium Heineken",
        categoria: "diadospais",
        precoBase: 180.00,
        descricao: "Balde Heineken completo contendo cervejas Heineken long neck, batata Pringles Original e petiscos defumados.",
        imagem: "fotos/diadospais5.png"
    },
    {
        id: 28,
        nome: "Cesta Chocolates Variados",
        categoria: "diadospais",
        precoBase: 180.00,
        descricao: "Cesta com pote de Nutella, chocolates Montevergine de avelã, barras KitKat e chocolates Nestlé.",
        imagem: "fotos/diadospais6.png"
    },
    {
        id: 29,
        nome: "Cesta Especial Avelã & Nutella",
        categoria: "diadospais",
        precoBase: 170.00,
        descricao: "Cesta com ursinho de pelúcia com coração, batata Lay's, barras de chocolate Diamante Negro e Lacta ao Leite, caixas de Bis e variados pacotes de balas Fini.",
        imagem: "fotos/diadospais7.png"
    },
    {
        id: 30,
        nome: "Cesta Vinho & Ferrero",
        categoria: "diadospais",
        precoBase: 200.00,
        descricao: "Cesta sofisticada contendo garrafa de vinho tinto Bella Vista, caixa de bombons Ferrero Rocher e palitinhos salgados caseiros Marquez.",
        imagem: "fotos/diadospais8.png"
    },
    {
        id: 31,
        nome: "Balde Budweiser & Ouro Branco",
        categoria: "diadospais",
        precoBase: 100.00,
        descricao: "Balde Budweiser contendo cervejas Budweiser long neck e diversos bombons Ouro Branco Lacta.",
        imagem: "fotos/diadospais9.png"
    },
    {
        id: 32,
        nome: "Cesta Super Mix de Guloseimas",
        categoria: "diadospais",
        precoBase: 180.00,
        descricao: "Cesta decorada com placa 'Eu te Amo' contendo batata Ruffles, caixas de Bis Lacta, barras de chocolate ao leite Lacta, KitKat Morango, Chokito, Stikadinho e bombons Sonho de Valsa.",
        imagem: "fotos/diadospais10.png"
    },
    {
        id: 33,
        nome: "Kit Torcedor (Times)",
        categoria: "diadospais",
        precoBase: 115.00,
        descricao: "Kit personalizado com o escudo do time (São Paulo, Palmeiras, Corinthians, entre outros), contendo caneca ou copo do clube, refrigerantes (Coca-Cola e Guaraná Antarctica Zero), amendoim Pettiz, chocolate Snickers e barra Talento.",
        imagem: "fotos/diadospais11.png"
    },
    {
        id: 34,
        nome: "Cesta Despertar",
        categoria: "cafe",
        precoBase: 165.00,
        descricao: "Cesta de vime decorada e balão metalizado de coração 'Parabéns', acompanhada de vasinho de flor kalanchoe amarela, pães frescos embalados, bandeja de frios (queijo e presunto fatiados), bebida láctea Alpino, suco de uva em caixinha, caixas de Bis, biscoitos e frutas frescas (maçã e uvas roxas).",
        imagem: "fotos/1.png"
    },
    {
        id: 35,
        nome: "Cesta Bom Dia Meu Amor",
        categoria: "cafe",
        precoBase: 160.00,
        descricao: "Cesta decorada com laços e balão metalizado de coração 'Eu te amo', composta por pães frescos, biscoitos caseiros, bandeja de frios, pote de creme doce, suco de laranja, bebida láctea Friminho de morango, achocolatado Nescau, chocolates e frutas.",
        imagem: "fotos/2.png"
    },
    {
        id: 36,
        nome: "Cesta Encanto de Orquídea",
        categoria: "cafe",
        precoBase: 200.00,
        descricao: "Cesta decorada com laços azul e dourado e uma orquídea branca natural, contendo pães doces trançados, bandeja de frios (queijo e presunto), caixa de brigadeiros, suco de uva Maguary, bebida láctea, biscoitos e frutas frescas",
        imagem: "fotos/3.png"
    },
    {
        id: 37,
        nome: "Cesta Doce Manhã",
        categoria: "cafe",
        precoBase: 140.00,
        descricao: "Cesta decorada com papel de seda, laço e vasinho de flores naturais, recheada com bolo caseiro de chocolate com cobertura, bandeja de frios (queijo e presunto), suco de laranja natural e bolinho.",
        imagem: "fotos/4.png"
    },
    {
        id: 38,
        nome: "Cesta Café Completo & Guloseimas",
        categoria: "cafe",
        precoBase: 180.00,
        descricao: "Cesta decorada com laço contendo caneca com sachê de cappuccino, pão doce trançado, pão de forma, bandeja de frios (queijo e presunto), pote de Nutella, achocolatado, suco de uva, bolinho, caixa de bombons, barra de chocolate e salgadinho.",
        imagem: "fotos/5.png"
    },
    {
        id: 39,
        nome: "Cesta Manhã Florida",
        categoria: "cafe",
        precoBase: 145.00,
        descricao: "Cesta decorada com laço e vasinho de flor, composta por pães frescos, bolo caseiro, bandeja de frios, suco de laranja, achocolatado, suco em caixinha e frutas frescas.",
        imagem: "fotos/6.png"
    },
    {
        id: 40,
        nome: "Cesta Carinho Matinal",
        categoria: "cafe",
        precoBase: 165.00,
        descricao: "Cesta de vime decorada acompanhada de ursinho de pelúcia, caneca com sachê de cappuccino, pães frescos, fatias de bolo caseiro, doces artesanais embalados e uma fruta.",
        imagem: "fotos/7.png"
    },
    {
        id: 41,
        nome: "Cesta Bom Dia",
        categoria: "cafe",
        precoBase: 165.00,
        descricao: "Cesta decorada com laço e cachorrinho de pelúcia, contendo pães frescos, requeijão cremoso, bebida láctea, suco de laranja, chocolates e frutas frescas.",
        imagem: "fotos/8.png"
    },
    {
        id: 42,
        nome: "Bandeja Café da Manhã Duplo",
        categoria: "cafe",
        precoBase: 190.00,
        descricao: "Bandeja de madeira contendo sucos de laranja, iogurtes gregos, biscoitos artesanais embalados, rocambole recheado, doce cremoso no pote com granulado, pão de mel embalado, barras de chocolate, bombons e frutas frescas",
        imagem: "fotos/9.png"
    },
    {
        id: 43,
        nome: "Festa na caixa",
        categoria: "aniversario",
        precoBase: 190.00,
        descricao: "Caixa decorada com laços, balão metalizado em formato de estrela personalizado e placa 'Parabéns', contendo mini bolo de chocolate com granulado e vela, brigadeiros tradicionais, bombons, salgadinhos variados, biscoitos recheados e refrigerante em lata.",
        imagem: "fotos/aniversario1.png"
    },
    {
        id: 44,
        nome: "Festa na Caixa Feliz Aniversário",
        categoria: "aniversario",
        precoBase: 150.00,
        descricao: "Caixa decorada contendo mini bolo confeitado com cobertura cremosa, morangos frescos e topo temático 'Feliz Aniversário!', salgadinhos fritos variados, docinhos (brigadeiros e beijinhos) e refrigerante em lata.",
        imagem: "fotos/aniversario2.png"
    },
    
    
];

const recipientes = [
    { id: 'cesta-p', nome: "Cesta de Vime Pequena", capacidade: 12, precoExtra: 13.00, icone: "🧺" },
    { id: 'cesta-m', nome: "Cesta de Vime Média", capacidade: 18, precoExtra: 15.00, icone: "🧺" },
    { id: 'cesta-g', nome: "Cesta de Vime Grande", capacidade: 26, precoExtra: 17.00, icone: "🧺" },
    { id: 'balde', nome: "Balde de Cerveja", capacidade: 20, precoExtra: 30.00, icone: "🍿​" },
    { id: 'bandeja-m', nome: "Bandeja MDF Média", capacidade: 15, precoExtra: 20.00, icone: "📥" },
    { id: 'bandeja-g', nome: "Bandeja MDF Grande", capacidade: 22, precoExtra: 25.00, icone: "📥" }
];

const itensAvulsos = [
    { id: 'cervejabud', nome: "Cerveja Budweiser Long Neck", preco: 7.00, espaco: 3, icone: "🍺" },
    { id: 'cervejaheineken', nome: "Cerveja Heineken Long Neck", preco: 7.00, espaco: 3, icone: "🍺" },
    { id: 'cervejalata', nome: "Cerveja Lata (Qualquer Marca)", preco: 5.00, espaco: 2, icone: "🍺" },
    { id: 'refrilata', nome: "Refrigerante Lata (Qualquer Marca)", preco: 4.00, espaco: 2, icone: "🥤" },
    { id: 'vinho', nome: "Vinho marca 'Reservado'", preco: 40.00, espaco: 5, icone: "🍷" },
    { id: 'espumante', nome: "Espumante marca 'Del Sole'", preco: 25.00, espaco: 5, icone: "🍾" },
    { id: 'amendoim', nome: "Amendoim 40g", preco: 5.00, espaco: 1, icone: "🥜" },
    { id: 'torcida', nome: "Torcida 60g", preco: 5.00, espaco: 2, icone: "🥨" },
    { id: 'batatapringles', nome: "Batata Pringles", preco: 13.00, espaco: 3, icone: "🥔" },
    { id: 'salgadinho', nome: "Salgado Elma Chips Médio", preco: 15.00, espaco: 3, icone: "🧂" },
    { id: 'bandejaamendoim', nome: "Bandeja de Amendoim Sortidos 240g", preco: 30.00, espaco: 3, icone: "🥜" },
    { id: 'ferrerorocher3', nome: "Ferrero Rocher (3 unid)", preco: 13.00, espaco: 2, icone: "🍫" },
    { id: 'ferreorocher8', nome: "Ferrero Rocher (8 unid)", preco: 35.00, espaco: 3, icone: "🍫" },
    { id: 'nutella', nome: "Nutella 140g", preco: 15.00, espaco: 2, icone: "🍫" },
    { id: 'caixabmbom', nome: "Caixa de Bombom", preco: 17.00, espaco: 4, icone: "🍬" },
    { id: 'caixabis', nome: "Caixa de Bis", preco: 8.00, espaco: 2, icone: "🍫" },
    { id: 'kitkat', nome: "Kit-Kat", preco: 5.00, espaco: 1, icone: "🍫" },
    { id: 'canudo', nome: "Canudo de Chocolate", preco: 4.00, espaco: 1, icone: "🍫" },
    { id: 'mm40', nome: "M&M 40g", preco: 6.00, espaco: 1, icone: "🍫" },
    { id: 'mm132', nome: "M&M 132g", preco: 15.00, espaco: 2, icone: "🍫" },
    { id: 'balafini', nome: "Bala Fini Tubes 15g", preco: 3.00, espaco: 1, icone: "🍬" },
    { id: 'barrachocolate', nome: "Barra de Chocolate 80g (Qualquer marca)", preco: 10.00, espaco: 2, icone: "🍫" },
    { id: 'copocerveja', nome: "Copo de Cerveja (Vidro)", preco: 15.00, espaco: 3, icone: "🍺" },
    { id: 'tacavinho', nome: "Taça de Vinho (Vidro)", preco: 15.00, espaco: 3, icone: "🍷" },
    { id: 'caneca', nome: "Caneca", preco: 20.00, espaco: 3, icone: "☕" },
    { id: 'coracaopelucia', nome: "Coração de Pelúcia", preco: 25.00, espaco: 4, icone: "♥️" },
    { id: 'pelucia', nome: "Urso de Pelúcia P", preco: 35.00, espaco: 4, icone: "🧸" },
    { id: 'vasoflor', nome: "Vaso de Flor Kalanchoe", preco: 15.00, espaco: 4, icone: "🌼" },
    { id: 'luminariaflor', nome: "Luminária de Cúpula de Flor", preco: 40.00, espaco: 4, icone: "🥀" }
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
        const recipienteEscolhido = document.querySelector('input[name="escolha-recipiente"]:checked');
        
        if (recipienteEscolhido) {
            total += configuracoes.taxas.montagemPersonalizada;
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
    texto += ` *Recipiente:* ${nomeRecipiente}\n`;
    texto += ` *Itens:*\n${listaItens.join('\n')}\n\n`;

    if (cartinha.trim() !== "") {
        texto += ` *Cartinha:* "${cartinha}"\n\n`;
    }

    texto += ` *Total da Encomenda:* ${total}\n`;
    texto += `*(Valor final já inclui taxa de serviço, montagem e decoração)*`;

    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`, '_blank');
}
