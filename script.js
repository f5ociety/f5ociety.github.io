"use strict";

function Check() {
    let plus = "Elliot";
    let answer = confirm("fuck society?", "");
    let plusanswer = prompt(
        "Как звали главного героя Mr.Robot (Имя на английском с большой буквы)",
        ""
    );

    if (plusanswer == plus && answer == true) {
        document.getElementById("cr").textContent =
            "Молодец, правильный ответ. Напиши нам на почту - fuckfucksociety@protonmail.com. Теперь ты часть нашей команды";
    } else {
        return alert("Неверно, ты не заслужил быть частью f5ociety");
    }
}
