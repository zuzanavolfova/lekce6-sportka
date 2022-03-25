// SPORTKA



//naplním osudí
function sportka() {
    let osudi = [];
    let vyherniCisla = document.querySelector('#vyherni-cisla');
    let tazenaCisla = [];
    for (let i = 1; i <= 49; i = i + 1) {
        osudi.push(i);
    }
    vyherniCisla.innerHTML = "";

    // z osudi vyberu 7 náhodných čísel
    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];

        tazenaCisla.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);
    }

    //vypíšu do HTML
    for (let i = 0; i < tazenaCisla.length; i++) {

        vyherniCisla.innerHTML += '<span class="cislo">' + tazenaCisla[i] + '</span>';
    }
    //prepsat vyherni cisla=
    let historieTahu = document.querySelector('.historie-vyher');

    historieTahu.innerHTML += tazenaCisla + '<br>';

    //vynulovat tazena cisla
    tazenaCisla.splice(0, tazenaCisla.length);
    //vynulovat osudi
    osudi.splice(0, osudi.length);


}