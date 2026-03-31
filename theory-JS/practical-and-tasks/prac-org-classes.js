// task from JS info

//The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.

// function Clock({ template }) {

//     let timer;

//     function render() {
//       let date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     this.stop = function() {
//       clearInterval(timer);
//     };

//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }

//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();


class Clock {
    constructor({ template }) {
        this.template = template;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

let clock = new Clock(({ template: 'h:m:s' }));
clock.start();
setTimeout(() => clock.stop(), 1000);



// Chnage into class

// function Counter(start) {
//   let value = start;

//   this.inc = function() {
//     value++;
//     console.log(value);
//   };

//   this.dec = function() {
//     value--;
//     console.log(value);
//   };
// }

// let counter = new Counter(5);
// counter.inc();
// counter.dec();


class Counter {
    constructor(start) {
        this.value = start;
    }

    inc() {
        this.value++;
        console.log(this.value);
    }

    dec() {
        this.value--;
        console.log(this.value);
    }

}

let counter = new Counter(5);
counter.inc();
counter.inc();
counter.inc();
counter.dec();
console.log(counter);



// Countdown timer.
// Create class like this:

// let timer = new Countdown(5);
// timer.start();

// with output:

// 5
// 4
// 3
// 2
// 1
// Done!

class Countdown {
    constructor(start) {
        this.value = start;
    }

    start() {
        this.count = setInterval(() => {
            console.log(this.value);

            if (this.value === 0) {
                console.log("Done!");
                clearInterval(this.count);
                return;
            }
            this.value--;
        }, 1000);

    };
}

let timer = new Countdown(10);
timer.start();