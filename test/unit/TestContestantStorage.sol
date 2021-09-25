// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../../contracts/contestant/ContestantStorage.sol";

contract TestContestantStorage{

    ContestantStorage contestantStorage;

    constructor() public {
        contestantStorage = new ContestantStorage();
        contestantStorage.setControllerAddr(address(this));
    }

    function testCreateFirstUser() public {
        uint _expectedId = 1;
        Assert.equal(contestantStorage.registerCandidate("samthedonz", "PDP"), _expectedId, "Should create user with ID 1");
    }
}