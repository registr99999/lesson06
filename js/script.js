'use strict';

let mainFunctions = function() {
    let value = 10;

    let resultFunction = function() {

        let question = prompt('Угадай число от 1 до 100');
        let _question = Number(question);
        console.log(typeof question);
        console.log(question);

        if (isNaN(_question)) {
            alert('введите число');
        } else if (question === null) {
            alert('Игра окончена');
            return
        } else if (value === _question) {
            alert('Поздравляю, Вы угадали!!!');
            return
        } else if (_question < value) {
            alert('Загаданное число больше');
        }   else {
            alert('Загаданное число меньше');
        }
        resultFunction();
    }
    resultFunction();
    
}
mainFunctions();
