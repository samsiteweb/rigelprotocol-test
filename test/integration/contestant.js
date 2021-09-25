const ContestantStorage = artifacts.require("ContestantStorage");
const ContestantController = artifacts.require("ContestantController");
const utils = require("../utils")
const {assertVMException} = utils

contract("Contestant storage integration test", function (accounts) {
  let storageInstance;
  let controller;
  beforeEach( async () => {
    controller = await ContestantController.deployed();
  })

it("should not create a candidate without controller", async function () {
      try {
        storageInstance = await ContestantStorage.deployed();
        const username = web3.utils.fromAscii("samthedonz")
          const candidateParty = web3.utils.fromAscii("PDP")
        const tx = await storageInstance.createUser(username,  candidateParty )
        assert.fail()
      } catch (error) {
        assertVMException(error)
      }
  });

    it("can create candidate with controller", async function () {
        const candidateName = web3.utils.fromAscii("Samuel")
        const candidateParty = web3.utils.fromAscii("PDP")
        // console.log("tx")
        const tx = await controller.registerCandidate(candidateName, candidateParty)

        assert.isOk(tx)
    });

    it("can get candidates", async () => {
        storage = await ContestantStorage.deployed();
        const candidateInfo = await storage.candidates.call(1)
        const candidateName = web3.utils.toAscii(candidateInfo[1]).replace(/\u0000/g, '')
        assert.equal(candidateName, "Samuel")
    });

});
