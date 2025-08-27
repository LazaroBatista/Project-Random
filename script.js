function generateNumber() {
    if (document.querySelector('#num1').value === '' || document.querySelector('#num2').value === '') {
        alert('Por favor, preencha os dois campos!');
        return;
    }
    if (parseInt(document.querySelector('#num1').value) > parseInt(document.querySelector('#num2').value)) {
        alert('O primeiro número deve ser menor que o segundo!');
        return;
    }
    const min = Math.ceil(document.querySelector('#num1').value);
    const max = Math.floor(document.querySelector('#num2').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert('o número sorteado é: ' + result);
}