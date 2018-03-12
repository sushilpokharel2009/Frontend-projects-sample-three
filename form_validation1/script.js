$(document).ready(function(){
  $(".error").hide();
  $("#selectKtm").hide();
  $("#selectIndian").hide();
  $("#selectNw").hide();
  // $("#selectKtm").change();
  $("#my_form").submit(function(){
    var name = $("#name_").val();
    var name_length = $("#name_").length;
    var email = $("#email_").val();
    var pass = $("#password_").val();
    var rpass = $("#rpassword_").val();
    var number = $("#number_").val();
    var number_length = $("#number_").length;
    var cemployer = $("#employer_").val();
    var cemployerAdd = $("#employer_address").val();
    var pemployer = $("#pemployer_").val();
    var pemployerAdd = $("#pemployer_address").val();
    // var cty = $("#select_").val();
    // $("#city").val(cty);

    if(name_length<10 && number_length<10 && pass!=rpass){
      alert("enter your name again");
      alert("enter your phone number again");
      alert("enter the same password");
    }
    if(name == "" && email == "" && pass == "" && rpass == "" &&
    number == "" && cemployer == "" && cemployerAdd == "" &&
    pemployer == "" && pemployerAdd == ""){
      $("#name_error").show();
      $("#email_error").show();
      $("#password_error").show();
      $("#rpassword_error").show();
      $("#number_error").show();
      $("#employer_error").show();
      $("#employerAddress_error").show();
      $("#pemployer_error").show();
      $("#pemployerAddress_error").show();
    }
  });
  $("#date").datepicker({
    format: ('dd/mm/yyyy'),
    startDate: new Date()
  });
  $("#select_").change(function(){
    // alert($("#select_").val());
    if($("#select_").val() == "np"){
        $("#selectKtm").show();
        $("#selectIndian").hide();
        $("#selectNw").hide();
    }

    if ($("#select_").val() == "ind"){
      $("#selectIndian").show();
      $("#selectKtm").hide();
      $("#selectNw").hide();
    }
    if($("#select_").val() == "new"){
      $("#selectNw").show();
      $("#selectIndian").hide();
      $("#selectKtm").hide();
    }
  });
});
