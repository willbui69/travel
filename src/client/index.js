 import { checkForInput } from './js/userInputCheck'
 import { handleSubmit } from './js/formHandle'

 document.getElementById('submit').addEventListener('click',displayData);

 function displayData(){
     handleSubmit(event);
 }

 export { 
     checkForInput,
     handleSubmit  
     }
