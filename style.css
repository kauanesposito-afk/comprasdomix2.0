/* Variáveis Minimalistas */
:root {
    --primary: #c026d3;
    --primary-light: #fdf4ff;
    --bg-main: #fafafa;
    --card-bg: #ffffff;
    --text-dark: #111827;
    --text-muted: #6b7280;
    --border-soft: #e5e7eb;
    --border-focus: #d1d5db;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body {
    background-color: var(--bg-main);
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
}

/* Cabeçalho */
.top-bar {
    background-color: var(--card-bg);
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-soft);
}

.logo h1 {
    font-size: 1.4rem;
    color: var(--text-dark);
}

.logo .subtitle {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.btn-primary {
    background-color: var(--text-dark);
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s ease;
}

.btn-primary:hover {
    background-color: var(--primary);
}

/* Barra de Ferramentas (Pesquisa e Abas) */
.toolbar {
    max-width: 1200px;
    margin: 2rem auto 1rem;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.search-container {
    position: relative;
    max-width: 500px;
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
}

#search-input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 2.5rem;
    border: 1px solid var(--border-focus);
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: 0.2s;
}

#search-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-light);
}

.category-tabs {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    border-bottom: 1px solid var(--border-soft);
    padding-bottom: 0.5rem;
}

.tab-btn {
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.95rem;
    color: var(--text-muted);
    cursor: pointer;
    border-radius: 20px;
    transition: 0.2s;
}

.tab-btn:hover {
    background-color: var(--border-soft);
    color: var(--text-dark);
}

.tab-btn.active {
    background-color: var(--primary-light);
    color: var(--primary);
    font-weight: 600;
}

/* Resumo */
.summary-section {
    max-width: 1200px;
    margin: 0 auto 1.5rem;
    padding: 0 1rem;
    text-align: right;
    font-size: 1.2rem;
    color: var(--text-muted);
}

.summary-section strong {
    color: var(--primary);
    font-size: 1.5rem;
}

/* Grid de Produtos */
.skus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto 3rem;
    padding: 0 1rem;
}

/* Cartão Minimalista */
.sku-card {
    background: var(--card-bg);
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
}

.sku-card:hover {
    border-color: var(--border-focus);
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}

.sku-header {
    display: flex;
    gap: 1.2rem;
    align-items: center;
}

.sku-image {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    background-color: var(--bg-main);
}

.sku-info h3 {
    font-size: 1.1rem;
    color: var(--text-dark);
    margin-bottom: 0.2rem;
}

.sku-info p {
    color: var(--text-muted);
    font-size: 0.85rem;
    line-height: 1.3;
}

/* Grade de Inputs Minimalista */
.size-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.size-item {
    display: flex;
    flex-direction: column;
    width: 45px;
}

.size-label {
    text-align: center;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
}

.size-input {
    width: 100%;
    border: 1px solid var(--border-soft);
    border-radius: 4px;
    padding: 0.4rem 0;
    text-align: center;
    outline: none;
    font-size: 0.95rem;
    transition: 0.2s;
}

.size-input:focus {
    border-color: var(--primary);
    background-color: var(--primary-light);
}

/* Rodapé do Cartão (Cálculos e Botão) */
.sku-footer {
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px dashed var(--border-soft);
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.calc-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-main);
    padding: 0.8rem 1rem;
    border-radius: 8px;
    font-size: 0.95rem;
}

.calc-row .multiplier-input {
    width: 60px;
    padding: 0.3rem;
    text-align: center;
    border: 1px solid var(--border-focus);
    border-radius: 4px;
    margin: 0 0.5rem;
    font-weight: bold;
}

.calc-row .final-total {
    color: var(--primary);
    font-size: 1.1rem;
}

.btn-print-single {
    width: 100%;
    background: transparent;
    border: 1px solid var(--border-focus);
    color: var(--text-dark);
    padding: 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: 0.2s;
}

.btn-print-single:hover {
    border-color: var(--primary);
    color: var(--primary);
}

.only-print { display: none; }

/* ===== REGRAS DE IMPRESSÃO ===== */
@media print {
    @page { margin: 1cm; size: A4 portrait; }
    
    body { background: white; }
    .no-print { display: none !important; }
    
    .only-print {
        display: block;
        margin-bottom: 2rem;
        border-bottom: 2px solid #000;
        padding-bottom: 1rem;
    }

    .skus-grid {
        display: block;
        padding: 0;
    }

    .sku-card {
        border: 1px solid #000;
        margin-bottom: 1.5rem;
        page-break-inside: avoid;
    }

    /* Se estiver imprimindo um item único, oculta os outros */
    body.printing-single .sku-card:not(.print-active) {
        display: none !important;
    }

    .size-input {
        border: none;
        border-bottom: 1px solid #000;
        border-radius: 0;
    }

    .calc-row {
        background: transparent;
        border: 1px solid #000;
    }

    .multiplier-input {
        border: none;
        border-bottom: 1px solid #000;
    }
}
