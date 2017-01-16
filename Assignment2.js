var array = [1,2,3];
function sumArray(array) {
  for (
    var
      index = 0,             
      length = array.length,  
      sum = 0;                
      index < length;         
      sum += array[index++]   
  );
  return sum;
}
console.log("The Sum of an Arry = " +sumArray(array));
