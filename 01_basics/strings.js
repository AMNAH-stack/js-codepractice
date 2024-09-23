const name = "amna"
const myName = "noor"
//console.log(name + myName + "50")
console.log(`my name first is ${name} and last name is ${myName}`);
const gameName=new String("amnanoor")
console.log(gameName[5])
console.log(gameName.__proto__) 
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('r'))
console.log(gameName.substring(0,6))
const newString = gameName.slice(-8,5)
console.log(newString)
const newStringOne = "     AMNANOOR     "
console.log(newStringOne)
//console.log(newStringOne.trimStart())
console.log(newStringOne.trim())
//console.log(newStringOne.trimEnd())
const url = "http://amnanoor.com20%khokhar"
console.log(url.replace('20%' , '-'))
const fix = "the name of langauge is javascript"
console.log(fix.includes('is'))
console.log(fix.split(" "))//split array main output deta ha agr separator mention na ho to wo string return kr deta ha

console.log(fix.split())
console.log(fix.split('a')) 
//console.log(fix.split(""))// agr empty charachter dy dein split mai to wo hr charachter ko split kr deta 
console.log(fix.valueOf()) 
console.log(fix.toString()) 