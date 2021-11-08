function checkForInput(data){
     data = data.trim();
     if(data.length === 0){
        return false
     }else {
        return data
     }
}

function checkForDate(futureDate){
   let current = Date.parse(new Date());
   let future =Date.parse(futureDate);
   if((future - current) < 0){
      alert('Date must be today or in the future!');
      return false
   }else{
      return futureDate
   }
}

export { 
   checkForInput,
   checkForDate
 }