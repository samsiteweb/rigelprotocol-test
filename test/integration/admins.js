const AdministratorStorage = artifacts.require('AdministratorStorage')
const AdministratorController = artifacts.require('AdministratorController')

contract('Admin Storage', () => {

    it("can Add an Admin with controller", async () => {
        const controller = await AdministratorController.deployed()

        const adminName = web3.utils.fromAscii("Lawal")
        const tx = await controller.createAdmin(adminName)

        assert.isOk(tx)
    })

})