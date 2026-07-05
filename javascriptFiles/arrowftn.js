
const items=document.querySelectorAll('.item')
// USING A NORMAL FUNCTION
items.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log(this); 
        // Success! 'this' refers directly to the clicked <a class="item"> element
    });
});

// USING AN ARROW FUNCTION
items.forEach(item => {
    item.addEventListener('click', () => {
        console.log(this); 
        // Oops! 'this' will likely refer to the global 'window' object, 
        // because arrow functions look outside themselves for 'this'.
    });
});