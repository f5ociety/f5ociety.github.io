"use strict";

function Check() {
    let plus = "Elliot";
    let answer = confirm("fuck society?", "");
    let plusanswer = prompt("Как звали главного героя Mr.Robot (Имя на английском с большой буквы)", "");

    if (plusanswer == plus && answer == true) {
        document.getElementById("cr").textContent = "Молодец, правильный ответ - мой телеграм @12313131";
    }
    else {
        return alert("Неверно, ты не заслужил быть частью f5ociety");
    }
}

