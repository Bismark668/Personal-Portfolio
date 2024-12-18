
const sectBtns = document.querySelector('.controlls');
const sectBtn = document.querySelectorAll('.nav-toggles a');


function pageTransitions() {
  // Button active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active');
      currentBtn[0].classList.remove('active');
      this.classList.add('active');
    });
  }
}

pageTransitions();



var typed = new Typed('.text',{
  strings: ["Frontend developer",
            "UI/UX Designer",
            "Digital Marketer"
          ],
  typeSpeed:100,
  backspeed:400,
  backDelay:900,
  loop:true
});
















       
