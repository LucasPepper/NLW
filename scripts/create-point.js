function populateUFs() {
    
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state")

    console.log(event.target.value)

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    // Estratégia para limpar a lista de cidades caso haja troca de estados
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de Coleta
const itemsToCollect = document.querySelectorAll(".items-grid li")  
/* Select elementos pai e filhos. Para selecionar apenas o elemento pai, 
adicionar pointer-events: none; nos filhos */

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

// Atualizar o campo escondido com os itens selecionados
const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    
    // Adicionar ou remover uma classe com JS
    // Toggle: se não existir, adiciona. Se existir, remove
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // Verificar se existem itens selecionados. Se sim, pegá-los
    const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId    // True or False
            return itemFound
        }
    )

    // Se já estive selecionado, 
    if( alreadySelected >= 0) {
        // Tirar da seleção
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // Se não estiver selecionado, adicionar à seleção
        selectedItems.push(itemId)
    }    

    collectedItems.value = selectedItems


}