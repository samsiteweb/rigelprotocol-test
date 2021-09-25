const AdministratorController = artifacts.require('AdminController')
const AdministratorStorage = artifacts.require('AdminStorage');
const ContractManager = artifacts.require('ContractManager')

module.exports = function(deployer) {

    deployer.deploy(AdministratorController)
        .then(() => {
            return AdministratorController.deployed()
        })
        .then(adminCtrl => {
            adminCtrl.setManagerAddr(ContractManager.address)

            return Promise.all([
                ContractManager.deployed(),
                AdministratorStorage.deployed(),
            ])
        })
        .then(([manager, storage]) => {
            return Promise.all([
                manager.setAddress("AdministratorController", AdministratorController.address),
                storage.setControllerAddr(AdministratorController.address),
            ])
        })

}