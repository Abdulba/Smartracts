 function CalculateLicense()
  {

       var txt1 = document.getElementById("ExistingLicense");
       var txt2 = document.getElementById("NewLicense");
       var txt3 = document.getElementById("TotalLicense");
       if ((txt1.value != "") && (txt2.value != ""))
       {
            txt3.value = parseInt(txt1.value) + parseInt(txt2.value);
       }

  }

 function CalculateFether()
 {
	  var txtnewlicense = document.getElementById("NewLicense");
	   var txtamount = document.getElementById("txtamounttopay");
       if ((txtnewlicense.value != ""))
       {
            txtamount.value = parseInt(txtnewlicense.value) * 10;
       }

 }

 function GetAccountBalance()
 {
     $.get("https://smartractsapi.azurewebsites.net/getBalance/", function (data) {
         $(".result").html(data);
     });
 }