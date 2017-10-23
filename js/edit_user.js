
  $(function(){
    //Get user Id from querystring parameters
    $("#signupForm").validate({
        submitHandler: function(form) {
    //Create a Web Api url for getting a member info
    var url = "http://localhost:3000/db/" + id;
    console.log(url);
    $.postJSON(url, function(data, status) {
      console.log(data);
          
        alert('Created successfully');
        console.log("Inserted " + data);
        setTimeout(window.location.href = "regist.html", 1000);
      });
      alert("Submit");
    },
      
      
      //If user click cancel, go to userinfo page
      $("#cancel").click(function () {
        window.location.href = "viewuser.html?id=" + data.id;
      });
      //Save updated data
      $("#save").click(function () {
        //Set update data to newuser object
        var newuser = { };
        newuser.id = data.id;
        newuser.fname = $("#fname").val();
        newuser.lname = $("#lname").val();
        newuser.username = $("#username").val();
        newuser.password =  $('#password').val();
        
        
        // console.log(JSON.stringify(newuser));
        //Creat a url for update member data
        var updateUrl = "http://localhost:3000/db/" + data.id;
        //Call Web Api with method PUT for updating
        $.ajax({
          url: updateUrl,
          type: 'PUT',
          data: newuser,
          success: function(result) {
            alert('Updated Complete!');
            window.location.href = "viewuser.html?id=" + data.id;
          }
        });
      });
    });
  }});
}); 