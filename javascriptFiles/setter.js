class Car {
    #mileage = 0; // 1. Private property initialized to 0

    constructor(model, make) {
        this.model = model;
        this.make = make;
    }

    // 2. The Setter Method
    set mileage(newValue) {
        // Validation: Prevent rolling back the odometer (fraud protection)
        if (newValue < this.#mileage) {
            console.log(`🛑 Fraud Alert: You cannot reduce the mileage from ${this.#mileage}!`);
        } else {
            this.#mileage = newValue;
            console.log(`✅ Mileage successfully updated to: ${this.#mileage} km`);
        }
    }

    // 3. A Getter so we can read it
    get mileage() {
        return this.#mileage;
    }
}

const myCar = new Car('Civic', 'Honda');

// Accessing the setter (Notice: we use '=', NOT parentheses '()')
myCar.mileage = 1500;

// Trying to set an invalid lower value
myCar.mileage = 1200; 