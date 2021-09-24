const CandidateStorage = artifacts.require("CandidateStorage");

module.exports = function(_deployer) {
  _deployer.deploy(CandidateStorage);
};
