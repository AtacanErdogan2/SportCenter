window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 509.5 || document.documentElement.scrollTop > 509.5) {
      document.querySelector("nav").style.backgroundColor = "#355592";
    } else {
      document.querySelector("nav").style.backgroundColor = "transparent"; 
    }
  }