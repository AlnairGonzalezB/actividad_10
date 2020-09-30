const lista = document.getElementById("lista");

var nombres = ['Alnair', 'Kevin', 'Esteban', 'Elkueros'];

const agregar = () => {
    var nomb = document.getElementById("elemento").value;
    lista.innerHTML = '';
    nombres.push(nomb);
    mostrar();
}

const mostrar = () => {
    nombres.map(nombre => {
    var li = document.createElement('li');
    li.innerHTML = nombre;
    lista.appendChild(li);
})
}
const borrar = () => {
    lista.innerHTML = '';
    nombres = [];
}
mostrar();