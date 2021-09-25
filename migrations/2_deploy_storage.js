const ContestantStorage = artifacts.require("ContestantStorage");
const AdministratorStorage = artifacts.require("AdministratorStorage");
const VoteStorage = artifacts.require("VoteStorage");

module.exports = function(_deployer) {
  _deployer.deploy(ContestantStorage)
  _deployer.deploy(AdministratorStorage)
  _deployer.deploy(VoteStorage)
};
