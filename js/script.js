'use strict';
const getAnswer = () => Math.floor(Math.random() * 101);
let mainFunctions = function() {
    let value = getAnswer();
    console.log(value);
    
    let attempt = 3;

    let resultFunction = function() {
        
        let question = prompt('Угадай число от 1 до 100');
        let _question = Number(question);
        console.log(typeof question);
        console.log(question);
        if (value === _question) {
            let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
            if (!win) {
                alert('Спасибо за игру');
                return
            } else {
                location.reload();
                attempt = 3;
                mainFunctions();
            }
        }
        if (question === null) {
            alert('Игра окончена');
            return
        }
        if (isNaN(_question)) {
            alert('введите число');
        } else if (_question < value) {
            attempt--;
            alert('Загаданное число больше, осталось попыток ' + attempt);
            
        } else {
            attempt--;
            alert('Загаданное число меньше, осталось попыток ' + attempt);
        }
        
        if (attempt < 1){
            let res = confirm('Попытки закончились, хотите попробовать снова?')
            if (!res) {
                alert('Спасибо за игру');
                return
            } else {
                location.reload();
                attempt = 3;
                mainFunctions();
            }
        }
        resultFunction();
        return
    }
    resultFunction();
}
mainFunctions();

