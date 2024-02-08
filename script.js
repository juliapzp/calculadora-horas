let hi = document.getElementById('horaInicial');
let mi = document.getElementById('minInicial');
let hf = document.getElementById('horaFinal');
let mf = document.getElementById('minFinal');
let resultado = document.getElementById('r');

function soma(){
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMinuto = Number(mi.value) + Number(mf.value);
    while(somaMinuto > 59){
        somaMinuto -= 60;
        somaHora ++;
    }

    resultado.innerHTML = somaHora + ":" + somaMinuto;
}

function sub(){
    let subHora = Number(hi.value) - Number(hf.value);
    let subMinuto = Number(mi.value) - Number(mf.value);

    resultado.innerHTML = subHora + ":" + subMinuto;

}