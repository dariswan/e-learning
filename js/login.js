function do_login()
{
 var username=$("#username").val();
 var pass=$("#password").val();
 if(username!="" && pass!="")
 {
  $("#loading_spinner").css({"display":"block"});
  $.ajax
  ({
  type:'post',
  url:'localhost/SiamService/proseslogin.php',
  data:{
   do_login:"do_login",
   username:username,
   password:pass
  },
  success:function(response) {
  if(response=="success")
  {
    window.location.href="index.php";
  }
  else
  {
    $("#loading_spinner").css({"display":"none"});
    alert("Wrong Data");
  }
  }
  });
 }

 else
 {
  alert("Please Fill All The data");
 }

 return false;
}