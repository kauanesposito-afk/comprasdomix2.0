// DADOS DOS PRODUTOS (Extraídos automaticamente e filtrados por SKUs base)
const skusData = [
    { id: "128006", name: "Mule Feminino Salto Taça Bico Fino Elegante", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "116060", name: "Tamanco Feminino em Vinil Salto Baixo Bico Quadrado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "179004", name: "Bota Feminina Cano Curto Bico Fino Salto Grosso Napa Madri", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "116059", name: "Tamanco de Dedo Domidona Bico Quadrado Salto Fino", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "237003", name: "Bota Cano Curto Salto Fino Baixo Kitten Heel Metalizado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "169101", name: "Tênis Infantil Menina Fashion Brilho Metalizado Casual", sizes: [28,29,30,31,32,33,34,35,36], image: "" },
    { id: "116045", name: "Sandália Feminina Elegante Tira Única e Fechamento no Tornozelo", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "218010", name: "Coturno Feminino Cano Curto Solado Tratorado Zíper", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "118017", name: "Sapatilha Feminina Slingback Laço Com Aplique Metalizado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "257006", name: "Rasteirinha Slingback Flat Pedrarias Brilho Bico Quadrado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "257007", name: "Sandália Feminina Rasteira Pedrarias Tira No Tornozelo", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "116058", name: "Sandália Feminina Salto Alto Grosso Cromado Tiras Com Tachas", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "116057", name: "Tamanco de Dedo Domidona Tiras Finas de Strass Salto Médio", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "257003", name: "Rasteira Gladiadora Tiras Finas Com Tacha Metálicos", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "257004", name: "Rasteirinha Flat De Dedo Tiras Strass Plana Bico Quadrado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "257001", name: "Rasteira Feminina Slide Tira Larga Bico Quadrado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "257002", name: "Rasteirinha Flat De Dedo Laço Metálico Plana Bico Quadrado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "195005", name: "Sandália Salto Alto Grosso Tiras Finas Com ABS Metalizado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "195006", name: "Sandália Salto Bloco Tiras Cruzadas Com Fivela Bico Quadrado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "147015", name: "Sandália Salto Alto Bloco Bico Quadrado Com Laço ABS Metalizado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "147016", name: "Sandália Feminina Animal Print Salto Bloco Tira Única Com Fivela", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "239005", name: "Tênis Domidona Feminino Street Urbano Cano Baixo Sola Alta", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "116055", name: "Sandália Feminina Salto Bloco Dourado Bico Quadrado Tira Com Fivela", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "116056", name: "Tamanco Verniz Molhado Salto Dourado Bico Quadrado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "116054", name: "Sandália Feminina Salto Alto Taça Dourado Tira Fina Com Strass", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "118021", name: "Sapatilha Feminina Camurça Animal Print Vaca Bico Fino", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "247001", name: "Sandália Feminina Anabela Com Tachas Salto Plataforma Madeira", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "248001", name: "Sandália Feminina Salto Grosso Bloco Madeira Tiras Com Tachas", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "185003", name: "Tênis Feminino Domidona Estilo Streetwear Cano Baixo Casual", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "118018", name: "Sapatilha Verniz Bico Fino Tiras Duplas Fivela Oval Estilo Boho", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "118019", name: "Sapatilha Feminina Bico Fino Laço Com ABS Oval Metalizado", sizes: [34,35,36,37,38,39,40], image: "" },
    { id: "118020", name: "Sapatilha Slingback Fivela Bico Fino Laço Delicado", sizes: [34,35,36,37,38,39,40], image: "" }
];

// Estado Principal
const state = {
    inputs: {},
    currentCategory: 'all',
    searchTerm: ''
};

// Descobrir Categorias Dinamicamente
const categories = ['all'];
skusData.forEach(sku => {
    const nomeLower = sku.name.toLowerCase();
    let cat = 'Outros';
    if (nomeLower.includes('sapatilha')) cat = 'Sapatilhas';
    else if (nomeLower.includes('sandália')) cat = 'Sandálias';
    else if (nomeLower.includes('scarpin')) cat = 'Scarpins';
    else if (nomeLower.includes('tênis')) cat = 'Tênis';
    else if (nomeLower.includes('bota') || nomeLower.includes('coturno')) cat = 'Botas';
    else if (nomeLower.includes('tamanco') || nomeLower.includes('rasteira')) cat = 'Tamancos/Rasteiras';
    else if (nomeLower.includes('mule')) cat = 'Mules';
    
    sku.category = cat;
    if (!categories.includes(cat)) categories.push(cat);
});

// Elementos DOM
const container = document.getElementById('skus-container');
const tabsContainer = document.getElementById('category-tabs');
const searchInput = document.getElementById('search-input');
const grandTotalEl = document.getElementById('grand-total');

function init() {
    setupCategories();
    renderSkus();
    setupEventListeners();
    document.getElementById('print-date').textContent = new Date().toLocaleDateString('pt-BR');
}

// Renderizar Abas
function setupCategories() {
    tabsContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${cat === 'all' ? 'active' : ''}`;
        btn.textContent = cat === 'all' ? 'Todas as Referências' : cat;
        btn.dataset.cat = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentCategory = cat;
            renderSkus();
        });
        
        tabsContainer.appendChild(btn);
    });
}

// Renderizar Cartões
function renderSkus() {
    container.innerHTML = '';
    
    const filteredSkus = skusData.filter(sku => {
        const matchCat = state.currentCategory === 'all' || sku.category === state.currentCategory;
        const matchSearch = sku.id.includes(state.searchTerm) || sku.name.toLowerCase().includes(state.searchTerm);
        return matchCat && matchSearch;
    });

    filteredSkus.forEach(sku => {
        if (!state.inputs[sku.id]) state.inputs[sku.id] = { sizes: {}, multiplier: 1 };

        const card = document.createElement('div');
        card.className = 'sku-card';
        card.id = `card-${sku.id}`;

        let sizesHTML = '';
        sku.sizes.forEach(size => {
            const val = state.inputs[sku.id].sizes[size] || '';
            sizesHTML += `
                <div class="size-item">
                    <div class="size-label">${size}</div>
                    <input type="number" class="size-input" data-sku="${sku.id}" data-size="${size}" min="0" placeholder="0" value="${val}">
                </div>
            `;
        });

        // A MÁGICA ESTÁ AQUI: Se não tiver imagem, ele procura o arquivo "SKU.jpg"
        const imgSrc = sku.image ? sku.image : `${sku.id}.jpg`;

        card.innerHTML = `
            <div class="sku-header">
                <img src="${imgSrc}" class="sku-image" alt="Produto" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'">
                <div class="sku-info">
                    <h3>SKU: ${sku.id}</h3>
                    <p>${sku.name}</p>
                </div>
            </div>
            <div class="size-grid">${sizesHTML}</div>
            
            <div class="sku-footer no-print">
                <div class="calc-row">
                    <span>Grade: <strong id="grade-${sku.id}">0</strong></span>
                    <div class="multiplier-wrapper">
                        <span>Pedidos:</span>
                        <input type="number" class="multiplier-input" data-sku="${sku.id}" value="${state.inputs[sku.id].multiplier}" min="1">
                    </div>
                    <span>Total: <strong class="final-total" id="total-${sku.id}">0</strong></span>
                </div>
                <button class="btn-print-single" data-sku="${sku.id}">🖨️ Imprimir Apenas Esta Ref.</button>
            </div>
            
            <div class="only-print" style="margin-top: 1rem;">
                <strong>Grade inserida:</strong> <span id="print-grade-${sku.id}">0</span> pares<br>
                <strong>Qtd. de Pedidos passados:</strong> <span id="print-mult-${sku.id}">1</span>x<br>
                <strong style="font-size: 1.1rem;">TOTAL GERAL DESTE ITEM: <span id="print-total-${sku.id}">0</span> pares</strong>
                
                <div id="print-squares-${sku.id}"></div>
            </div>
        `;
        container.appendChild(card);
    });

    recalculateAll();
}

// Eventos Globais
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.toLowerCase();
        renderSkus();
    });

    container.addEventListener('input', (e) => {
        const skuId = e.target.dataset.sku;
        
        if (e.target.classList.contains('size-input')) {
            state.inputs[skuId].sizes[e.target.dataset.size] = parseInt(e.target.value) || 0;
        } 
        else if (e.target.classList.contains('multiplier-input')) {
            let val = parseInt(e.target.value);
            state.inputs[skuId].multiplier = isNaN(val) || val < 1 ? 1 : val;
        }
        recalculateAll();
    });

    document.getElementById('btn-print-all').addEventListener('click', () => {
        document.body.classList.remove('printing-single');
        window.print();
    });

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-print-single')) {
            const skuId = e.target.dataset.sku;
            document.querySelectorAll('.sku-card').forEach(c => c.classList.remove('print-active'));
            document.getElementById(`card-${skuId}`).classList.add('print-active');
            
            document.body.classList.add('printing-single');
            window.print();
            
            setTimeout(() => document.body.classList.remove('printing-single'), 1000);
        }
    });
}

// Cálculos
function recalculateAll() {
    let grandTotal = 0;

    skusData.forEach(sku => {
        const inputData = state.inputs[sku.id];
        if(!inputData) return;

        let gradePairs = 0;
        for (const size in inputData.sizes) {
            gradePairs += inputData.sizes[size];
        }

        const skuFinalTotal = gradePairs * inputData.multiplier;
        
        const elGrade = document.getElementById(`grade-${sku.id}`);
        if(elGrade) {
            elGrade.textContent = gradePairs;
            document.getElementById(`total-${sku.id}`).textContent = skuFinalTotal;
            
            document.getElementById(`print-grade-${sku.id}`).textContent = gradePairs;
            document.getElementById(`print-mult-${sku.id}`).textContent = inputData.multiplier;
            document.getElementById(`print-total-${sku.id}`).textContent = skuFinalTotal;

            const squaresContainer = document.getElementById(`print-squares-${sku.id}`);
            if(squaresContainer) {
                let squaresHTML = '<div style="margin-top: 15px;"><strong style="color: #475569; font-size: 0.9rem;">Datas de Entrega:</strong><div class="squares-row">';
                
                for (let i = 0; i < inputData.multiplier; i++) {
                    squaresHTML += '<div class="date-box"></div>';
                }
                
                squaresHTML += '</div></div>';
                squaresContainer.innerHTML = squaresHTML;
            }
        }

        grandTotal += skuFinalTotal;
    });

    grandTotalEl.textContent = grandTotal;
}

init();
