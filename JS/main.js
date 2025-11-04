document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }

  // Optional: add subtle shadow to navbar after scroll
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    var updateShadow = function () {
      if (window.scrollY > 8) {
        navbar.style.boxShadow = '0 8px 24px rgba(0,0,0,0.35)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    };
    updateShadow();
    window.addEventListener('scroll', updateShadow, { passive: true });
  }
});

// Lightbox functionality
function openLightbox(imageSrc) {
  var modal = document.getElementById('lightbox-modal');
  var img = document.getElementById('lightbox-img');
  if (modal && img) {
    img.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeLightbox(event) {
  // Only close if clicking the background, not the image or close button
  if (event && event.target.id !== 'lightbox-img' && !event.target.classList.contains('lightbox-close')) {
    var modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  } else if (!event) {
    // Called directly without event (e.g., from Escape key)
    var modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

// Prevent closing when clicking on the image itself, but allow close button
document.addEventListener('DOMContentLoaded', function() {
  var lightboxImg = document.getElementById('lightbox-img');
  if (lightboxImg) {
    lightboxImg.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
  
  var lightboxClose = document.querySelector('.lightbox-close');
  if (lightboxClose) {
    lightboxClose.addEventListener('click', function(event) {
      event.stopPropagation();
      var modal = document.getElementById('lightbox-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});


