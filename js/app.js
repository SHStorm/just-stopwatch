const stopwatch = new Stopwatch(document.getElementById('display'));
stopwatch.render();

$startButton = document.getElementById('start-button');
$resetButton = document.getElementById('reset-button');

$startButton.addEventListener('click', function () {
    if (stopwatch.isStarted) {
        stopStopwatch()
    } else {
        startStopwatch();
    }
});

$resetButton.addEventListener('click', function () {
    resetStopwatch();
});

function startStopwatch() {
    $startButton.innerHTML = '<i class="fas fa-pause"></i>';

    stopwatch.start();
}

function stopStopwatch() {
    $startButton.innerHTML = '<i class="fas fa-play"></i>';

    stopwatch.stop();
}

function resetStopwatch() {
    stopStopwatch();

    stopwatch.reset();
}