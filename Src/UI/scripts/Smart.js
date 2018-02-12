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
     var xhttp = new XMLHttpRequest();
     var getBalanceUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/getBalance/0x4DccD0F0f1d4C11b93a1D027894892652122fEcE";

     xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
             if (xhttp.status === 200) {
                 var response = JSON.parse(xhttp.responseText);
                 //alert(response);
                 //$('ExistingFethers').html(response);
                 document.getElementById('ExistingLicense').innerHTML = response;
             } else {
                 alert(xhttp.status);
                 alert("error");
             }
         }
     }

     xhttp.open("GET", getBalanceUrl, false);
     xhttp.setRequestHeader("Content-type", "application/json");
     xhttp.send();
 }

function GetMaxConcurrencies() {
    var xhttp = new XMLHttpRequest();
    //var getBalanceUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/getBalance/0x4DccD0F0f1d4C11b93a1D027894892652122fEcE";

    //xhttp.onreadystatechange = function () {
    //    if (xhttp.readyState == 4) {
    //        if (xhttp.status === 200) {
    //            var response = JSON.parse(xhttp.responseText);
    //            //alert(response);
    //$('ExistingLicense').html(2);
    document.getElementById('ExistingLicense').innerHTML = 2;
    //        } else {
    //            alert(xhttp.status);
    //            alert("error");
    //        }
    //    }
    //}

    //xhttp.open("GET", getBalanceUrl, false);
    //xhttp.setRequestHeader("Content-type", "application/json");
    //xhttp.send();
}

function SetConcurrency(userId, count,username) {
    var xhttp = new XMLHttpRequest();
    var setConUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/exeContract/setConcurrency/" + count + "/" + userId + "/" + username;

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status === 200) {
                var response = JSON.parse(xhttp.responseText);
                alert(response);
            } else {
                alert(xhttp.status);
                alert("error");
            }
        }
    }

    xhttp.open("GET", setConUrl, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function IncrementConCurrency(userId, count,username) {
    var xhttp = new XMLHttpRequest();
    var setConUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/exeContract/incrementConcurrency/" + count + "/" + userId + "/" + username;

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status === 200) {
                var response = JSON.parse(xhttp.responseText);
                alert(response);
            } else {
                alert(xhttp.status);
                alert("error");
            }
        }
    }

    xhttp.open("GET", setConUrl, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function login(userId,username) {
    var xhttp = new XMLHttpRequest();
    var loginUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/exeContract/login/" + userId + "/" + username;

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status === 200) {
                var response = JSON.parse(xhttp.responseText);
                alert(response);
            } else {
                alert(xhttp.status);
                alert("error");
            }
        }
    }

    xhttp.open("GET", loginUrl, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function logout(userId,username) {
    var xhttp = new XMLHttpRequest();
    var logoutUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/exeContract/logout/" + userId + "/" + username;

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status === 200) {
                var response = JSON.parse(xhttp.responseText);
                alert(response);
            } else {
                alert(xhttp.status);
                alert("error");
            }
        }
    }

    xhttp.open("GET", logoutUrl, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function GetConcurrentBalance(userId, loginCb, manageCb) {
    var xhttp = new XMLHttpRequest();
    var getConBalanceUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/exeContract/GetConcurrentUserBalance/" + userId;

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status === 200) {
                var response = JSON.parse(xhttp.responseText);
                //$('ExistingLicense').text = response;
                //alert(response);
                if (response == 0)
                {
                    manageCb();
                }
                else
                {
                    loginCb();
                }
            } else {
                alert(xhttp.status);
                alert("error");
            }
        }
    }

    xhttp.open("GET", getConBalanceUrl, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function TransferEthers(userId, accountTo, ethers) {
    var xhttp = new XMLHttpRequest();
    var transferUrl = "http://smartractsapi.azurewebsites.net/api/EthereumTest/exeContract/TransferEther/" + userId + "/" + accountTo + "/" + ethers;

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status === 200) {
                var response = JSON.parse(xhttp.responseText);
                alert('Successfully transferred Ethers!');
            } else {
                alert(xhttp.status);
                alert("error");
            }
        }
    }

    xhttp.open("GET", transferUrl, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}