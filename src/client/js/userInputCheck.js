function checkForInput(data){
     data = data.trim();
     if(data.length === 0){
        alert('Please type your destination city');
        return false;
     }
}

export { checkForInput }