let score = 33
let points = "8"
let temp = "kl990"
let temprature = null
let temep2 = undefined

//when we work on backend we don't know type of the varible
console.log(typeof score);     //number
console.log(typeof points)     //string
console.log(typeof temp)       //string
console.log(temprature)        //0
console.log(temep2)            //NaN


let valueInNumber = Number( points);
let tempInNumber = Number(temp);



console.log(typeof score);         //number
console.log(typeof valueInNumber)  //number
console.log(typeof tempInNumber)   //number // but this is not a valid number

console.log(tempInNumber)   //NaN




let isLoggedIn =1
let bollIsLoggedIn = Boolean(isLoggedIn)
let isthere = ""
let boolisthere = Boolean(isthere)
console.log(boolisthere)      //false
let isName = "saloni"
let boolisName = Boolean(isName) 
console.log(boolisName)      //true

console.log(bollIsLoggedIn);  //true





 //**************** OPERATIONS ******************************

 let value =3
 let negVal = -value

 console.log(negVal);     //-3

 let str1 = "hello"
 let str2 = " world"

 let str = str1 +str2
 console.log(str)






 //conversion -2

 console.log("1" +2);   // 12
 console.log(1+ "2");   //12   
 console.log("1" +2 +2);  //122
 console.log(1+ 2 +"2");   //32  <-Note, here js is acting differently

