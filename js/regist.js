// $.validator.setDefaults({
//   submitHandler: function () {
//     $("#suc").show();
//   }
// });
// $.validator.methods.equal = function (value, element, param) {
//   return value == param;
// };

$(function () {
  // var validator = $("#signupForm").bind("invalid-form.validate", function () {
  //   $("#summary").html("Your form contains " + validator.numberOfInvalids() + " errors, see details below.");
  // }).validate({

    $("#signupForm").validate({
      submitHandler: function(form) {
        // do other things for a valid form
        //form.submit();
        var newuser = {};
        var id = null;
        $.get("http://localhost:3000/db", function (data) {
          id = data[data.size - 1].id + 1;
        });
        newuser.id = null;
        newuser.fname = $("#fname").val();
        newuser.lname = $("#lname").val();
        newuser.username = $("#username").val();
        newuser.password = $("#password").val();
        newuser.confirmpassword = $("#confirmpassword").val();
        newuser.status = $("#status").val();
        console.log(newuser);
        var url = "http://localhost:3000/db";
        $.post(url, newuser, function (data, status) {
          alert('Created successfully');
          console.log("Inserted " + data);
          setTimeout(window.location.href = "regist.html", 1000);
        });
        alert("Submit");
      },

    debug: true,
    errorElement: "em",
    errorContainer: $("#warning, #summary"),
    errorPlacement: function (error, element) {
      error.appendTo(element.parent("div").next("span"));
    },
    success: function (label) {

      $("#err").hide();
    },
    rules: {
      fname: "required",
      lname: "required",
      username: {
        required: true,
        minlength: 3
      },
      password: {
        required: true,
        minlength: 4
      },
      confirmpassword: {
        required: true,
        minlength: 4,
        equalTo: "#password"
      },


      messages: {
        fname: "Please enter your first name.",
        lname: "Please enter your last name.",
        username: {
          required: "Please input your username.",
          minlength: "Username must be at least 3 characters."
        },
        password: {
          required: "Please provide a password.",
          minlength: "Your password must be at least 4 characters."
        },
        confirmpassword: {
          required: "Please provide a password.",
          minlength: "Your password must be at least 4 characters.",
          equalTo: "Please enter the same password as above."
        },
              },
      highlight: function (element) {
        $(element).closest('.form-group').addClass('has-error');
        $("#err").show();
      },
      unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-error');
      },
      errorElement: 'span',
      errorClass: 'help-block',
      errorPlacement: function (error, element) {
        if (element.parent('.input-group').length) {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }}
    });
});


$("#regis").click(function () {




});
