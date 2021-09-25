const VoteController = artifacts.require('VoteController')
const VoteStorage = artifacts.require('AdminStorage');
const ContractManager = artifacts.require('ContractManager')

module.exports = (deployer) => {

    deployer.deploy(VoteController)
        .then(() => {
            return VoteController.deployed()
        })
        .then(voteCtrl => {
            voteCtrl.setManagerAddr(ContractManager.address)

            return Promise.all([
                ContractManager.deployed(),
                VoteStorage.deployed(),
            ])
        })
        .then(([manager, storage]) => {
            return Promise.all([
                manager.setAddress("VoteController", VoteController.address),
                storage.setControllerAddr(VoteController.address),
            ])
        })
}