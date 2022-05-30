process.stdin.on('data',data =>{
    console.log(`you have now typed this data: ${data}`);
    process.exit();
})

// process.stdin.on('data',data2 =>{
//     process.stdout.write(data2);
//     process.exit();
// })