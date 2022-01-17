var mostrar = document.querySelector("#show")



function getEshow(e) {

    let elemento = e.target


    if (elemento.id === "limpar" || elemento.id === "remover" || elemento.id === "resolver" || elemento.id === "operadores") {
        return
    }

    mostrar.innerText += elemento.innerText

}

function apagarAll() {

    mostrar.innerText = ""
}

function resolver() {



    if (mostrar.innerText == "") {

        alert("Nenhuma valor adicionado")
    }

    else {

        mostrar.innerText = `${eval(mostrar.innerHTML)}`


    }



}


function deletar() {


    mostrar.innerText = mostrar.innerText.slice(0, -1)



}



