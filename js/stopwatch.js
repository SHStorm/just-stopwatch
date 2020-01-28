class Stopwatch {
    constructor($display) {
        this.$display = $display;

        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;

        this.isStarted = false;
    }

    render() {
        const displayText = `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;

        this.$display.innerHTML = displayText;
    }

    start() {
        this.isStarted = true;

        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    }

    stop() {
        this.isStarted = false;

        clearInterval(this.interval);
    }

    reset() {
        clearInterval(this.interval);
        this.stop();

        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;

        this.render();
    }

    tick() {
        if (!this.isStarted) return;

        this.seconds++;
        this.minutes += Math.floor(this.seconds / 60);
        this.hours += Math.floor(this.minutes / 60);

        this.seconds %= 60;
        this.minutes %= 60;

        this.render();
    }
}

function pad(n) {
    return String(n).padStart(2, 0);
}