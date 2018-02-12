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

 function GetAccountBalanceHttp(callback)
 {
     var xhttp = new XMLHttpRequest();
     var getBalanceUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/getBalance/0x4DccD0F0f1d4C11b93a1D027894892652122fEcE";

     //xhttp.addEventListener('load', callback);
     xhttp.addEventListener('error', () => console.log("Request to " + getBalanceUrl + " failed"));
     xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4 && xhttp.status == 200) {
             callback(xhttp);
         }
     }
     xhttp.open("GET", getBalanceUrl, true);
     xhttp.setRequestHeader("Content-type", "application/json");
     xhttp.send();
     //alert(xhttp.responseText);

     //alert(JSON.parse(xhttp.responseText));
 }

 function GetAccountBalance()
 {
     GetAccountBalanceHttp(function (xhttp) {
         debugger;
         alert(xhttp.responseText);
     })
 }


