class BikeFactory {
    // 1. Static Property (Shared across the whole class)
    static totalBikesCreated = 0;

    constructor(model) {
        this.model = model;
        // Increment the global class counter every time a new instance is built
        BikeFactory.totalBikesCreated++;
    }

    // 2. Static Method (A general utility helper function)
    static convertKmhToMph(kmh) {
        return kmh * 0.621371;
    }
}

// Creating individual instances
const bike1 = new BikeFactory('Mountain Bike');
const bike2 = new BikeFactory('Road Bike');

// Checking the static property (Called directly on the Class name!)
console.log(BikeFactory.totalBikesCreated); // Output: 2

// Calling the static method (Called directly on the Class name!)
console.log(BikeFactory.convertKmhToMph(100)); // Output: 62.1371

// 🛑 TRYING TO CALL THEM FROM AN INSTANCE WILL FAIL:
// console.log(bike1.totalBikesCreated); // Output: undefined
// console.log(bike1.convertKmhToMph(100)); // TypeError: bike1.convertKmhToMph is not a function