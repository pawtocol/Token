const Token = artifacts.require("UPIToken");

module.exports = function(deployer) {
  deployer.deploy(Token);
};
