function myfunc(arg){
     if (arg[0] === undefined){
        console.log("No argument");
        }
     else{
        console.log(arg[0])
       
    }
} 
myfunc(process.argv.slice(2))

// const args = process.argv.slice(2);

// if (args[0] === undefined) {
//     console.log("No argument");
// } else {
//     console.log(args[0]);
// }