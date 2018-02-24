class Clicker {
    constructor(name) {
        this.unit = 0;
        this.uName = name;
        this.uNameP = name + "s";
        this.cps = 1;

        this.things = [];

    }


    startloop() {
        Sharp.run();
        this.unit += this.cps / 1;
    }
}

var Game = new Clicker("Lumen");

window.onload = function() {
    Sharp.start();
    setInterval(Game.startloop, 10);
};

function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}