const AdminStorage = artifacts.require("AdminStorage");

module.exports = function(_deployer) {
  _deployer.deploy(AdminStorage)
};
