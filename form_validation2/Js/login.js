$(document).ready(function(){
  $(".error").hide();
  $("#my_form").submit(function(){
    if($("#email1_").val()== '' && $("#password1_").val()== ''){
      alert("hello");
      $("#email1_error").show();
      $("#password1_error").show();
      return false;
    }
    else if($("#email1_").val()== ''){
        $("#email1_error").show();
        $("#password1_error").hide();
        return false;
    }

    else if($("#password1_").val()== ''){
        $("#email1_error").hide();
        $("#password1_error").show();
        return false;
    }
  });
});
