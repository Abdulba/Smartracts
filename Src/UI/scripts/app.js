web3 = new Web3(new Web3.providers.HttpProvider("http://52.187.176.233:8000"));
abi = JSON.parse('[ { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "currentCount", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "accountId", "type": "address" } ], "name": "login", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "maxCount", "outputs": [ { "name": "", "type": "uint256", "value": "2" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "accountId", "type": "address" }, { "name": "count", "type": "uint256" } ], "name": "setConcurrency", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "accountId", "type": "address" } ], "name": "getConcurrencyBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "accountId", "type": "address" } ], "name": "logout", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "currentCount", "type": "uint256" }, { "indexed": true, "name": "user", "type": "address" } ], "name": "Transaction", "type": "event" } ]')
conContract = web3.eth.contract(abi);

contractInstance = conContract.at('0xB9162DCD3B4Dd64B34Dfc48276e314469c09D022');
account = "0x5A5AA2714b31CFE3FD626B479a466Cf63EB90248";

window.App = {
 setStatus: function(message) {
    alert(message);
  },
  
 login: function() {
    var self = this;
    contractInstance.login(account, {from: account});      
    //self.refreshBalance();
    window.location.href = "welcome.html";    
  },

  logout: function() {
    var self = this;   
    contractInstance.logout(account, {from: account});        
    //self.refreshBalance();
    window.location.href = "login.html";
  },
  
  refreshBalance: function() {
    var self = this;
    var  value = contractInstance.getConcurrencyBalance.call(account, {from: account});
    alert(value.valueOf());   
  }  
};
  
  