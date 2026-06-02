// DADOS DOS PRODUTOS
const skusData = [
    { id: "118015125", name: "Sapatilha Feminina Slingback Bico Fino Verniz Marsala", sizes: [34,35,36,37,38,39,40], image: "marsala.png" },
    { id: "118015197", name: "Sapatilha Feminina Slingback Bico Fino Verniz Off White", sizes: [34,35,36,37,38,39,40], image: "offwhite.png" },
    { id: "118005033", name: "Sapatilha Bico Fino Animal Print Dourado", sizes: [34,35,36,37,38,39,40], image: "croco.png" },
    { id: "118005009", name: "Sapatilha Bico Fino Animal Print Preto", sizes: [34,35,36,37,38,39,40], image: "crocopreta.png" },
    { id: "68051033", name: "Sandália Salto Infantil Tiras Laço Ouro Light", sizes: [28,29,30,31,32,33,34,35,36], image: "68ouro.png" },
    { id: "169012195", name: "Tênis Infantil Cano Alto Casual Strass Preto", sizes: [28,29,30,31,32,33,34,35,36], image: "casual.png" },
    { id: "68051001", name: "Sandália Salto Infantil Tiras Laço Branco", sizes: [28,29,30,31,32,33,34,35,36], image: "68051branco.png" },
    { id: "68051009", name: "Sandália Salto Infantil Tiras Laço Preto", sizes: [28,29,30,31,32,33,34,35,36], image: "68051preto.png" },
    { id: "68051041", name: "Sandália Salto Infantil Tiras Laço (Rosa)", sizes: [28,29,30,31,32,33,34,35,36], image: "68051.png" },
    { id: "135003172", name: "Scarpin Salto Baixo Verniz Bico Fino (Preto)", sizes: [34,35,36,37,38,39,40], image: "135preto.png" },
    { id: "169021368", name: "Tênis Feminino Casual Colorido Refletivo", sizes: [28,29,30,31,32,33,34,35,36], image: "169.png" },
    { id: "155095009", name: "Tênis Menina Fashion Unicórnio Preto", sizes: [28,29,30,31,32,33,34,35,36], image: "unicornio.png" },
    { id: "118005041", name: "Sapatilha Bico Fino Animal Print Nude", sizes: [34,35,36,37,38,39,40], image: "118nude.png" },
    { id: "135003198", name: "Scarpin Salto Baixo Verniz Bico Fino Nude", sizes: [34,35,36,37,38,39,40], image: "135nude.png" },
    { id: "169012285", name: "Tênis Infantil Cano Alto Casual Strass Dourado", sizes: [28,29,30,31,32,33,34,35,36], image: "169ouro.png" },
    { id: "116032121", name: "Sandália Espiral Salto Fino Strass Off White", sizes: [34,35,36,37,38,39,40], image: "116off.png" },
    { id: "147006121", name: "Sandália Salto Médio Grosso Tiras Cruzadas", sizes: [34,35,36,37,38,39,40], image: "147off.png" },
    { id: "162006286", name: "Sandália Feminina Salto Bloco Tiras Elegantes", sizes: [34,35,36,37,38,39,40], image: "162ouro.png" },
    { id: "155095001", name: "Tênis Menina Fashion Unicórnio Branco", sizes: [28,29,30,31,32,33,34,35,36], image: "unibranco.png" },
    { id: "135003001", name: "Scarpin Salto Baixo Verniz Bico Fino", sizes: [34,35,36,37,38,39,40], image: "135off.png" },
    { id: "155095041", name: "Tênis Menina Fashion Unicórnio Rosa", sizes: [28,29,30,31,32,33,34,35,36], image: "155rosa.png" },
    { id: "135003383", name: "Scarpin Salto Baixo Verniz Bico Fino Prata", sizes: [34,35,36,37,38,39,40], image: "135prata.png" }
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

        const imgSrc = sku.image ? sku.image : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

        card.innerHTML = `
            <div class="sku-header">
                <img src="${imgSrc}" class="sku-image" alt="Produto">
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
                
                <!-- Quadrados de data -->
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
