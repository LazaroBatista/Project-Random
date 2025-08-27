function generateNumber() {
    const min = Math.ceil(document.querySelector('#num1').value);
    const max = Math.floor(document.querySelector('#num2').value);

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert('o número sorteado é: ' + result);
}