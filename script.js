document.addEventListener("DOMContentLoaded", () => {
  let counterHeading = document.querySelector("h1");
  let numberHeading = document.querySelector("h2");
  let buttons = document.querySelectorAll("button");
  let initialCount = 0;
  numberHeading.textContent = initialCount;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(button.classList);
      
      if (button.classList.contains("increase")) {
        initialCount++;
        numberHeading.textContent = initialCount;
      } else if (button.classList.contains("decrease")) {
        initialCount--;
        numberHeading.textContent = initialCount;
      
      } else if (button.classList.contains("reset")) {
        initialCount = 0;
        numberHeading.textContent = initialCount;
      }
      
      if(initialCount>0){
        numberHeading.style.color = 'green';
        counterHeading.style.color = 'green';
        
      }                    
        else  if(initialCount<0){
        numberHeading.style.color = 'red';
        counterHeading.style.color = 'red';
        
      }   else {
        numberHeading.style.color = 'white';
        counterHeading.style.color = 'white';
      } 
      // switchetrue){
      //   case numberHeading>0: 
      //       numberHeading.style.color = 'green'
      // }
    
    });
  });
});
