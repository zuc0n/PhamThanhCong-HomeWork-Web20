// function danhrang(callback) {
//     setTimeout(function() {
//         console.log("")
//     })
// };


danhrang().then(() =>{
    return ruamat();
}).then(() =>{
    return dihoc()
}).then(() =>{
    console.log("Done");
}).catch(() =>{
    console.log("Fail");    
})

//Async function 
const asyncFunctionDemo = async function(){
    try {
    await danhrang()
    await ruamat()
    await dihoc()
    console.log("Done")
    } catch(error){
        console.log("Fail");
    }
}

asyncFunctionDemo()