const AdminStorage = artifacts.require('AdminStorage')

contract('Admin Storage', () => {

    it("can Add an Admin", async () => {
        const storage = await AdminStorage.deployed()

        const adminName = web3.utils.fromAscii("Lawal")
        const tx = await storage.addAdmin(adminName)

        assert.isOk(tx)
    })

})