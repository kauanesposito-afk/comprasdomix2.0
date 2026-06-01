// DADOS EXTRAÍDOS DO RELATÓRIO DOMIDONA
// ➔ SUBSTITUA O LINK "image" PELAS FOTOS REAIS DOS SEUS PRODUTOS
const skusData = [
    { id: "118015125", name: "Sapatilha Feminina Slingback Bico Fino Verniz Marsala", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Marsala" },
    { id: "118015197", name: "Sapatilha Feminina Slingback Bico Fino Verniz Off White", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=OffWhite" },
    { id: "118005033", name: "Sapatilha Bico Fino Animal Print Dourado", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Dourado" },
    { id: "118005009", name: "Sapatilha Bico Fino Animal Print Preto", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Preto" },
    { id: "68051033", name: "Sandália Salto Infantil Tiras Laço Ouro Light", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Inf+Ouro" },
    { id: "169012195", name: "Tênis Infantil Cano Alto Casual Strass Preto", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Tenis+Pr" },
    { id: "68051001", name: "Sandália Salto Infantil Tiras Laço Branco", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Inf+Branco" },
    { id: "68051009", name: "Sandália Salto Infantil Tiras Laço Preto", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Inf+Preto" },
    { id: "68051041", name: "Sandália Salto Infantil Tiras Laço (Rosa)", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Inf+Rosa" },
    { id: "135003172", name: "Scarpin Salto Baixo Verniz Bico Fino (Preto)", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Scarpin+Pr" },
    { id: "169021368", name: "Tênis Feminino Casual Colorido Refletivo", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Refletivo" },
    { id: "155095009", name: "Tênis Menina Fashion Unicórnio Preto", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Unic+Pr" },
    { id: "118005041", name: "Sapatilha Bico Fino Animal Print Nude", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Nude" },
    { id: "135003198", name: "Scarpin Salto Baixo Verniz Bico Fino (Off White)", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Scarpin+Off" },
    { id: "169012285", name: "Tênis Infantil Cano Alto Casual Strass Dourado", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Tenis+Do" },
    { id: "116032121", name: "Sandália Espiral Salto Fino Strass Off White", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Espiral" },
    { id: "147006121", name: "Sandália Salto Médio Grosso Tiras Cruzadas", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Cruzadas" },
    { id: "162006286", name: "Sandália Feminina Salto Bloco Tiras Elegantes", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Bloco" },
    { id: "155095001", name: "Tênis Menina Fashion Unicórnio Branco", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Unic+Br" },
    { id: "135003001", name: "Scarpin Salto Baixo Verniz Bico Fino", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Scarpin" },
    { id: "155095041", name: "Tênis Menina Fashion Unicórnio Rosa", sizes: [28,29,30,31,32,33,34,35,36], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Unic+Ro" },
    { id: "135003383", name: "Scarpin Salto Baixo Verniz Bico Fino (Branco)", sizes: [34,35,36,37,38,39,40], image: "https://via.placeholder.com/150/c026d3/ffffff?text=Scarpin+Br" }
];

// Estado da Aplicação
const state = {
    multiplier: 1,
    inputs: {} 
};

// Elementos DOM
const container = document.getElementById('skus-container');
const multiplierInput = document.getElementById('order-multiplier');
const grandTotalEl = document.getElementById('grand-total');
const printBtn = document.getElementById('btn-print');
const printDateEl = document.getElementById('print-date');
const printMultiplierEl = document.getElementById('print-multiplier');

// Inicialização
function init() {
    renderSkus();
    setupEventListeners();
    updateDate();
}

// Renderizar os cartões na tela dinamicamente
function renderSkus() {
    container.innerHTML = '';

    skusData.forEach(sku => {
        if (!state.inputs[sku.id]) state.inputs[sku.id] = {};

        const card = document.createElement('div');
        card.className = 'sku-card';

        let sizesHTML = '';
        sku.sizes.forEach(size => {
            sizesHTML += `
                <div class="size-item">
                    <div class="size-label">${size}</div>
                    <input type="number" 
                           class="size-input" 
                           data-sku="${sku.id}" 
                           data-size="${size}" 
                           min="0" 
                           placeholder="0">
                    <div class="size-result" id="res-${sku.id}-${size}">0</div>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="sku-header">
                <img src="${sku.image}" alt="Foto SKU" class="sku-image">
                <div class="sku-info">
                    <h3>Base SKU: ${sku.id}</h3>
                    <p>${sku.name}</p>
                </div>
            </div>
            <div class="size-grid">
                ${sizesHTML}
            </div>
            <div class="sku-total">
                Total do Item: <span id="total-${sku.id}">0</span> pares
            </div>
        `;

        container.appendChild(card);
    });
}

// Configuração de Eventos
function setupEventListeners() {
    // Multiplicador global
    multiplierInput.addEventListener('input', (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        state.multiplier = val;
        printMultiplierEl.textContent = val;
        recalculateAll();
    });

    // Delegando evento de input para a grid inteira (melhor performance)
    container.addEventListener('input', (e) => {
        if (e.target.classList.contains('size-input')) {
            const skuId = e.target.dataset.sku;
            const size = e.target.dataset.size;
            const value = parseInt(e.target.value) || 0;

            state.inputs[skuId][size] = value;
            recalculateAll();
        }
    });

    // Impressão
    printBtn.addEventListener('click', () => {
        window.print();
    });
}

// Lógica de cálculo matemático
function recalculateAll() {
    let grandTotal = 0;

    skusData.forEach(sku => {
        let skuTotal = 0;

        sku.sizes.forEach(size => {
            const baseQty = state.inputs[sku.id]?.[size] || 0;
            const calculatedQty = baseQty * state.multiplier;
            
            document.getElementById(`res-${sku.id}-${size}`).textContent = calculatedQty;
            skuTotal += calculatedQty;
        });

        document.getElementById(`total-${sku.id}`).textContent = skuTotal;
        grandTotal += skuTotal;
    });

    grandTotalEl.textContent = grandTotal;
}

// Formatar data atual
function updateDate() {
    const hoje = new Date();
    printDateEl.textContent = hoje.toLocaleDateString('pt-BR');
}

// Start
init();