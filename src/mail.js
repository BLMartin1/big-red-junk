function validateForm() {
  var name =  document.getElementById('first-name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "First Name cannot be empty";
      return false;
  }
  var name =  document.getElementById('last-name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Last Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var name =  document.getElementById('city').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "City cannot be empty";
      return false;
  }
  var name =  document.getElementById('zip').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Zip cannot be empty";
      return false;
  }
  var subject =  document.getElementById('service').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Service cannot be empty";
      return false;
  }
  var message =  document.getElementById('description').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Description cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}

document.getElementById('status').innerHTML = "Sending...";
formData = {
  'first-name': $('input[name=first-name]').val(),
  'last-name': $('input[name=last-name]').val(),
  'email': $('input[name=email]').val(),
  'city': $('input[name=city]').val(),
  'zip': $('input[name=zip]').val(),
  'service': $('input[name=service]').val(),
  'description': $('textarea[name=description]').val()
};


$.ajax({
  url: "mail.php",
  type: "POST",
  data: formData,
  success: function (data, textStatus, jqXHR) {

    $('#status').text(data.message);
    if (data.code) //If mail was sent successfully, reset the form.
      $('#contact-form').closest('form').find("input[type=text], textarea").val("");
  },
  error: function (jqXHR, textStatus, errorThrown) {
    $('#status').text(jqXHR);
  }
});
