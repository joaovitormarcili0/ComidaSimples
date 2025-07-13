// ----------- Dados base -----------
const diasUteis = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const opcoesProteina = [
  { value: "aleatorio", label: "Aleatório" },
  { value: "carne", label: "Carne" },
  { value: "frango", label: "Frango" },
  { value: "peixe", label: "Peixe" },
  { value: "vegetariano", label: "Vegetariano" },
  { value: "vegano", label: "Vegano" }
];

// Funções utilitárias
const parseQuantidade = (q) => (typeof q === "string" && q.includes("/")) ? (
  (() => { const [n, d] = q.split("/").map(Number); return n / d; })()
) : Number(q);

const decimalParaFracao = (decimal) => {
  if (Number.isInteger(decimal)) return decimal + "";
  const fracoesComuns = [
    [1/8, "1/8"], [1/6, "1/6"], [1/5, "1/5"], [1/4, "1/4"], [1/3, "1/3"], [3/8, "3/8"],
    [2/5, "2/5"], [1/2, "1/2"], [3/5, "3/5"], [5/8, "5/8"], [2/3, "2/3"], [3/4, "3/4"],
    [5/6, "5/6"], [7/8, "7/8"]
  ];
  const inteiro = Math.floor(decimal);
  const frac = decimal - inteiro;
  for (const [val, str] of fracoesComuns) {
    if (Math.abs(frac - val) < 0.03) return inteiro ? `${inteiro} ${str}` : str;
  }
  return decimal.toFixed(2).replace(/\.00$/, "");
};

// Calcular macros totais do prato
function calcularMacros(ingredientes) {
  let totalCal = 0, totalFat = 0, totalProt = 0;
  for (let ingrediente in ingredientes) {
    let quantidade = parseQuantidade(ingredientes[ingrediente]);
    if (macrosIngredientes[ingrediente]) {
      totalCal += macrosIngredientes[ingrediente].cal?.(quantidade) || 0;
      totalFat += macrosIngredientes[ingrediente].fat?.(quantidade) || 0;
      totalProt += macrosIngredientes[ingrediente].prot?.(quantidade) || 0;
    }
  }
  return {
    cal: Math.round(totalCal),
    fat: Number(totalFat.toFixed(1)),
    prot: Number(totalProt.toFixed(1)),
  };
}

// ----------- Modo de uso: Para agora ou Para semana -----------
let modoAtual = "agora"; // default

const modoContainer = document.getElementById("modo-container");
const opcaoContainer = document.getElementById("opcao-container");
const resultadoEl = document.getElementById("resultado");
const comprasEl = document.getElementById("compras");
const listaEl = document.getElementById("lista-compras");
const preparoSection = document.getElementById("preparo");
const preparoContainer = document.getElementById("modo-preparo-container");
const formulario = document.getElementById("formulario");

// Cria o seletor de modo (Para agora/Para semana)
function renderizaModo() {
  modoContainer.innerHTML = `
    <div class="modo-switcher">
      <button type="button" class="modo-btn${modoAtual === "agora" ? " ativo" : ""}" id="btn-agora">Para agora</button>
      <button type="button" class="modo-btn${modoAtual === "semana" ? " ativo" : ""}" id="btn-semana">Para semana</button>
    </div>
  `;
  document.getElementById("btn-agora").onclick = () => {
    if (modoAtual !== "agora") {
      modoAtual = "agora";
      renderizaModo();
      renderizaOpcoes();
      resetResultados();
    }
  };
  document.getElementById("btn-semana").onclick = () => {
    if (modoAtual !== "semana") {
      modoAtual = "semana";
      renderizaModo();
      renderizaOpcoes();
      resetResultados();
    }
  };
}

// Renderiza opções conforme o modo
function renderizaOpcoes() {
  opcaoContainer.innerHTML = "";

  if (modoAtual === "agora") {
    // Um único seletor de tipo de prato
    const wrapper = document.createElement("div");
    wrapper.className = "opcao-prato-agora";
    wrapper.innerHTML = `
      <label for="tipo-prato-agora" class="label-grande">Escolha o tipo de prato:</label>
      <select id="tipo-prato-agora">
        ${opcoesProteina.map(o => `<option value="${o.value}">${o.label}</option>`).join("")}
      </select>
    `;
    opcaoContainer.appendChild(wrapper);
  } else {
    // Seletor para cada dia da semana
    const diasDiv = document.createElement("div");
    diasDiv.id = "dias-container";
    diasUteis.forEach(dia => {
      const div = document.createElement("div");
      div.classList.add("dia");
      div.innerHTML = `
        <label for="select-${dia}">${dia}:</label>
        <select name="${dia}" id="select-${dia}">
          ${opcoesProteina.map(o => `<option value="${o.value}">${o.label}</option>`).join("")}
        </select>
      `;
      diasDiv.appendChild(div);
    });
    opcaoContainer.appendChild(diasDiv);
  }
}

// Reset resultados e esconder lista/preparo
function resetResultados() {
  resultadoEl.innerHTML = "";
  listaEl.innerHTML = "";
  comprasEl.style.display = "none";
  preparoSection.style.display = "none";
  preparoContainer.innerHTML = "";
}

// ---------- Gerar prato (para agora) ----------
function gerarParaAgora(pessoas) {
  const tipoSelecionado = document.getElementById("tipo-prato-agora").value;
  let proteina;
  if (tipoSelecionado === "aleatorio") {
    const keys = Object.keys(receitas);
    proteina = keys[Math.floor(Math.random() * keys.length)];
  } else {
    proteina = tipoSelecionado;
  }
  // Sorteia um prato dessa categoria
  const pratos = receitas[proteina];
  const prato = pratos[Math.floor(Math.random() * pratos.length)];

  // Resultado resumido
  let macros = calcularMacros(prato.ingredientes);
  resultadoEl.innerHTML = `
    <h2>Prato do Dia</h2>
    <ul><li><strong>${prato.nome}</strong> <span style="color:#888;font-size:0.97em;">~${macros.cal} kcal</span></li></ul>
  `;

  // Lista de compras (apenas para o prato)
  listaEl.innerHTML = "";
  comprasEl.style.display = "block";
  Object.entries(prato.ingredientes)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([ingredienteCompleto, quantidade]) => {
      const match = ingredienteCompleto.match(/^(.+?)\s*\((.+?)\)$/);
      let nome = ingredienteCompleto, unidade = "";
      if (match) { nome = match[1].trim(); unidade = match[2].trim(); }
      const quantidadeUnitaria = parseQuantidade(quantidade);
      const total = quantidadeUnitaria * pessoas;
      const quantidadeFormatada = decimalParaFracao(total);
      const texto = unidade ? `${quantidadeFormatada} ${unidade} de ${nome}` : `${quantidadeFormatada} ${nome}`;
      const li = document.createElement("li");
      li.textContent = texto;
      listaEl.appendChild(li);
    });

  // Preparo detalhado
  preparoSection.style.display = "block";
  preparoContainer.innerHTML = "";
  renderizaDetalhesPrato(prato, pessoas);
}

// ---------- Gerar cardápio da semana ----------
function gerarParaSemana(pessoas) {
  const selects = Array.from(document.querySelectorAll("#dias-container select"));
  const usados = new Set();
  const listaCompras = {};
  let ultimaProteina = null;
  const pratosSemana = [];
  let resultadoHTML = "<h2>Cardápio da Semana</h2><ul>";

  selects.forEach((select, index) => {
    let escolha = select.value;
    let proteina;
    if (escolha === "aleatorio") {
      const opcoes = Object.keys(receitas).filter(p => p !== ultimaProteina);
      proteina = opcoes[Math.floor(Math.random() * opcoes.length)];
    } else {
      proteina = escolha;
    }
    ultimaProteina = proteina;
    const pratosDisponiveis = receitas[proteina].filter(p => !usados.has(p.nome));
    let pratoSelecionado = pratosDisponiveis.length > 0 ?
      pratosDisponiveis[Math.floor(Math.random() * pratosDisponiveis.length)] :
      { nome: "⚠️ Nenhuma opção disponível", ingredientes: {}, preparo: "" };

    usados.add(pratoSelecionado.nome);
    pratosSemana.push(pratoSelecionado);

    let calorias = "";
    if (pratoSelecionado.ingredientes && Object.keys(pratoSelecionado.ingredientes).length > 0) {
      const macros = calcularMacros(pratoSelecionado.ingredientes);
      if (macros.cal > 0)
        calorias = ` <span style="color:#888; font-size:0.95em;">~${macros.cal} kcal</span>`;
    }
    resultadoHTML += `<li><strong>${diasUteis[index]}:</strong> ${pratoSelecionado.nome}${calorias}</li>`;

    // Acumula ingredientes
    for (const [ingrediente, quantidade] of Object.entries(pratoSelecionado.ingredientes)) {
      const quantidadeUnitaria = parseQuantidade(quantidade);
      const total = quantidadeUnitaria * pessoas;
      listaCompras[ingrediente] = (listaCompras[ingrediente] || 0) + total;
    }
  });

  resultadoHTML += "</ul>";
  resultadoEl.innerHTML = resultadoHTML;

  // Lista de compras
  comprasEl.style.display = "block";
  listaEl.innerHTML = "";
  Object.entries(listaCompras)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([ingredienteCompleto, quantidade]) => {
      const match = ingredienteCompleto.match(/^(.+?)\s*\((.+?)\)$/);
      let nome = ingredienteCompleto, unidade = "";
      if (match) { nome = match[1].trim(); unidade = match[2].trim(); }
      const quantidadeFormatada = decimalParaFracao(quantidade);
      const texto = unidade ? `${quantidadeFormatada} ${unidade} de ${nome}` : `${quantidadeFormatada} ${nome}`;
      const li = document.createElement("li");
      li.textContent = texto;
      listaEl.appendChild(li);
    });

  // Preparo detalhado para todos os pratos
  preparoSection.style.display = "block";
  preparoContainer.innerHTML = "";
  pratosSemana.forEach(prato => {
    if (prato.preparo) renderizaDetalhesPrato(prato, pessoas);
  });
}

// ---------- Detalhes de preparo ----------
function renderizaDetalhesPrato(prato, pessoas) {
  const details = document.createElement("details");
  details.className = "toggle";
  // Ingredientes
  let ingredientesHtml = `
    <div class="preparo-ingredientes-titulo">
      Ingredientes para ${pessoas} pessoa${pessoas > 1 ? 's' : ''}:
    </div>
    <ul class="preparo-ingredientes-lista">`;
  Object.entries(prato.ingredientes).forEach(([ingrediente, quantidade]) => {
    const quantidadeUnitaria = parseQuantidade(quantidade);
    const total = quantidadeUnitaria * pessoas;
    const match = ingrediente.match(/^(.+?)\s*\((.+?)\)$/);
    let nome = ingrediente, unidade = "";
    if (match) { nome = match[1].trim(); unidade = match[2].trim(); }
    const quantidadeFormatada = decimalParaFracao(total);
    ingredientesHtml += `<li>${unidade ? quantidadeFormatada + " " + unidade + " de " + nome : quantidadeFormatada + " " + nome}</li>`;
  });
  ingredientesHtml += '</ul><hr class="preparo-divider"/>';

  // Passo-a-passo
  const passos = prato.preparo
    .trim()
    .split(/\n+/)
    .filter(Boolean)
    .map(l => l.replace(/^\d+\.\s*/, "")); // Remove "1. ", "2. "
  let passosHtml = `<div class="preparo-passoapasso-titulo">Modo de preparo</div>
    <ol class="preparo-passos">`;
  passos.forEach(passo => { passosHtml += `<li>${passo}</li>`; });
  passosHtml += "</ol>";

  // Macros toggle
  const macros = calcularMacros(prato.ingredientes);
  let macrosHtml = `
    <div style="border-top: 1px solid #000; margin:16px 0 8px 0;"></div>
    <details class="toggle-macros" style="margin-bottom:8px;">
      <summary style="font-size:0.97em; color:#666; font-weight:500;">Informação nutricional (estimada)</summary>
      <div style="padding:8px 0 8px 12px;">
        <span><strong>Calorias:</strong> ${macros.cal} kcal</span><br/>
        <span><strong>Gorduras totais:</strong> ${macros.fat} g</span><br/>
        <span><strong>Proteínas:</strong> ${macros.prot} g</span>
      </div>
    </details>
  `;

  details.innerHTML = `<summary>${prato.nome}</summary>
    ${ingredientesHtml}
    ${passosHtml}
    ${macrosHtml}`;
  preparoContainer.appendChild(details);
}

// ----------- SUBMIT do formulário -----------
formulario.onsubmit = function(e) {
  e.preventDefault();
  const pessoas = Math.max(1, parseInt(document.getElementById("quantidade").value) || 1);
  resetResultados();
  if (modoAtual === "agora") {
    gerarParaAgora(pessoas);
  } else {
    gerarParaSemana(pessoas);
  }
};

// ----------- DARK MODE -----------
// Modo escuro ativado/desativado
const toggleDarkMode = document.getElementById("toggle-darkmode");
toggleDarkMode.addEventListener("change", function () {
  document.body.classList.toggle("darkmode", this.checked);
  localStorage.setItem("darkmode", this.checked ? "on" : "off");
});
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("darkmode");
    toggleDarkMode.checked = true;
  }
  // Render inicial
  renderizaModo();
  renderizaOpcoes();
  resetResultados();
});
