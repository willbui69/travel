//Function to erase all space in city name input
function checkForCityInput(data){
     data = data.trim();
     if(data.length === 0){
        return false
     }else {
        return data
     }
}

//Function to check input dates not in the past
function checkForStartDate(startDate){
   let current = Date.parse(new Date());
   let future =Date.parse(startDate);
   if((future - current) < 0){
      return false
   } else{
      return startDate
   }
}

export { 
   checkForCityInput,
   checkForStartDate,
 }