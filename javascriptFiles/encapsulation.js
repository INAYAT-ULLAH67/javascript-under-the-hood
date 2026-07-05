class BankAccount {
    // 1. we MUST declare private fields at the very top of the class
    #balance; 

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance; // Setting the private field
    }

    // A public method to safely interact with our private data
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Successfully deposited $${amount}.`;
        }
        return "Invalid deposit amount.";
    }

    // A public method to safely read the private data
    getBalance() {
        return `Account balance: $${this.#balance}`;
    }
}

const account = new BankAccount('Inayat', 1000);

// 1. Accessing public properties works fine
console.log(account.owner);

// 2. Accessing public methods works fine
console.log(account.deposit(500)); 
console.log(account.getBalance()); 

// 3. TRYING TO TOUCH THE PRIVATE BALANCE DIRECTLY 🛑
// console.log(account.#balance); 
// SyntaxError: Private field '#balance' must be declared in an enclosing class