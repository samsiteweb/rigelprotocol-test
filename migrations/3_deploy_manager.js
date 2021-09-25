const ContractManager = artifacts.require('ContractManager')
const ContestantStorage = artifacts.require('ContestantStorage');
const VoteStorage = artifacts.require('VoteStorage');
const AdministratorStorage = artifacts.require('AdministratorStorage');

module.exports = function(_deployer) {
    _deployer.deploy(ContractManager)
        .then(() => {
            return ContractManager.deployed()
        })
        .then(manager => {
            return Promise.all([
                manager.setAddress("ContestantStorage", ContestantStorage.address),
                manager.setAddress("AdministratorStorage", AdministratorStorage.address),
                manager.setAddress("VoteStorage", VoteStorage.address),
            ])
        })

}