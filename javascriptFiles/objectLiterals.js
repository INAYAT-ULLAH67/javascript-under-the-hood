
// It is actually an object in javascript!


const User0 = {
    username: 'inayat',
    email: 'user@gmail.com',
    
    // As objects are collections of data and methods,
    // we can write methods inside them.

    getUserDetails: function(){
        // console.log('getting user details from database');
        // as we use self in python for invoked object but here we use this!
        return `username : ${this.username}`
    }
};

const User2 = {
    username: 'ahmad',
    email: 'ahmad@gmail.com',



    
    // As objects are collections of data and methods,
    // we can write methods inside them.

    getUserDetails: function(){
        // console.log('getting user details from database');
        // as we use self in python for invoked object but here we use this!
        return `username : ${this.username}`
    }
};


