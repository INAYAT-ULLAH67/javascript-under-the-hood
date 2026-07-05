/**
 * 1. THE BLUEPRINT (Constructor Function)
 * Instead of copy-pasting individual object literals, we define a single blueprint.
 * This function handles unique data properties that change per user.
 */
function User(username, age, email) {
    this.username = username;
    this.age = age;
    this.email = email;
}

/**
 * 2. THE MEMORY SAVER (Prototype Method)
 * Instead of giving every user their own duplicate function copy, we attach the 
 * method to the 'prototype'. Now, this method exists exactly ONCE in memory, 
 * and all user instances share it (like a shared library).
 */
User.prototype.getUserDetails = function() {
    // 'this' dynamically points to the specific user instance calling the method
    return `username : ${this.username}`;

    
};

/**
 
  3. INSTANTIATION (Creating Objects via the 'new' keyword)
  When we write the 'new' keyword, a fresh, empty space in memory is allocated 
  for a brand-new object. This individual object is called an "instance".
  JavaScript then automatically fills this instance with the constructor's data.
 */
const user1 = new User('inayat', 24, 'inayat@gmail.com');
const user2 = new User('ahmad', 22, 'ahmad@gmail.com');

// 4. INSPECTION (Checking our instances)
// Notice that printing the objects directly shows ONLY their data properties!
console.log(user1);
console.log(user2); 

// 5. EXECUTION (Accessing shared behaviors)
// Even though the objects don't contain the function visually above, they can 
// successfully call it by looking up into their shared Prototype memory space.
console.log(user1.getUserDetails()); 
console.log(user2.getUserDetails()); 