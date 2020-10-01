
var fs=require('fs');

fs.writeFile('testfile.txt','Hey I am a file system test',function(err){
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
})