 import { checkForCityInput } from './js/userInputCheck'
 import { handleSubmit } from './js/formHandle'
 import { checkForDateInput } from './js/userInputCheck'

 import './styles/base.scss'
 import './styles/header.scss'
 import './styles/main.scss'
 import './styles/footer.scss'

 document.getElementById('submit').addEventListener('click',handleSubmit);
 
 export { 
     checkForCityInput,
     handleSubmit,
     checkForDateInput,
     }
