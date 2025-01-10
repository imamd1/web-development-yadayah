var repeat = function(activeClass) {
    let active = document.
                 getElementsByClassName("active");
  
    let i = 1;
    var repeater = function() {
      setTimeout(function() {
         [...active].forEach(function(activeSlide) {
            activeSlide.classList.remove("active");
         });
  
         slides[i].classList.add("active");
         buttons[i].classList.add("active");
         i++
  
         if(slides.length == i) {
           i = 0;
         }
         if(i >= slides.length) {
           return;
         }
         repeater(); 
       }, 5000);
    } 
    repeater();
  }
  repeat();
  AOS.init();