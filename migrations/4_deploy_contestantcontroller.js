const ContestantController = artifacts.require('ContestantController')
const ContestantStorage = artifacts.require('ContestantStorage');
const ContractManager = artifacts.require('ContractManager')

module.exports = (deployer) => {

    deployer.deploy(ContestantController).then(() => {
        return ContestantController.deployed()
    }).then( userCtrl => {
        userCtrl.setManagerAddr(ContractManager.address)
        return Promise.all([
            ContractManager.deployed(),
            ContestantStorage.deployed(),
        ])
    }).then(([manager, storage]) => {
        return Promise.all([
            manager.setAddress("ContestantController", ContestantController.address),
            storage.setControllerAddr(ContestantController.address)
        ])
    })

}