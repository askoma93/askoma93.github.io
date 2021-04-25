let text = `Привет, Настенька. Вот делал делал презентаху и решил вот такую штуку для тебя сделать.`;
let arr = text.split('');
let timer, counter = 0;

function writeLetter() {
    let tag = $(`<span>${arr[counter] === ' ' ? '&nbsp' : arr[counter]}</span>`);
    $("#letter").append(tag);

    counter++;

    if (counter === arr.length) {
        stopIntervalForLetter()
    }
}

function startIntervalForLetter() {
    timer = setInterval(writeLetter, 100);
}

function stopIntervalForLetter() {
    clearInterval(timer);
}

function go() {
    $("#letter").removeClass("invisible");
    startIntervalForLetter();
}
