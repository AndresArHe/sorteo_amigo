// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

        function agregarAmigo() {
            let nombre = document.getElementById('amigo').value;
                listaAmigos.push(nombre);
                limpiarCaja();
                presentaLista();
                console.log(listaAmigos);
        }

        function limpiarCaja() {
            let valorCaja = document.querySelector('#amigo');//El # indica que obtengo el "objeto" por id
            valorCaja.value = ''; // Al objeto le asigno el valor vacio
        }

        function sortearAmigo() {
            if (listaAmigos.length > 0) {
                let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
                presentaResultado(amigoSorteado);
                console.log("Amigo sorteado: " + amigoSorteado);
            }
        }

        function presentaLista() {
            let listaHTML = document.getElementById('listaAmigos');
            listaHTML.innerHTML = '';
            listaAmigos.forEach(function(amigo) {
                let li = document.createElement('li');
                li.textContent = amigo;
                listaHTML.appendChild(li);
            });
        }

        function presentaResultado(amigo) {
            let listaHTML = document.getElementById('listaAmigos');
            listaHTML.innerHTML = '';
            let li = document.createElement('li');
            li.textContent = "Amigo sorteado: " + amigo;
            listaHTML.appendChild(li);
        }
