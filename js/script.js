window.addEventListener('load', function() {
    const loader = document.getElementById('spinner');
    const content = document.querySelector('.content');
    const navbar = document.querySelector('.navbar');
    
    loader.style.display = 'none';
    content.style.display = 'block';
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
});


/* swipper js */
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenCards = document.querySelectorAll('.icon_card.hidden');
  
    toggleButton.addEventListener('click', function() {
      hiddenCards.forEach(card => {
        if (card.style.display === 'none' || card.style.display === '') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
  
      if (toggleButton.textContent === 'See more >>') {
        toggleButton.textContent = 'See less <<';
      } else {
        toggleButton.textContent = 'See more >>';
      }
    });
  });


  // Get the element with id="defaultOpen" and click on it
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  

  document.addEventListener('DOMContentLoaded', function() {
    const toggleSponsorsButton = document.getElementById('toggleSponsorsButton');
    const hiddenSponsors = document.querySelectorAll('.sponsor_card.hidden');
  
    toggleSponsorsButton.addEventListener('click', function() {
      hiddenSponsors.forEach(card => {
        if (card.style.display === 'none' || card.style.display === '') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
  
      if (toggleSponsorsButton.textContent === 'See more >>') {
        toggleSponsorsButton.textContent = 'See less <<';
      } else {
        toggleSponsorsButton.textContent = 'See more >>';
      }
    });
  });
  
  