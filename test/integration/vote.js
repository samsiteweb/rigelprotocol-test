const VoteStorage = artifacts.require("VoteStorage");
const VoteController = artifacts.require("ContestantController");
const utils = require("../utils")
const {assertVMException} = utils

contract("Contestant storage integration test", function (accounts) {
  let storageInstance;
  let controller;
  beforeEach( async () => {
    controller = await VoteController.deployed();
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

});
