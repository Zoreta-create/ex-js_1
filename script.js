alert("Vamos aprender matemática?");
let n1 = prompt("Digite o primeiro número: ");
let n2 = prompt("Digite o segundo número: ");

let soma = Number(n1) + Number(n2);
alert(`A soma desses dois números é: ${soma}`);

let sub = Number(n1) - Number(n2);
alert(`A subtração desses dois números é: ${sub}`);

let mult = Number(n1) * Number(n2);
alert(`A multiplicação desses dois números é: ${mult}`);

let div = Number(n1) / Number(n2);
alert(`A divisão desses dois números é: ${div}`);

let rest = Number(n1) % Number(n2).toFixed(2);
alert(`O resto da divisão desses dois números é: ${rest}`);

