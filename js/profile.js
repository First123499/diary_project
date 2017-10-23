//Function for extract parameters from querystring
// $.urlParam = function(name){
//     var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
//     return results[1] || 0;
//   }
$(function () {
    //Get user Id from querystring parameters
    $("#signupForm").validate({
        submitHandler: function (form) {
            // var id = $.urlParam('id');
            //Create a Web Api url for getting a member info
            var url = "http://localhost:3000/db/" + id;
            console.log(url);
            $.post(url, function (data, status) {
                console.log(data);
                //document.getElementById('username').value = '';
                alert('Created successfully');
                console.log("Inserted " + data);
                setTimeout(window.location.href = "regist.html", 1000);

                


                //If user click edit, go to edituser page
                $("#edituser").click(function () {
                    window.location.href = "edituser.html?id=" + data.id;
                });
                $("#editpassword").click(function () {
                    window.location.href = "editpassword.html?id=" + data.id;
                });
                $("#delete").click(function () {
                    var id = 0;
                    $.ajax({
                        type: 'DELETE',
                        url: "http://localhost:3000/db/" + data.id,
                        mimeType: 'json',
                        success: function (inf) {
                            console.log('Delete!');
                            setTimeout(window.location.href = "index.html", 30000);
                        }
                    });
                    //setTimeout(location.reload.bind(location), 900);
                });
            });
        }});
    });