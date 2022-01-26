function toggleButton(b) {
  b.prop('disabled', !b.prop('disabled'));
  b.children('.normal-message').toggle();
  b.children('.sending-message').toggle();
}

$('#contact-modal').on('hidden.bs.modal', function (e) {
  var alert = $('#contact-modal  .alert:first').removeClass(
    'alert-success alert-danger'
  );
});

function showModal(message, type) {
  var alert = $('#contact-modal .alert:first');
  alert.addClass('alert-' + type);
  alert.html(message);
  $('#contact-modal').modal('show');
}

$('#contact-form').submit((e) => {
  e.preventDefault();
  var form = e.target;
  if (form.checkValidity() === false) {
    return;
  }

  var button = $(form).children('button');
  toggleButton(button);

  grecaptcha
    .execute('6LdNjtYUAAAAABEwo_6ULGj98zy302Bc3kj5K99-', { action: 'submit' })
    .then(function (recap_response) {
      if (!recap_response) {
        toggleButton(button);
        showModal(
          'Sorry! An error has occurred. Please try again or email us instead at: <strong>info@volkis.com.au</strong>.',
          'danger'
        );
        return;
      }

      var URL = 'https://api.volkis.com.au/contact';

      var name = $('#name').val();
      var email = $('#email').val();
      var company = $('#company').val();
      var title = $('#title').val();
      var desc = $('#desc').val();
      var data = {
        name: name,
        email: email,
        company: company,
        title: title,
        desc: desc,
        recap_response: recap_response,
      };

      $.ajax({
        type: 'POST',
        url: URL,
        dataType: 'json',
        crossDomain: 'true',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),

        success: function () {
          // clear form and show a success message
          toggleButton(button);
          showModal(
            "<strong>Thanks!</strong> We'll be in touch very soon.",
            'success'
          );
          e.target.reset();
          $('#contact-form').removeClass('was-validated');
        },
        error: function (xhr, status, error) {
          // show an error message
          toggleButton(button);
          showModal(
            'Sorry! An error has occurred. Please try again or email us instead at: <strong>info@volkis.com.au</strong>.',
            'danger'
          );
        },
      });
    });
});
