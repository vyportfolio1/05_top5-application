document.addEventListener("DOMContentLoaded", function () {
     
    const firstScreen = document.querySelector('.first');
    const secondScreen = document.querySelector('.second');
    const mainScreen = document.querySelector('.main-screen');

    
    setTimeout(() => {
      firstScreen.style.display = 'none';
      secondScreen.style.display = 'flex';
      secondScreen.classList.remove('animate-out');
      secondScreen.classList.add('animate-in');

       
      setTimeout(() => {
        secondScreen.style.display = 'none';
        mainScreen.style.display = 'flex';
        mainScreen.classList.remove('animate-out');
        mainScreen.classList.add('animate-in');
      }, 6000);  
    }, 4000);  
  });