
function building(lastName,age)
{
  this.name = "mohsen",
  this.lastName = lastName
  this.age =age
  return age
}
const House = new building("Eman",30)
building.prototype.userName = function(middleName)
{
    console.log(this) // return to the object in class

  return(`My name ${this.name} last name ${this.lastName} age: ${this.age} ${middleName}`)
}

House.userName("samah");
const Amal =  new building("Amal",27)
// Alaa.userName("ali")
const Eman = function(name)
{
  this.name = name, 
  this.last = "samah"
  return name
}
const Asma = new Eman("Eman")

var Stack = function(capcity)
{
  this.capcity = capcity || Infinity ;
  this.storage = {};
  this.count =0; 
  
}
Stack.prototype.push =function(value)
{
if (this.count < this.capcity)
{
  this.storage[this.count++]=value
  return this.count
}
return "max overflow stop"
}
Stack.prototype.pop =function() //return value
{

var value =this.storage[--this.count]


delete this.storage[this.count]
if(this.count <0 ){
 this.count =0; 
}
return value ; 

}
Stack.prototype.peek = function()
{
  return this.storage[this.count-1]
}
Stack.prototype.size = function(){ 
return this.count; 
}
// LAsT IN First out 
 var newMenue = new Stack(4)
 console.log(newMenue.push("Hello")) //1 count
 console.log(newMenue.push("Eman")) //2
  console.log(newMenue.push("samah")) //3
  console.log(newMenue.push("welcom")) //4 
  console.log(newMenue.push("amaal")) // overflow
 console.log(newMenue)
 console.log( newMenue.pop()) // return value welcom
 console.log( newMenue.pop()) //samah
  console.log(newMenue)
console.log(newMenue.size())
console.log(newMenue.peek()) // Eman // the top of stack 

      
=======
var tracker =0; 
var callMe = function()
{
  tracker++; 
  if(tracker ===2 )
  {
    return "loops"
  }
return callMe()// if we delete the return statment it will undefined 
}
  // Trace the recursive function 

callMe() // {1} call the function itself again 

var callMe = function() // {1}
{
  tracker++; // 1 
  if(tracker ===2 ) // false 
  {
    return "loops"
  }
return callMe() // {2} 
}
var callMe = function() // {2}
{
  tracker++; // 2 
  if(tracker ===2 ) // true 
  {
    return "loops" // reutrn "loops" then it will go to the pervious function 
  }
return callMe() 
}

// Note 
// var callMySelf = function()
// {
//   if()
//   {
//     return // base Case
//   }
//   else 
//   {
//     callMySelf( ) // recursive base 
//   }
//   return 
// }

