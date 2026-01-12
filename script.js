function abrirDetalhes(id, nome, preco, descricao, imagem, sabores = null) {
    // 1. Atualiza as informações visuais na tela
    let nomeEl = document.getElementById('modal-nome');
    let descEl = document.getElementById('modal-desc');
    let precoEl = document.getElementById('modal-preco');
    let imgEl = document.getElementById('modal-img');

    if(nomeEl) nomeEl.innerText = nome;
    if(descEl) descEl.innerText = descricao;
    if(precoEl) precoEl.innerText = "R$ " + preco.toFixed(2).replace('.', ',');
    if(imgEl) imgEl.src = imagem;

    // 2. Lógica dos Sabores
    let areaSabores = document.getElementById('area-sabores');
    let select = document.getElementById('selecao-sabor');

    if (sabores) {
        // Se tiver sabores, mostra a caixa e cria as opções
        areaSabores.style.display = 'block';
        select.innerHTML = ''; // Limpa opções antigas
        
        let listaSabores = sabores.split(',');
        listaSabores.forEach(sabor => {
            let option = document.createElement('option');
            option.value = sabor.trim();
            option.innerText = sabor.trim();
            select.appendChild(option);
        });
    } else {
        // Se não tiver sabores, esconde a caixa de seleção
        areaSabores.style.display = 'none';
    }

    // 3. Mostra a janela (Modal)
    document.getElementById('modal-produto').style.display = 'flex';
}

// Função para fechar a janela ao clicar em "Voltar"
function fecharModalProduto() {
    document.getElementById('modal-produto').style.display = 'none';
}

// Fecha o modal se clicar fora da caixinha (no fundo escuro)
window.onclick = function(event) {
    let modal = document.getElementById('modal-produto');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}