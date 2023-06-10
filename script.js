let areas = {
    a: null,
    b: null,
    c: null,
}


//document.querySelector('.neutralArea').addEventListener('click', (e)=> {
    // console.log(e.target) //pega onde foi clicado
    //console.log(e.currentTarget)// pega quem tem o evento



//})

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart',  dragStart)//evento q vai disparar quando vc começa a arrastar
    item.addEventListener('dragend', dragEnd)//evento q vai disparar quando vc parar/soltar de arrastar
})
document.querySelectorAll('.area').forEach(item => {
    item.addEventListener('dragover', dragOver)//sempre q passar um item por cima desse evento, ele vai disparar 
    item.addEventListener('dragleave', dragLeave)//sempre q vc esta em uma area q é possivel soltar e vc sai dela, ele vai disparar quando sair
    item.addEventListener('drop', drop)//quando soltar o item(adiv)
})
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', DropNeutral)
function dragStart(e) {
    e.currentTarget.classList.add('dragging')//dragging é uma class criada no css, sempre q ela for ativada(arrastado), o item(bloco preto), fica cinza
}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
}

function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null) {
    e.preventDefault()//colocando preventDefault ele esta liberando colocar itens, e podemos executar o drop com isso
    e.currentTarget.classList.add('hover')
    }
}
function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
}
function drop(e) {
    e.currentTarget.classList.remove('hover')

    

    if(e.currentTarget.querySelector('.item') === null) {
        let dragItem = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(dragItem)//appendChild quer dizer q vai entrar dentro do elemento q esta, e adicionar um elemento no final] 
        
        updateAreas()
    }
}
//functions Neutral Area
function dragOverNeutral(e) {
e.preventDefault()
e.currentTarget.classList.add('hover')
}
function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
}
function DropNeutral(e) {
    e.currentTarget.classList.remove('hover')

    let dragItem= document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
    updateAreas()
}
//logic functions
function updateAreas(e) {
document.querySelectorAll('.area').forEach(area => {
    let atributoArea = area.getAttribute('data-name')
    if(area.querySelector('.item') !== null) {
        areas[atributoArea] = area.querySelector('.item').innerHTML
    }else {
        areas[atributoArea] = null
    }

})

    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct')
    } else {
        document.querySelector('.areas').classList.remove('correct')
    }
}