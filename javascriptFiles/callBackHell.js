

function downloadFile(filename,callback){
    console.log(`file ${filename} is downloading!`)

    setTimeout(()=>{
        console.log('filde downlded!')
        callback()
       

    },2000)
}
// here the paramide is formed which we does not want so will switch to promises!
downloadFile('one.txt',()=>{
    console.log(`\n`)
    downloadFile('two.txt',()=>{
        console.log(`\n`)
        downloadFile('third.txt',()=>{
            console.log(`\n`)
            downloadFile('fourth.txt',()=>{
                   // You are trapped inside three layers of closures here!
            })
            
        })
    })
})