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

 return("My name "+this.name+" last name"+this.lastName+"  age :"+this.age+" " + middleName)
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

      
