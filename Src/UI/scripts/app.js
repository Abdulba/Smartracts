window.App = {
 setStatus: function(message) {
    alert(message);
  },

 login: function() {
    var self = this;
    login('0x4DccD0F0f1d4C11b93a1D027894892652122fEcE');
    window.location.href = "welcome.html";
  },

  logout: function() {
    var self = this;
    logout('0x4DccD0F0f1d4C11b93a1D027894892652122fEcE');
    window.location.href = "login.html";
 },

  payEthers: function () {
      var self = this;
      TransferEthers('0x5A5AA2714b31CFE3FD626B479a466Cf63EB90248', '0x4DccD0F0f1d4C11b93a1D027894892652122fEcE', 10);
      window.location.href = "login.html";
  },

  refreshBalance: function() {
    var self = this;
    alert(value.valueOf());
  }
};

