// event bubbeling vs event capturing(false , true)

const items=document.querySelectorAll('.item')
items.forEach(function(item){
    console.log(item)
    item.addEventListener('click',function(eobj){
        // console.log(eobj)
        console.log('item clicked!')
        eobj.stopPropagation();

    },false)
})

const mobileMenu =document.querySelector('#mobileMenu')

mobileMenu.addEventListener('click',(eob)=>{
    console.log('mobileMenu clicked!')

},false)


