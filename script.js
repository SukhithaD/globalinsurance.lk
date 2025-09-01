// This function runs when the page content has loaded
document.addEventListener('DOMContentLoaded', function() {

  // --- Code for the Homepage Slider ---
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0;
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    setInterval(nextSlide, 4000);
  }

  // --- Code for the Partners Carousel on Homepage ---
  const partnersCarousel = document.getElementById('partnersCarousel');
  if (partnersCarousel) {
    const track = document.getElementById('carouselTrack');
    partnersCarousel.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    partnersCarousel.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  }

  // --- Code for the Service Page Modals ---
  const serviceModal = document.getElementById('service-modal');
  if (serviceModal) {
    // Close modal if clicked outside
    serviceModal.addEventListener('click', function (e) {
      var content = document.getElementById('modal-content-wrapper');
      if (!content.contains(e.target)) {
        closeModal();
      }
    });
  }
  
  // --- Code for Quote Request Modal ---
  const quoteModal = document.getElementById('quote-modal');
  if (quoteModal) {
      // Close the modal if the user clicks outside of the content box
      window.addEventListener('click', function(event) {
        if (event.target == quoteModal) {
          quoteModal.style.display = 'none';
        }
      });
  }


  // --- Code for Scroll Animations (runs on all pages) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));

});

// --- Global Functions (can be called from any page) ---

// Toggle accordion card on Services page
function toggleCard(card) {
  document.querySelectorAll('.card.active').forEach(c => {
    if (c !== card) c.classList.remove('active');
  });
  card.classList.toggle('active');
}

// Open and Close functions for the Service Page Modal
function openModal(title, contentHTML) {
  var modal = document.getElementById('service-modal');
  var content = document.getElementById('modal-content-wrapper');
  if (modal) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = contentHTML;
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      content.classList.remove('scale-95', 'opacity-0');
      content.classList.add('scale-100', 'opacity-100');
    });
  }
}
function closeModal() {
  var modal = document.getElementById('service-modal');
  var content = document.getElementById('modal-content-wrapper');
  if (modal) {
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  }
}

// Open and Close functions for the Quote Request Modal
function openQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if(modal) modal.style.display = 'flex';
}
function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if(modal) modal.style.display = 'none';
}