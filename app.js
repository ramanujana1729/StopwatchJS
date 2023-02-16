var countText = document.querySelector('.stopwatch h1');
count = 0;

function start() {
    vxid = setInterval(timer, 1000);
    function timer() {
        count++;
        countText.innerText = count;
    }
}

function stop() {
    clearInterval(vxid);
    countText.innerText = count;
}

function reset() {
    clearInterval(vxid);
    count = 0;
    countText.innerText = count;
}