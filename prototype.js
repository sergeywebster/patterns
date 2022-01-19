class TeslaCar {
    constructor(model, color, autopilot) {
        this.model = model;
        this.color = color;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(this.model, this.color, this.autopilot)
    }
}

// Produce base auto
const prototypeCar = new TeslaCar('S', 'white', false)

// Clone of base auto
const car = prototypeCar.produce();

// Changes for particular auto
car.autopilot = true;
car.color = 'black';
console.log(car)