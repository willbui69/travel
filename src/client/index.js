 import { checkForCityInput } from './js/userInputCheck'
 import { handleSubmit } from './js/formHandle'
 import { checkForDateInput } from './js/userInputCheck'

 document.getElementById('submit').addEventListener('click',displayData);

 function displayData(){
     handleSubmit(event);
 }

 export { 
     checkForCityInput,
     handleSubmit,
     checkForDateInput  
     }
