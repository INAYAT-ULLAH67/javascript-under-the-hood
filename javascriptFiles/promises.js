// 1. We define our asynchronous function
function askServerForTotalRepos() {
    
    // This function INSTANTLY returns a new Promise object
    return new Promise((resolve, reject) => {
        
        // Simulating a 2-second delay from GitHub's server
        setTimeout(() => {
            let totalRepos = 15; 
            resolve(totalRepos); // This sends the data out when ready
        }, 2000);    

    });
}

// ==========================================
// 2. Calling the function and saving the object
// ==========================================

// The function runs, finishes instantly, and drops a Promise object into our variable
const myReceiptObject = askServerForTotalRepos();

// If we print the variable immediately, we see the raw Promise object!
console.log("What is inside the variable right now?");
console.log(myReceiptObject);


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('async task has completed!')
        resolve({username:'Inayat',email:'example@gmail.com'})
        
    }, 2000);
}).then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log('username:',username)
})



promiseTwo= new Promise (function(resolve,reject){

    setTimeout(() => {
        let error=true
        if(!error){
            console.log('sucesss!')
            resolve('async task 2 resolved')
        }else{
            console.log('failure!')
            reject('something went wrong!')

        }
        
    }, 3000);
})

promiseTwo.then((data)=>{
    console.log('data',data)

}).catch((msg)=>{
    console.log(msg)
})




async function consumePromiseTw0() {
    try {
        const resposne=await promiseTwo;
        console.log(resposne)
        
    } catch (error) {
        console.log('E:',error)
        
    }

    
}
consumePromiseTw0()

async function getUsers() {
    try {
        const response = await fetch('https://api.github.com/users?per_page=100');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json(); 
        console.log("Live Profile Data:", data);
    } catch (error) {
        console.log("Fetch Error:", error);
    }
}
getUsers();