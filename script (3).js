// script.js

class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    buzinar(){
        alert(this.modelo + " fez: Biiiii Biiiii!");
    }
}

function mostrarPreview(){
    let marca = document.getElementById("marca").value;

    document.getElementById("preview").innerHTML =
        "Marca digitada: " + marca;
}

function fabricarCarro(){

    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = Number(document.getElementById("ano").value);

    let novoCarro = new Carro(marca, modelo, ano);

    let divCarro = document.createElement("div");

    divCarro.classList.add("carro");

    divCarro.innerHTML = `
        <h3>${novoCarro.marca}</h3>
        <p>Modelo: ${novoCarro.modelo}</p>
        <p>Ano: ${novoCarro.ano}</p>
    `;

    divCarro.onclick = function(){
        novoCarro.buzinar();
    };

    divCarro.onmouseover = function(){
        divCarro.style.backgroundColor = "#ffe082";
    };

    divCarro.onmouseout = function(){
        divCarro.style.backgroundColor = "white";
    };

    document.getElementById("patio").appendChild(divCarro);

    document.getElementById("marca").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";

    document.getElementById("preview").innerHTML = "";
}