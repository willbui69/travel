 import { checkForInput } from './js/userInputCheck'
 import { handleSubmit } from './js/formHandle'
 import { checkForDate } from './js/userInputCheck'

 document.getElementById('submit').addEventListener('click',displayData);

 function displayData(){
     handleSubmit(event);
 }

 export { 
     checkForInput,
     handleSubmit,
     checkForDate  
     }
