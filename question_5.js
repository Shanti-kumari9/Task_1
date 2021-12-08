var readlinceSync=require('readline-sync')
var myAge=readlinceSync.question("your age is more then 25?")
if(myAge=="yes"){
    console.log("you are right");

}
else{
    console.log("you are wrong");
}