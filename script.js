//your JS code here. If required.
<script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the form from submitting the traditional way

      // Get values from form
      var name = document.getElementById("name").value;
      var LastName = document.getElementById("Last_name").value;
      var PhoneNumber = document.getElementById("Phone_Number").value;
      var email = document.getElementById("email").value;

      // Display alert with form data
      alert("Form submitted!\nName: " + name +"\nLast Name: " + LastName + "\nPhone Number: " + PhoneNumber +"\nEmail: " + email);
    });
  </script>

