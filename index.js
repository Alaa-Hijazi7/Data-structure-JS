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