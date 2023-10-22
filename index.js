const fs=require('fs')
const inputfilePath=process.argv[2]
const outputfilePath=process.argv[3]
const alphabetArray=[]
var alphabet = [];
for (var i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}
var smallalphabet = [];
for (var i = 97; i <= 122; i++) {
    smallalphabet.push(String.fromCharCode(i));
}

let ceaserCapitalAlphabet=[]
for(let i=0;i<){

}
fs.readFile(inputfilePath,'utf-8',(err,res)=>{
    if(err){
        console.log(err)
    
    }
    else{
      for(let i=0;i<res.length;i++){
        if(alphabet.includes(res[a])||smallalphabet.includes(res[a])){
            
            res[i]
        }
      }
    }
})
/* Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let a=['A','B','C','D']
let resultant=[]
for(let i=0;i<a.length;i++){
    if(a[i+3]!==undefined){
        resultant.push(a[i+3])
    }
    else{
        let counts;
       for(let j=1;j<4;j++){
           if(a[i+j]!==undefined){
               continue;
           }
           else{
               counts=j
               break;
           }
           }
           resultant.push(a[3-counts])
    }
}
console.log(resultant)*/