document.addEventListener('DOMContentLoaded', (event) => {
  injectAnchors('.page-content');
  $('#toc').toc();
});

function injectAnchors(selector) {
  headings = $(selector)
    .find(':header')
    .each(function (index) {
      heading = $(this);
      heading_id = heading.attr('id');
      if (heading_id) {
        heading.append(
          ` <a href="#${heading_id}" class="heading-anchor"><i class="fas fa-link"></i></a>`
        );
      }
    });
}

$('.nav-sandwich').click(function (event) {
  event.preventDefault();
  $('.mobile-nav-menu').toggleClass('slide-up');
  $('.nav-sandwich').toggleClass('open');
  $('body').toggleClass('no-scroll');
});

(function () {
  'use strict';
  window.addEventListener(
    'load',
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    },
    false
  );
})();

// Events for showing the subscription modal
function showSubModal(event) {
  if (event == null || event.clientY < 50) {
    $('body').off('mouseleave', showSubModal);
    if (timeToPopupAgain()) {
      localStorage.setItem('last_popup_time', new Date().getTime());
      $('#sub-modal').modal('show');
    }
  }
}

function timeToPopupAgain() {
  const oneMonth = 2678400000; // 31 days actually, but close enough!
  var lastPopupTimestamp = localStorage.getItem('last_popup_time');
  if (lastPopupTimestamp == null) {
    return true;
  }
  var lastPopupTimestamp = Number(lastPopupTimestamp);
  return new Date().getTime() - lastPopupTimestamp > oneMonth;
}

function isMobile() {
  return window.matchMedia('only screen and (max-width: 1024px)').matches;
}

$(function () {
  if (isMobile()) {
    // When dealing with mobiles, just show the modal in 15s.
    setTimeout(showSubModal, 15000);
  } else {
    // Give the user 3 seconds to "sit down" in the page before setting the event.
    setTimeout(function () {
      $('body').on({ mouseleave: showSubModal });
    }, 3000);
  }
});
$('#modal-subscribe').submit((e) => {
  const form = e.target;
  if (form.checkValidity() == false) {
    return;
  }
  $('#sub-modal').modal('hide');
});

// Dynamic image sizing for carousel
function orientImage() {
  $('#main-carousel .carousel-item img').each(function () {
    const containerRatio = $(this).parent().width() / $(this).parent().height();
    const imageRatio = $(this).width() / $(this).height();
    if (imageRatio > containerRatio) {
      $(this).removeClass('snap-vertically');
      $(this).addClass('snap-horizontally');
    } else {
      $(this).removeClass('snap-horizontally');
      $(this).addClass('snap-vertically');
    }
  });
}
$('#main-carousel .carousel-item img').on('load', orientImage);
$(window).resize(orientImage).resize();

// Image enlarge modal
$('.post-body img').click(function () {
  if (isMobile()) {
    return;
  }
  $('#imageModal .modal-dialog').empty();
  $('#imageModal .modal-dialog').append($(this).clone());
  $('#imageModal').modal('show');
});
