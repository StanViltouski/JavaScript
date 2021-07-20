'use strict'

class Name {
    constructor(name){ this.name = name; }

    showName(){ return this.name; }
}


class Timer extends Name {
    constructor(args) {
        super(args.name);   // наследует все методы родителя
        this.time = args.time || 100;
    }

    tick() { this.time--; }

    runTimer() {
        setInterval(() => {
            this.tick();
        }, 1000)
    }
}


class ReverseTimer extends Timer {
    tick() { this.time++; }
}


class Show extends ReverseTimer {
    tick(){
       super.tick(); // наследует метод tick у родителя
        console.log(this.time);
    }

    showName(){ console.log(this.name); }
}


let newTimer = new Show({
    time: 35,
    name: 'myName'
});


newTimer.showName();
newTimer.runTimer();